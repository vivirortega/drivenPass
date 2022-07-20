import { Request, Response } from "express";
import cardRepository from "../repositories/cardRepository.js";
import cardService from "../services/cardService.js";

export async function createCard(req: Request, res: Response) {
  const card = req.body;
  const { user } = res.locals;

  console.log("esse é o id no controller", user.id);
  await cardService.createCard(user.id, card);
  res.sendStatus(201);
}

export async function getCard(req: Request, res: Response) {
  const id = parseInt(req.params.id);

  const card = await cardService.renderCard(id);
  res.status(200).send(card);
}
