import { IdService, NoteService } from "../types/genericTypes.js"
import notesRepository from "../repositories/notesRepository.js"

interface UserProps {
    id: number;
    user_id: number;
    user: string;
}

async function createNote(user_id: number, note: NoteService){
    console.log("antes de ir pra checar o titulo", user_id)
    const checkTitle = await notesRepository.checkTitle(user_id, note.title);
    if(checkTitle){
        throw {
            status: "unauthorized",
            message: "title already registered"
        };
    }
    console.log("user depois da função de checar titulo", user_id);
    await notesRepository.insertNote(user_id, {...note});
}

async function renderNote(id: number){
    const note = await notesRepository.selectNote(id);

    if(!note){
        throw {
            status: "not found",
            message: "note not found"
        };
    }
    return note;
}

async function deleteNote(id: number){
    const noteExist = await notesRepository.selectNote(id);
    if(!noteExist){
        throw {
            status: "not found",
            message: "note not found"
        };
    }
    
    await notesRepository.deleteNote(id);
}

const noteService = {
    createNote, renderNote, deleteNote,
  };

export default noteService;
  