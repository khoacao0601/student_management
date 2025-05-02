import express from 'express';
const app = express();
app.disable('x-powered-by'); // 🔥 For better security protection, not leak out you're using Express and the version
// Middleware
app.use(express.json());
// Default route
app.get('/', (_req, res) => {
    res.send('Welcome to the Student Managment API Khoa');
});
export default app;
