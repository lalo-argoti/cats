import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { UsuariosService } from '../services/usuarios.service';

const JWT_SECRET = process.env.JWT_SECRET || 'secretKey';

export class UsuariosController {
  private usuariosService = new UsuariosService();

  async login(req: Request, res: Response) {
    try {
      const { email, password } = req.body;
      const usuario = await this.usuariosService.login(email, password);

      const token = jwt.sign({ id: usuario._id, email: usuario.email }, JWT_SECRET, { expiresIn: '2h' });

      res.json({
        token,
        IdUser: usuario._id,
        Username: usuario.nombre
      });
    } catch (error: any) {
      const mensaje = error.message || 'Error en el servidor';
      const status = mensaje.includes('Credenciales') ? 401 : 404;
      res.status(status).json({ mensaje });
    }
  }

  async registrar(req: Request, res: Response) {
    try {
      const { nombre, email, password } = req.body;
      const nuevoUsuario = await this.usuariosService.registrar(nombre, email, password);
      res.status(201).json({ mensaje: 'Usuario registrado', id: nuevoUsuario._id });
    } catch (error: any) {
      res.status(400).json({ mensaje: error.message });
    }
  }

  async perfil(req: Request, res: Response) {
    try {
      const id = req.params.id;
      const usuario = await this.usuariosService.obtenerPerfil(id);
      if (!usuario) return res.status(404).json({ mensaje: 'Usuario no encontrado' });

      res.json(usuario);
    } catch (error) {
      res.status(500).json({ mensaje: 'Error al buscar el perfil' });
    }
  }
}
