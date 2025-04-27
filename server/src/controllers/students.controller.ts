import { Request, Response } from 'express';
import * as students from '../data/students.json';

export const getAllStudents = (req: Request, res: Response) => {
  res.send(students);
};