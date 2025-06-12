import { expect } from '@jest/globals'; 
import { ImagenesService } from '../src/services/imagenes.service';

describe('ImagenesService', () => {
  const service = new ImagenesService();

  it('getImagenes debería devolver arreglo con imágenes', async () => {
    const result = await service.getImagenes();
    expect(Array.isArray(result)).toBe(true);
    expect(result[0]).to.have.property('url');
  });
});
