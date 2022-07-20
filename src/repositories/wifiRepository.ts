import prisma from "../database/database.js";
import { WifiService } from "../types/genericTypes.js";


interface UserProps {
    user_id: number;
  }

export async function insertWifi(user_id: number, wifi: WifiService) {
    console.log("esse é os valores do repositorio wifi", { ...wifi, user_id });
    await prisma.wifi.create({ data: { ...wifi, user_id }});
  }

export async function getWifi(id: number){
    return await prisma.wifi.findFirst({
        where: {
          id: id,
        },
      });
}

export async function deleteWifi(id: number) {
  return await prisma.wifi.deleteMany({
    where: {
      id: id,
    },
  });
}

const wifiRepository = {
  insertWifi, getWifi, deleteWifi
};

export default wifiRepository;
