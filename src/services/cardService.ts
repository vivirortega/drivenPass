import { CardService } from "../types/genericTypes.js"
import cardRepository from "../repositories/cardRepository.js"
import * as utils from "../utils/index.js";

interface UserProps {
    id: number;
    user_id: number;
    user: string;
}

async function createCard(user_id: number, note: CardService){
    const passwordHash = await utils.encrypt(note.password);
    const cvcHash = await utils.encrypt(note.cvc);
    console.log("userid depois de vir do controller", user_id);
    await cardRepository.insertCard(user_id, {...note, password: passwordHash, cvc: cvcHash});
}


async function renderCard(id: number){
    const card = await cardRepository.selectCard(id);

    if(!card){
        throw {
            status: "not found",
            message: "card not found"
        };
    }
    return card;
}

async function removeCard(id: number){
    const card = await cardRepository.selectCard(id);

    if(!card){
        throw {
            status: "not found",
            message: "card not found"
        };
    }

    await cardRepository.deleteCard(id);
}

const cardService = {
    createCard, renderCard, removeCard,
  };
  export default cardService;
  