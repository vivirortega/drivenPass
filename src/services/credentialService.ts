import { credentials, users } from "@prisma/client";
import credentialsRepository from "../repositories/credentialRepository.js";
import { CredentialUserId } from "../types/credentialTypes.js"
import * as utils from "../utils/index.js";

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

const credentialsService = { createCredential };
export default credentialsService;
