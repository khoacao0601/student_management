import express from 'express';
import studentRoutes from './routes/students.routes';
import subjectRoutes from './routes/subjects.routes';
import professorRoutes from './routes/professors.routes';

const app = express();

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