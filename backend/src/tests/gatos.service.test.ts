import { expect } from '@jest/globals'; 
import { GatosService } from '../src/services/gatos.service';

describe('GatosService', () => {
  const service = new GatosService();

  it('getGatos debería devolver un arreglo', async () => {
    const result = await service.getGatos();
    expect(Array.isArray(result)).toBe(true);
  });

  it('getGatoById debería devolver un objeto con image y breed', async () => {
    const result = await service.getGatoById('beng');
    expect(res.jsonCalledWith).toHaveProperty('image');
    expect(res.jsonCalledWith).toHaveProperty('breed');
  });

  it('searchGatos debería devolver resultados de búsqueda', async () => {
    const result = await service.searchGatos('beng');
    expect(Array.isArray(result)).toBe(true);
  });
});
