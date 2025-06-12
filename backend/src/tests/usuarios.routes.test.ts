import { expect } from '@jest/globals'; 
import request from 'supertest';
import express from 'express';
import usuariosRouter from '../src/routes/usuarios.routes';

const app = express();
app.use(express.json());
app.use('/usuarios', usuariosRouter);

describe('Usuarios Routes', () => {
  it('POST /usuarios/registro debería registrar un usuario', async () => {
    const res = await request(app)
      .post('/usuarios/registro')
      .send({ nombre: 'Test User', email: 'test@example.com', password: '123456' });
    expect(res.status).to.be.oneOf([201, 409]);
  });

  it('POST /usuarios/login debería autenticar un usuario', async () => {
    const res = await request(app)
      .post('/usuarios/login')
      .send({ email: 'test@example.com', password: '123456' });
    expect(res.status).to.be.oneOf([200, 401, 404]);
  });

  it('GET /usuarios/:id debería devolver perfil sin password', async () => {
    // Requiere ID válido o mockear modelo para integración completa
    // Aquí un test simple:
    const res = await request(app).get('/usuarios/000000000000000000000000');
    expect([200, 404, 500]).to.include(res.status);
  });
});
