import express from 'express';

const app = express();
const PORT = 3000;

app.get('/', (_req, res) => {
  res.send('Hola Mundo desde Express + TypeScript!');
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
