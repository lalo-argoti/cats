import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config(); // Asegúrate de llamar esto si no está en app.ts

const CAT_API_KEY = process.env.CAT_API_KEY;
const CAT_API_URL = 'https://api.thecatapi.com/v1';

export class GatosService {
  // Obtener todas las razas
  async getGatos() {
    const response = await axios.get(`${CAT_API_URL}/breeds`, {
      headers: {
        'x-api-key': CAT_API_KEY || ''
      }
    });
    return response.data;
  }

// src/services/gatos.service.ts
async getGatoById(breedId: string) {
  const response = await axios.get(`${CAT_API_URL}/images/search`, {
    headers: {
      'x-api-key': CAT_API_KEY || ''
    },
    params: {
      breed_ids: breedId
    }
  });

  const result = response.data[0];
  if (!result) return null;

  return {
    image: result.url,
    breed: result.breeds ? result.breeds[0] : null
  };
}

async searchGatos(query: string) {
  const response = await axios.get(`${CAT_API_URL}/breeds/search`, {
    headers: {
      'x-api-key': CAT_API_KEY || ''
    },
    params: {
      q: query
    }
  });
  console.log("tdd")
  return response.data;
}}
