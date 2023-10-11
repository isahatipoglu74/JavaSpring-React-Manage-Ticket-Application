
import CryptoJS from 'crypto-js'

//şifreyi plainText olarak al, key123 kod adı ile chiperText çevir
export const encrypt = (plainText:string) => {
    const ciphertext = CryptoJS.AES.encrypt(plainText, 'key123').toString();
    return ciphertext
}

//Crypto lanmış chipherText i al ve orjinal haline dönüşütür.
export const decrypt = ( cipherText:string ) => {
    const bytes  = CryptoJS.AES.decrypt(cipherText, 'key123');
    const originalText = bytes.toString(CryptoJS.enc.Utf8);
    return originalText
}