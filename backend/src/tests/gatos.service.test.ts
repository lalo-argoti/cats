import { expect } from '@jest/globals'; 
import { GatosService } from '../src/services/gatos.service';

describe('GatosService', () => {
  const service = new GatosService();

  it('getGatos debería devolver un arreglo', async () => {
    const result = await service.getGatos();
    expect(result).to.be.an('array');
  });

  it('getGatoById debería devolver un objeto con image y breed', async () => {
    const result = await service.getGatoById('beng');
    expect(result).to.have.property('image');
    expect(result).to.have.property('breed');
  });

  it('searchGatos debería devolver resultados de búsqueda', async () => {
    const result = await service.searchGatos('beng');
    expect(result).to.be.an('array');
  });
});
