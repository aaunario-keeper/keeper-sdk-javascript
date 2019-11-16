import {Auth, AuthUI} from "../src/auth";
import {Vault} from "../src/vault";
import {connectPlatform} from "../src/platform";
import {nodePlatform} from "../src/node/platform";
import * as readline from "readline";
import {VendorContext} from "../src/vendorContext";
import {Company} from "../src/company";
import {EnterpriseDataInclude} from "../src/commands";
import {KeeperEnvironment} from "../src/endpoint";

process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

connectPlatform(nodePlatform);


async function printVault() {

    let authUI: AuthUI = {
        displayDialog(): Promise<boolean> {
            return null
        },
        getTwoFactorCode(): Promise<string> {
            return new Promise<string>((resolve, reject) => {
                const rl = readline.createInterface({
                    input: process.stdin,
                    output: process.stdout
                });
                rl.question("Enter Code: ", code => {
                    resolve(code);
                    rl.close();
                });
            });
        }
    };

    try {
        let auth = new Auth({
            host: KeeperEnvironment.DEV
        }, authUI);
        await auth.login("saldoukhov@gmail.com", "111111");
        console.log("login successful");
        let vault = new Vault(auth);
        await vault.syncDown();
        for (let record of vault.records) {
            console.log(record.data.title)
        }
    } catch (e) {
        console.log(e);
    }
}

async function printCompany() {
    try {
        let auth = new Auth({
            host: KeeperEnvironment.DEV
        });
        await auth.login("saldoukhov@gmail.com", "111111");
        console.log("login successful");
        let company = new Company(auth);
        let allIncludes: EnterpriseDataInclude[] = [
            "nodes",
            "users",
            "roles",
            "role_enforcements",
            "role_privileges",
            "role_users",
            "managed_nodes",
            "licenses",
            "team_users",
            "teams",
            "role_keys",
            "role_keys2",
            "queued_teams",
            "queued_team_users",
            "bridges",
            "scims",
            "email_provision",
            "sso_services",
            "user_privileges"
        ];
        await company.load(allIncludes);
        for (let node of company.data.nodes) {
            console.log(node.displayName);
        }
        for (let role of company.data.roles) {
            console.log(role.displayName);
        }
        for (let user of company.data.users) {
            console.log(user.displayName);
        }
    } catch (e) {
        console.log(e);
    }
}

async function getVendorEnterprise() {
    let privateKey = "-----BEGIN PRIVATE KEY-----\n" +
        "MIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQCrvFUEzWbHjy2H\n" +
        "e92xUFyVAstX0QV7lfkwpClvww8eeebwBOelYFOdwaBwCKR7ZN6vfcv2POEY1phw\n" +
        "4qgd6BUaSUZ1aDLXeCKyilpZVlU7PRgIwXxnJAjyHpPO5kL3mD6YRfotRhBfpnnP\n" +
        "s17xKGQwKd1IupSwqZ4gdPAa618+a/gTEHwRQuHLXP3hwtJArbAm+pJmLEB2ijgJ\n" +
        "cEtFt9o6dyZrkKN/rBkFTz0KJnRoYOCnQjDzWeCvKf9GBFUC9bM8w5PeCu8O8uqr\n" +
        "UgPvH0OfGCWs3w6y6kSDtgenOlVSCFsyBZem0ZInI1TXP4NIffWvDRBVRDndHjKh\n" +
        "cyp+yg3zAgMBAAECggEAfyAVi02FFJovKMiPTg9fyUpdPe9TcK2O3evXZIzu5y9z\n" +
        "vR7UXv4UR4YqfmRXZaRAl4W2ctuUAS/xfja6HhFLdb7iMkzkvc2HWcTCprkatJQ/\n" +
        "81NPBIaPPLNX1ONslR2U0GGUlOj1e+ie6RotYLT2nRSQYqMDKFcW343Qowyy32AT\n" +
        "qmY4vm5BCipG6FsIQzhO8vsbyGQUKLZNFrxaAKNaWyfMEri0Wr7PXpsHa0Hq+TAc\n" +
        "9pZ2xLft9T3haoGRpc50geb7MdDQPj8p/fvrE7K2fDgx9ioavq7FpgfF3GCvlUjB\n" +
        "m0wOhcibP/9ZkRR2X6M14WD9CwrMfiybmEbA3iy/4QKBgQDj+wNgfiyKCiBiqSmP\n" +
        "JR1QSgwU7+wsJUajdeoOeKfJWlObJVLvTbqFfRipg7YvPtSl5UAZvFsUE2N2cvGv\n" +
        "xYQyLEfIWr6I2RJvwVpKOuDccIxv+3XN4xPoeUUsqDW9MN1ni8Yu1TrVWBThM6Cj\n" +
        "i1XFy9apzHEBt248ieE6J5+Q8QKBgQDA162vIqbP8KthH7vsTldFl8hGmFBMOkko\n" +
        "vewWypNQXBPSpcE3HQ6CVm8KE0XeZ2oDWKg7rsnjnXL8jmTCUbjbc339Wsg2Mf8F\n" +
        "k0CUFjoeAcRw7Wd/FgtT4jkcSBhoy6yiDqCUdFxKPkvfTV0YNk6caO+fwIuKNYB1\n" +
        "pDmXc20NIwKBgAqnta2x1/UPqhnSXC3jhy40d8IWwIwDpfyHy0un2fewMA4lPW4P\n" +
        "zPLmONvbWw10O04Rm+BYDE2w5kon7yHO8nHB3g0AKL2On6z3dXfYrp++5uFo+EWK\n" +
        "ImkQGeqPZguUmBR51OZlct17w2YPGqfqIDUhZMQE2RdCcnWD4DHunieRAoGAX7as\n" +
        "7hA022CIr1wg2djIWDJNpTxUHoGPbjlVxLonA+uvqw26KLCzUt2znzyRoSGS7LZE\n" +
        "SdsnOWIcgF3shMYrCkD4d5dnZ/7IpOvBUb72eY5HAgXTKLC4Tpop3m+qLdlphcXc\n" +
        "zdIzPGZPIjYzzqClw9wRkyjuGVsUt08bhqAzsCECgYBbjK4ymswfr+YBtXRKxnWZ\n" +
        "JEA9SrPG7Xmwt4eRQz3GqZh+NZa4RX7Xv83abGLQW1q00+dBDu1BPq/8zYklaCHg\n" +
        "sjaIG5ANwzZTjY5WJ0NI4IM47EW9OPgTW9TRlSAJuDXuiQ3MwKQB1KuenAmKMlTg\n" +
        "9KfnJ+WnTxlRq5+1zvELZw==\n" +
        "-----END PRIVATE KEY-----\n";

    let vendorContext = new VendorContext({
        vendorId: "sa",
        privateKey: privateKey,
        host: "local.keepersecurity.com"
    });

    try {
        // let ent = await vendorContext.getEnterprise(1818);
        let ent = await vendorContext.postLicenseAdjustment(1818, {
            seats: 0,
            products: [
                {
                    product_id: "business",
                    seats: -15
                }
            ]
        });
        console.log(JSON.stringify(ent));
    } catch (e) {
        console.log("Error " + e);
    }
}

// printCompany().finally();
printVault().finally();
// getVendorEnterprise().finally();



