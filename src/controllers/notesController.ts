import { Request, Response } from "express";
import { NoteService, IdService } from "../types/genericTypes.js";
import notesRepository from "../repositories/notesRepository.js";
import noteService from "../services/noteService.js";


export async function createNote(req: Request, res: Response){
    const note = req.body;
    const { user } = res.locals;
    console.log("esse é o user no controller", user.id);
    await noteService.createNote(user.id, note);
    res.sendStatus(201);
}

export async function getNote(req: Request, res: Response){
    const id = parseInt(req.params.id);
    const { user } = res.locals;
    console.log(id, user);
    const note = await noteService.renderNote(id);
    res.status(200).send(note);
}