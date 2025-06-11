export class GatosService {
  async getGatos() {
    // Por ahora devuelve datos simulados
    return [
      { id: 1, nombre: 'Michi', edad: 3 },
      { id: 2, nombre: 'Garfield', edad: 5 },
    ];
  }
}
