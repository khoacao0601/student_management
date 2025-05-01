import { Router } from 'express';
import * as subjectController from '../controllers/subjects.controller.js';
const router = Router();
// GET all subjects
router.get('/', subjectController.getAllSubjects);
export default router;
