import {Auth} from './auth'
import {RecordAddCommand, RequestUploadCommand, SyncDownCommand} from './commands'
import {platform} from './platform'
import {decryptFromStorage, encryptForStorage, generateEncryptionKey, generateUid, webSafe64FromBytes} from './utils'

export class Vault {

    private _records: KeeperRecord[] = [];
    private revision: number = 0;

    constructor(private auth: Auth) {
    }

    async syncDown() {
        let syncDownCommand = new SyncDownCommand(this.revision);
        let syncDownResponse = await this.auth.executeCommand(syncDownCommand);
        this.revision = syncDownResponse.revision;
        if (syncDownResponse.full_sync) {
            this._records = [];
        }
        for (let rec of syncDownResponse.records) {
            let meta = syncDownResponse.record_meta_data.find(x => x.record_uid === rec.record_uid);
            let recordKey = decryptFromStorage(meta.record_key, this.auth.dataKey);
            let recordData = decryptFromStorage(rec.data, recordKey);
            let recordExtra = decryptFromStorage(rec.extra, recordKey);
            let record: KeeperRecord = {
                uid: meta.record_uid,
                key: recordKey,
                owner: meta.owner,
                can_edit: meta.can_edit,
                can_share: meta.can_share,
                shared: rec.shared,
                client_modified_time: new Date(rec.client_modified_time),
                version: rec.version,
                revision: rec.revision,
                data: JSON.parse(platform.bytesToString(recordData)),
                extra: JSON.parse(platform.bytesToString(recordExtra))
            };
            this._records.push(record);
        }
        console.log(`${syncDownResponse.records.length} records downloaded. ${this._records.length} are in the vault`);
    }

    async addRecord(recordData: KeeperRecordData, files?: [ExtraFile]) {
        let recordAddCommand = new RecordAddCommand();
        recordAddCommand.record_uid = generateUid();
        let recordKey = generateEncryptionKey();
        recordAddCommand.record_key = encryptForStorage(recordKey, this.auth.dataKey);
        recordAddCommand.record_type = "password";
        recordAddCommand.data = encryptForStorage(platform.stringToBytes(JSON.stringify(recordData)), recordKey);
        recordAddCommand.how_long_ago = 0;
        recordAddCommand.folder_type = "user_folder";

        if (files) {
            let extra: KeeperRecordExtra = {
                fields: [],
                files: files
            }
            recordAddCommand.extra = encryptForStorage(platform.stringToBytes(JSON.stringify(extra)), recordKey)
            recordAddCommand.file_ids = files.map(x => x.id)
        }

        let recordAddResponse = await this.auth.executeCommand(recordAddCommand);
    }

    async updateRecords(recordsData: KeeperRecordData[]) {
    }

    async uploadFile(fileName: string, fileData: Uint8Array, thumbnailData?: Uint8Array): Promise<ExtraFile> {
        const uploadCommand = new RequestUploadCommand()
        uploadCommand.file_count = 1
        uploadCommand.thumbnail_count = thumbnailData ? 1 : 0
        const resp = await this.auth.executeCommand(uploadCommand)
        const uploadInfo = resp.file_uploads[0]
        const fileKey = generateEncryptionKey()
        const encryptedFile = platform.aesCbcEncrypt(fileData, fileKey, false)
        const res = await platform.fileUpload(uploadInfo.url, uploadInfo.parameters, encryptedFile)
        if (res.statusCode !== uploadInfo.success_status_code) {
            throw new Error(`Upload failed (${res.statusMessage}), code ${res.statusCode}`)
        }
        return {
            id: uploadInfo.file_id,
            name: fileName,
            title: fileName,
            key: webSafe64FromBytes(fileKey),
            lastModified: new Date().getTime(),
            size: encryptedFile.length,
            type: '',
        };
    }

    get records(): KeeperRecord[] {
        return this._records;
    }
}

export class KeeperRecord {
    uid: string;
    key: Uint8Array;
    owner: boolean;
    can_share: boolean;
    can_edit: boolean;
    shared: boolean;
    client_modified_time: Date;
    version: number;
    revision: number;
    data: KeeperRecordData;
    extra: KeeperRecordExtra;
}

export interface KeeperRecordData {
    title?: string;
    secret1?: string;
    secret2?: string;
    link?: string;
    notes?: string;
    custom?: { name?: string, value?: string }[];
}

export interface KeeperRecordExtra {
    fields: ExtraField[]
    files: ExtraFile[]
}

export interface ExtraField {
    id: string
    field_type: 'totp'
    field_title: string
    type: number
    data: string
}

export interface ExtraFile {
    id: string
    name: string
    lastModified: number
    size: number
    type: string
    title: string
    key: string
    thumbs?: FileThumb[]
}

export interface FileThumb {
    id: string
    size: number
    type: 'image/png'
    dataURL: string
    realSize: {
        height: number,
        width: number
    }
}
