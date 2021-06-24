import crypto from "crypto-js"
async function hash(message:string) {
    // @ts-ignore
    const msgBuffer = new TextEncoder().encode(message);                    
    // @ts-ignore
        const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);
    // @ts-ignore
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    // @ts-ignore
    const hashHex = hashArray.map(b => ('00' + b.toString(16)).slice(-2)).join('');
    return hashHex;
    }

export default hash