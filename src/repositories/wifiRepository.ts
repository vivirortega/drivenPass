import prisma from "../database/database.js";
import { WifiService } from "../types/genericTypes.js";


interface UserProps {
    user_id: number;
  }

export async function insertWifi(user_id: number, wifi: WifiService) {
    console.log("esse é os valores do repositorio wifi", { ...wifi, user_id });
    await prisma.wifi.create({ data: { ...wifi, user_id }});
  }

const wifiRepository = {
  insertWifi,
};

export default wifiRepository;
