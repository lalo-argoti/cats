import { Request, Response } from 'express';
import { GatosService } from '../services/gatos.service';

export class GatosController {
  private gatosService: GatosService;

  constructor() {
    this.gatosService = new GatosService();
  }

  async getGatos(_req: Request, res: Response) {
    console.log("Entramos a getall");
    try {
      const gatos = await this.gatosService.getGatos(); 
      res.json(gatos);
    } catch (error) {
      res.status(500).json({ error: 'Error al obtener razas' });
    }
  }

  async getGatoById(req: Request, res: Response) {
      console.log("entramos a Get por id"); 
    try {
      const { breed_id } = req.params;
      const gato = await this.gatosService.getGatoById(breed_id); 
      res.json(gato);
    } catch (error) {
      res.status(500).json({ error: 'Error al obtener la raza' });
    }
  }

  async searchGatos(req: Request, res: Response) {
    console.log("entramos a Getsearch");
    try {
      const query = req.query.q as string;
      //console.log('Query de búsqueda:', query);

      const resultados = await this.gatosService.searchGatos(query);
      //console.log('Resultados encontrados:', resultados);
      res.json(resultados);
    } catch (error) {
      console.error('Error en búsqueda:', error);
      res.status(500).json({ error: 'Error al buscar razas de gatos' });
    }
  }
}
