import { IdService, NoteService } from "../types/genericTypes.js"
import notesRepository from "../repositories/notesRepository.js"

interface UserProps {
    id: number;
    user_id: number;
    user: string;
}

async function createNote(user_id: UserProps, note: NoteService){
    //const checkTitle = await notesRepository.checkTitle(user.id, note.title);
    //if(checkTitle){
        //throw {
            //status: "unauthorized",
            //message: "title already registered"
        //};
    //}
    console.log("user depois da função de checar titulo", user_id);
    await notesRepository.insertNote(user_id.user_id, note);
}


const noteService = {
    createNote
  };
  export default noteService;
  