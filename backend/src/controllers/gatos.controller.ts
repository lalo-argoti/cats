import { Request, Response } from 'express';
import { GatosService } from '../services/gatos.service';

const gatosService = new GatosService();

export class GatosController {
  async getGatos(req: Request, res: Response) {
    try {
      const gatos = await gatosService.getGatos();
      res.json(gatos);
    } catch (error) {
      res.status(500).json({ error: 'Error obteniendo gatos' });
    }
  }
}
 
