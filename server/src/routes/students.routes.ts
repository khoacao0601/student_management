import { Router } from 'express';
import * as studentController from '../controllers/students.controller.js';

const router = Router();

// GET all students
router.get('/', studentController.getAllStudents);

export default router;