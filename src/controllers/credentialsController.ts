import { Request, Response } from "express";
import credentialsRepository from "../repositories/credentialsRepository.js";
import { CredentialData } from "../repositories/credentialsRepository.js";

export async function createCredential(req: Request, res: Response){
    const credential: CredentialData = req.body;
    const { user } = res.locals;
    await credentialsRepository.insertCredential(credential, user);
    res.sendStatus(201);
}