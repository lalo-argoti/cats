import express from 'express';
import gatosRoutes from './routes/gatos.routes';
import imagenesRoutes from './routes/imagenes.routes';

const app = express();
const PORT = 3000;


app.use(express.json());

app.use('/gatos', gatosRoutes);
app.use('/imagenes', imagenesRoutes);

app.get('/', (_req, res) => {
  res.send('Hola Mundo desde Express + TypeScript!');
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
