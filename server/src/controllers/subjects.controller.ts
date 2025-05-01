import { Request, Response } from "express";
import subjects from "../data/subjects.json" with { type: "json" };

export const getAllSubjects = (req: Request, res: Response) => {
    res.send(subjects)
}