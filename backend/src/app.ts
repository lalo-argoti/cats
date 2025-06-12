    import express from 'express';
    import mongoose from 'mongoose';

    import gatosRoutes from './routes/gatos.routes';
    import imagenesRoutes from './routes/imagenes.routes';
    import adminRoutes from './routes/admin.routes';
    import usuariosRoutes from './routes/usuarios.routes';
    import dotenv from 'dotenv';
    import cors from 'cors';
    dotenv.config();
    const app = express();
    const PORT = 3000;
    const corsOptions = {
        
    origin: 'http://localhost:4200', // Tu frontend Angular
    credentials: true
    };
    app.use(cors(corsOptions)); 

    const MONGO_URI = 'mongodb://localhost:27017/xpertgroupdb';

    const CAT_API_KEY = process.env.CAT_API_KEY;
    const CAT_API_URL = 'https://api.thecatapi.com/v1';

    mongoose.connect(MONGO_URI)
    .then(() => console.log('✅ Conectado a MongoDB'))
    .catch((err: unknown) => console.error('❌ Error de conexión con MongoDB:', err));


    // 🧠 Middleware
    app.use(express.json());

    // 🚀 Rutas
    app.use('/gatos', gatosRoutes);
    app.use('/imagenes', imagenesRoutes);
    app.use('/admin', adminRoutes);
    app.use('/usuarios', usuariosRoutes);
    
    app.get('/', (_req, res) => {
    res.send('Hola Mundo desde Express + TypeScript!');
    });

    // ▶️ Servidor
    app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
    });
