import { Router } from "express";   
import * as professorController from "../controllers/professors.controller";

const router = Router();

// GET all professors
router.get("/", professorController.getAllProfessors);

export default router;