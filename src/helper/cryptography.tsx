import CryptoJS from 'crypto-js';

// Encryption
export function encrypt(text: string, key: string) {
    const secretKey = CryptoJS.enc.Utf8.parse(key);
    const encrypted = CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(text), secretKey, {
        mode: CryptoJS.mode.ECB,
        padding: CryptoJS.pad.Pkcs7
    });
    return encrypted.toString(); // This includes salt, iv, and ciphertext
}

// Decryption
export function decrypt(ciphertext: string | CryptoJS.lib.CipherParams, key: string) {
    try {
        const secretKey = CryptoJS.enc.Utf8.parse(key);
        const decrypted = CryptoJS.AES.decrypt(ciphertext, secretKey, {
            mode: CryptoJS.mode.ECB,
            padding: CryptoJS.pad.Pkcs7
        });
        return decrypted.toString(CryptoJS.enc.Utf8);
    } catch (error) {
        console.error("Decryption failed:", error);
        return null; // or handle the error as appropriate
    }
}
