import { credentials } from "@prisma/client";
import Cryptr from "cryptr";

export async function encrypt(password: string){
    const cryptrKey = process.env.CRYPTR_KEY;
    const cryptr = new Cryptr(cryptrKey);
    const encryptString = cryptr.encrypt(password);
    return encryptString;
}
