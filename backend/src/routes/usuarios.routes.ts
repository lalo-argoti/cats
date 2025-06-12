import { Router } from 'express';
import { UsuariosController } from '../controllers/usuarios.controller';

const router = Router();
const controller = new UsuariosController();

router.post('/registro', (req, res) => controller.registrar(req, res));
router.post('/login', (req, res) => controller.login(req, res));
router.get('/perfil/:id', (req, res) => controller.perfil(req, res));

export default router;
