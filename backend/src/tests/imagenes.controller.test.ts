import { ImagenesController } from '../controllers/imagenes.controller';
import { Request, Response } from 'express';
import { expect } from '@jest/globals';


describe('ImagenesController', () => {
  let controller: ImagenesController;

  beforeEach(() => {
    controller = new ImagenesController();
  });

  it('getImagenes debería devolver arreglo', async () => {
    const req = {} as Request;

    const res = {
      json: jest.fn()
    } as unknown as Response;

    await controller.getImagenes(req, res);

    expect(res.json).toHaveBeenCalled();
    const responseArg = (res.json as jest.Mock).mock.calls[0][0];
    expect(Array.isArray(responseArg)).toBe(true);
  });
});
