import { Request, Response } from "express";
import wifiRepository from "../repositories/wifiRepository.js";
import wifiService from "../services/wifiService.js";


export async function createWifi(req: Request, res: Response){
    const wifi = req.body;
    const { user } = res.locals;
    console.log("esse é o user no controller", user.id);
    await wifiService.createWifi(user.id, wifi);
    res.sendStatus(201);
}

export async function getWifi(req: Request, res: Response){
    const id = parseInt(req.params.id);

    const wifi = await wifiService.renderWifi(id);
    res.status(200).send(wifi);
}

export async function deleteWifi(req: Request, res: Response){
    const id = parseInt(req.params.id);

    await wifiService.deleteWifi(id);
    res.sendStatus(200);
}