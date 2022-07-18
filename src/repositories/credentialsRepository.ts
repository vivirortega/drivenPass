import { credentials, users } from "@prisma/client";
import prisma from "../database/database.js";

export type CredentialData = Omit<credentials, "id" | "user_id">;

export async function checkTitle(user: users, title: string) {
  const titleUser = await prisma.credentials.findFirst({
    where: { user_id: user.id, title },
  });
  return titleUser;
}

export async function insertCredential(credential: CredentialData, user: users) {
  await prisma.credentials.create({ data: {...credential, user_id: user.id,  } });
}

const credentialsRepository = { checkTitle, insertCredential };
export default credentialsRepository;
