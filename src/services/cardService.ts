import { CardService } from "../types/genericTypes.js"
import cardRepository from "../repositories/cardRepository.js"

interface UserProps {
    id: number;
    user_id: number;
    user: string;
}

async function createCard(user_id: UserProps, note: CardService){
    console.log("userid depois de vir do controller", user_id.user_id);
    await cardRepository.insertCard(user_id.user_id, note);
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

const cardService = {
    createCard, renderCard
  };
  export default cardService;
  