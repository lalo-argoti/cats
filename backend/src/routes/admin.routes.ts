import { Router } from 'express';
import mongoose from 'mongoose';

const router = Router();

router.get('/', (_req, res) => {
  res.json({
    mensaje: 'Panel de administración - opciones disponibles',
    endpoints: {
      ping: '/admin/ping',
      estado: '/admin/estado',
      rutas: ['/gatos', '/imagenes', '/admin']
    }
  });
});

router.get('/ping', (_req, res) => {
  const estado = mongoose.connection.readyState === 1 ? 'conectado' : 'no conectado';
  res.json({ mongo: estado });
});

router.get('/estado', (_req, res) => {
  res.json({
    mongo: mongoose.connection.readyState,
    memoria: process.memoryUsage(),
    entorno: process.env.NODE_ENV || 'desarrollo',
    tiempo: new Date().toISOString()
  });
});

export default router;
