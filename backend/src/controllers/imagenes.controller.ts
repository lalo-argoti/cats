import { Request, Response } from 'express';
import { ImagenesService } from '../services/imagenes.service';

const imagenesService = new ImagenesService();

export class ImagenesController {
  async getImagenes(req: Request, res: Response) {
    try {
      const imagenes = await imagenesService.getImagenes();
      res.json(imagenes);
    } catch (error) {
      res.status(500).json({ error: 'Error obteniendo imágenes' });
    }
  }
}
 
