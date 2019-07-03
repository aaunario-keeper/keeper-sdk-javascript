import {Platform} from "../platform";
import {keeperKeys} from "../keeperSettings";
import {_asnhex_getHexOfV_AtObj, _asnhex_getPosArrayOfChildren_AtObj} from "./asn1hex";
import {RSAKey} from "./rsa";
import {AES, WordArray, pad, enc, mode} from "crypto-js";

export const browserPlatform: Platform = class {
    static keys = keeperKeys.der;

    static getRandomBytes(length: number): Uint8Array {
        let data = new Uint8Array(length);
        crypto.getRandomValues(data);
        return data
    }

    static bytesToBase64(data: Uint8Array): string {
        if (!data)
            return null;
        return btoa(browserPlatform.bytesToString(data));
    }

    static base64ToBytes(data: string): Uint8Array {
        return Uint8Array.from(atob(data), c => c.charCodeAt(0))
    }

    static bytesToString(data: Uint8Array): string {
        if (!data)
            return null;
        return String.fromCharCode(...data);
    }

    static publicEncrypt(data: Uint8Array, key: string): Uint8Array {
        let publicKeyHex = base64ToHex(key);
        const pos = _asnhex_getPosArrayOfChildren_AtObj(publicKeyHex, 0);
        const hN = _asnhex_getHexOfV_AtObj(publicKeyHex, pos[0]);
        const hE = _asnhex_getHexOfV_AtObj(publicKeyHex, pos[1]);
        const rsa = new RSAKey();
        rsa.setPublic(hN, hE);
        const hexBytes = bytesToHex(data);
        const encryptedBinary = rsa.encryptBinary(hexBytes);
        const bytes = hexToBytes(encryptedBinary);
        return bytes;
    }

    static async aesGcmEncrypt(data: Uint8Array, key: Uint8Array): Promise<Uint8Array> {
        let _key = await crypto.subtle.importKey("raw", key, "AES-GCM", true, ["encrypt"]);
        let iv = browserPlatform.getRandomBytes(12);
        let res = await crypto.subtle.encrypt({
            name: "AES-GCM",
            iv: iv
        }, _key, data);
        return Uint8Array.of(...iv, ...new Uint8Array(res))
    }

    static async aesGcmDecrypt(data: Uint8Array, key: Uint8Array): Promise<Uint8Array> {
        let _key = await crypto.subtle.importKey("raw", key, "AES-GCM", true, ["decrypt"]);
        let iv = data.subarray(0, 12);
        let encrypted = data.subarray(12);
        let res = await crypto.subtle.decrypt({
            name: "AES-GCM",
            iv: iv
        }, _key, encrypted);
        return new Uint8Array(res);
    }

    static aesCbcEncrypt(data: Uint8Array, key: Uint8Array, usePadding: boolean): Uint8Array {
        let iv = browserPlatform.getRandomBytes(16);
        let encrypted = AES.encrypt(
            bytesToWordArray(data),
            bytesToWordArray(key), {
            iv: bytesToWordArray(iv),
            mode: mode.CBC,
            padding: usePadding
                ? pad.Pkcs7
                : pad.NoPadding
        });
        return Uint8Array.of(...iv, ...wordArrayToBytes(encrypted));
    }

    static aesCbcDecrypt(data: Uint8Array, key: Uint8Array, usePadding: boolean): Uint8Array {
        let decrypted = AES.decrypt(
            browserPlatform.bytesToBase64(data.subarray(16)),
            bytesToWordArray(key),
            {
                iv: bytesToWordArray(data.subarray(0, 16)),
                mode: mode.CBC,
                padding: usePadding
                    ? pad.Pkcs7
                    : pad.NoPadding
            });
        return hexToBytes(decrypted.toString());
    }

    static async deriveKey(password: string, saltBytes: Uint8Array, iterations: number): Promise<Uint8Array> {
        let key = await crypto.subtle.importKey("raw", utf8ToBytes(password), "PBKDF2", false, ["deriveBits"]);
        let derived = await crypto.subtle.deriveBits({
            name: "PBKDF2",
            salt: saltBytes,
            iterations: iterations,
            hash: {
                name: "SHA-256"
            }
        }, key, 256);
        return new Uint8Array(derived);
    }

    static async calcAutoResponse(key: Uint8Array): Promise<string> {
        let digest = await crypto.subtle.digest("SHA-256", key);
        return browserPlatform.bytesToBase64(new Uint8Array(digest));
    }

    static async restCall(url: string, request: Uint8Array): Promise<Uint8Array> {
        let resp = await fetch(url, {
            method: "POST",
            headers: [
                ["Content-Type", "application/octet-stream"],
                ["Content-Length", request.length.toString()]
            ],
            body: request
        });
        console.log(resp);
        let body = await resp.arrayBuffer();
        return new Uint8Array(body);
    }
};

function utf8ToBytes(data: string): Uint8Array {
    return new TextEncoder().encode(data);
}

function base64ToHex(data: string): string {
    let raw = atob(data);
    let hex = '';
    for (let i = 0; i < raw.length; i++) {
        let _hex = raw.charCodeAt(i).toString(16);
        hex += (_hex.length == 2 ? _hex : '0' + _hex);
    }
    return hex;
}

function hexToBytes(data: string): Uint8Array {
    let bytes = [];
    for (let c = 0; c < data.length; c += 2)
        bytes.push(parseInt(data.substr(c, 2), 16));
    return Uint8Array.from(bytes);
}

function bytesToHex(data: Uint8Array): string {
    let hex = [];
    for (let i = 0; i < data.length; i++) {
        let current = data[i] < 0 ? data[i] + 256 : data[i];
        hex.push((current >>> 4).toString(16));
        hex.push((current & 0xF).toString(16));
    }
    return hex.join("");
}

function bytesToWordArray(data: Uint8Array): any {
    let dataHex = bytesToHex(data);
    return enc.Hex.parse(dataHex);
}

function wordArrayToBytes(data: WordArray): Uint8Array {
    let hex = enc.Hex.stringify(data);
    return hexToBytes(hex);
}
