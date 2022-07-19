import { credentials, users } from "@prisma/client";
import credentialsRepository from "../repositories/credentialRepository.js";
import { CredentialUserId } from "../types/credentialTypes.js"
import * as utils from "../utils/index.js";
import Cryptr from "cryptr";

const cryptr = new Cryptr(process.env.CRYPTR_KEY);

interface UserProps {
    user_id: number;
    user: string;
}

async function createCredential(credential: CredentialUserId, userProps: UserProps) {
    const validTitle = await credentialsRepository.checkTitle(userProps.user_id, credential.title);
    if(validTitle){
        throw{
            type: "unauthorized",
            message: "title already registered"
        };
    }
    const passwordHash = await utils.encrypt(credential.password);
    await credentialsRepository.insertCredential({...credential, password: passwordHash}, userProps);

}


async function getCredencial(id: number){
    const credentials = await credentialsRepository.getCredencial(id);
   
    credentials.map((credential) => {
        const decryptedString = cryptr.decrypt(credential.password);
        credential.password = decryptedString;
    });

    return credentials;
}


async function deleteCredential(id: number){
   await credentialsRepository.deleteCredential(id);
}

const credentialsService = { createCredential, getCredencial, deleteCredential };
export default credentialsService;
