import { Router } from 'express';
import { GatosController } from '../controllers/gatos.controller';

const router = Router();
const gatosController = new GatosController();

router.get('/', (req, res) => gatosController.getGatos(req, res));

export default router;
