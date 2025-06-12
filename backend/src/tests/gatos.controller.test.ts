import { expect } from '@jest/globals';
import { GatosController } from '../src/controllers/gatos.controller';
import { Request, Response } from 'express';

describe('GatosController', () => {
  let controller: GatosController;

  before(() => {
    controller = new GatosController();
  });

  it('debería llamar getGatos y devolver json', async () => {
    const req = {} as Request;
    const res = {
      jsonCalledWith: null,
      json(data: any) { this.jsonCalledWith = data; }
    } as unknown as Response;

    await controller.getGatos(req, res);
    expect(res.jsonCalledWith).to.be.an('array');
  });

  it('debería llamar getGatoById y devolver json', async () => {
    const req = { params: { breed_id: 'beng' } } as Request;
    const res = {
      jsonCalledWith: null,
      json(data: any) { this.jsonCalledWith = data; }
    } as unknown as Response;

    await controller.getGatoById(req, res);
    expect(res.jsonCalledWith).to.have.property('breed');
  });
});
