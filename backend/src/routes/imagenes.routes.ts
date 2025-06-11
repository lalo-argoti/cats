import { Router } from 'express';
import { ImagenesController } from '../controllers/imagenes.controller';

const router = Router();
const imagenesController = new ImagenesController();

router.get('/', (req, res) => imagenesController.getImagenes(req, res));

export default router;
