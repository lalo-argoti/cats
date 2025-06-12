import request from 'supertest';
import app from '../src/app';
import mongoose from 'mongoose';
import { expect } from '@jest/globals';


describe('POST /usuarios/login', () => {
  beforeAll(async () => {
    await mongoose.connect('mongodb://localhost:27017/xpertgroup_test');
  });

  afterAll(async () => {
    await mongoose.connection.db.dropDatabase();
    await mongoose.disconnect();
  });

  it('debería retornar 404 si el usuario no existe', async () => {
    const res = await request(app)
      .post('/usuarios/login')
      .send({ email: 'inexistente@test.com', password: '123456' });

    expect(res.status).toBe(404);
    expect(res.body.mensaje).toMatch(/no encontrado/i);
  });
});
