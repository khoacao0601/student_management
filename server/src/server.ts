import app from './index';

const PORT = process.env.PORT ?? 3000;

app.listen(PORT, () => {
  console.log(`🚀 Server 111 is running at http://localhost:${PORT}`);
});