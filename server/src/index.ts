import express, { Application } from 'express';
import studentRoutes from './routes/students.routes.js';
import subjectRoutes from './routes/subjects.routes.js';
import professorRoutes from './routes/professors.routes.js';

const app: Application = express();

app.disable('x-powered-by'); // 🔥 For better security protection, not leak out you're using Express and the version

// Middleware
app.use(express.json());

// Routes
app.use('/students', studentRoutes);
app.use('/subjects', subjectRoutes);
app.use('/professors', professorRoutes)

// Default route
app.get('/', (_req, res) => {
  res.send('Welcome to the Student Managment API Khoa');
})

export default app;