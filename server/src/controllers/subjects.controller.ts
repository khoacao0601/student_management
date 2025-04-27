import { Request, Response } from "express";
import * as subjects from "../data/subjects.json";

export const getAllSubjects = (req: Request, res: Response) => {
    res.send(subjects)
}