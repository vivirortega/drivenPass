import { Request, Response } from "express";
import credentialsRepository from "../repositories/credentialRepository.js";
import { CredentialUserId } from "../types/credentialTypes.js";
import credentialService from "../services/credentialService.js";

export async function createCredential(req: Request, res: Response){
    const credential: CredentialUserId = req.body;
    const { user } = res.locals;

    await credentialService.createCredential({...credential }, {user_id: user.id, user: ""});
    res.sendStatus(201);
}
