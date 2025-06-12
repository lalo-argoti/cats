import { expect } from '@jest/globals';
import { GatosController } from '../src/controllers/gatos.controller';
import { Request, Response } from 'express';

describe('GatosController', () => {
  let controller: GatosController;

  beforeAll(() => {
    controller = new GatosController();
  });

  it('debería llamar getGatos y devolver json', async () => {
    const req = {} as Request;
    const res = {
      jsonCalledWith: null,
      json(data: any) {
        this.jsonCalledWith = data;
      },
    } as unknown as Response & { jsonCalledWith: any };

    await controller.getGatos(req, res);

    expect(Array.isArray(res.jsonCalledWith)).toBe(true);
  });

  it('debería llamar getGatoById y devolver json con propiedad "breed"', async () => {
    const req = {
      params: { breed_id: 'beng' },
    } as unknown as Request;

    const res = {
      jsonCalledWith: null,
      json(data: any) {
        this.jsonCalledWith = data;
      },
    } as unknown as Response & { jsonCalledWith: any };

    await controller.getGatoById(req, res);

    expect(res.jsonCalledWith).toHaveProperty('breed');
  });
});
