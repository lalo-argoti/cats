import { Router } from 'express';
import { GatosController } from '../controllers/gatos.controller';

const router = Router();
const gatosController = new GatosController();

router.get('/breeds', gatosController.getGatos.bind(gatosController));
router.get('/breeds/search', gatosController.searchGatos.bind(gatosController));
router.get('/breeds/:breed_id', gatosController.getGatoById.bind(gatosController));

export default router;
