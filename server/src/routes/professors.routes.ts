import { Router } from "express";   
import * as professorController from "../controllers/professors.controller.js";

const router = Router();

// GET all professors
router.get("/", professorController.getAllProfessors);

export default router;