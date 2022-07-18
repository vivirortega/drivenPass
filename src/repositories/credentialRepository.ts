import { credentials, users } from "@prisma/client";
import prisma from "../database/database.js";
import { CredentialUserId } from "../types/credentialTypes.js"

interface UserProps {
  user_id: number;
  user: string;
}


export async function checkTitle(id: number, title: string) {
    const titleUser = await prisma.credentials.findFirst({
      where: { id, title: { equals: title, mode: "insensitive" } },
  })

  return titleUser;
}

export async function insertCredential(credential: CredentialUserId, userProps: UserProps ) {
  console.log({...credential, ...userProps})
  await prisma.credentials.create({data: {...credential, ...userProps}});
}

const credentialsRepository = { checkTitle, insertCredential };
export default credentialsRepository;
