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

const cardService = {
    createCard,
  };
  export default cardService;
  