import wifiRepository from "../repositories/wifiRepository.js";
import { WifiService } from "../types/genericTypes.js";
import * as utils from "../utils/index.js";

async function createWifi(user_id: number, wifi: WifiService) {
   const passwordHash = await utils.encrypt(wifi.password);
    console.log("valor de user no service", user_id, wifi.password, passwordHash);
    await wifiRepository.insertWifi(user_id, {...wifi, password: passwordHash});
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
  