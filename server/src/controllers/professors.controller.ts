import { Request, Response } from "express";
import professors from "../data/professors.json";

export const getAllProfessors = (req: Request, res: Response) => {
    res.send(professors)
}