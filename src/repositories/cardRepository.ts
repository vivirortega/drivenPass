import prisma from "../database/database.js";
import { cards } from "@prisma/client";
import { CardService } from "../types/genericTypes.js";

interface UserProps {
  user_id: number;
}

export async function insertCard(user_id: number, card: CardService) {
    console.log("esse eh o id ao inserir", user_id);
  return await prisma.cards.create({ data: { ...card, user_id } });
}

const cardRepository = {
  insertCard,
};
export default cardRepository;
