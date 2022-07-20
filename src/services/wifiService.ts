import wifiRepository from "../repositories/wifiRepository.js";
import { WifiService } from "../types/genericTypes.js";

async function createWifi(user_id: number, wifi: WifiService) {
    console.log("valor de user no service", user_id);
    await wifiRepository.insertWifi(user_id, wifi);
}

async function renderWifi(id: number){
  const wifi = await wifiRepository.getWifi(id);

  if(!wifi){
      throw {
          status: "not found",
          message: "wifi not found"
      };
  }
  return wifi;
}

async function deleteWifi(id: number){
  const wifi = await wifiRepository.getWifi(id);
  if(!wifi){
    throw{
      status: "not found",
      message: "wifi not found"
    }
  }

  await wifiRepository.deleteWifi(id);
}


const wifiService = {
    createWifi, renderWifi, deleteWifi
  };

export default wifiService;
  