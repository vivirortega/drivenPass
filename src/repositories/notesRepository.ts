import prisma from "../database/database.js";
import { NoteService } from "../types/genericTypes.js";

export async function insertNote(user_id: number, note: NoteService) {
  console.log("esse é os valores da note no repository", { ...note, user_id });
  return prisma.notes.create({ data: { ...note, user_id } });
}

export async function checkTitle(user_id: number, title: string) {
  console.log("user na função check title", user_id);
  const titleUser = await prisma.notes.findFirst({
    where: {
      user_id: user_id,
      title: { equals: title, mode: "insensitive" },
    },
  });
  return titleUser;
}

export async function selectNote(id: number) {
  return await prisma.notes.findFirst({
    where: {
      id: id,
    },
  });
}

export async function deleteNote(id: number) {
  return await prisma.notes.deleteMany({
    where: {
      id: id,
    },
  });
}

const notesRepository = {
  insertNote,
  checkTitle,
  selectNote,
  deleteNote,
};
export default notesRepository;
