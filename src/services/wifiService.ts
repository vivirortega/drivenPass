import wifiRepository from "../repositories/wifiRepository.js";
import { WifiService } from "../types/genericTypes.js";

async function createWifi(user_id: number, wifi: WifiService) {
    console.log("valor de user no service", user_id);
    await wifiRepository.insertWifi(user_id, wifi);
}


const wifiService = {
    createWifi
  };

export default wifiService;
  