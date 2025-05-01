import { Request, Response } from 'express';
import students from '../data/students.json' with { type: "json" };

export const getAllStudents = (req: Request, res: Response) => {
  res.send(students);
};