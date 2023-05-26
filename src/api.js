// src/api.js
import axios from 'axios';

const API_BASE_URL = 'http://localhost:8000/api'; // Mettez ici l'URL de votre backend Symfony

export const getErrors = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/errors`);
    return response.data;
  } catch (error) {
    console.error('Error fetching errors:', error);
    throw error;
  }
};

export const createError = async (errorData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/errors`, errorData);
    return response.data;
  } catch (error) {
    console.error('Error creating error:', error);
    throw error;
  }
};

// Répétez ce modèle pour les autres opérations CRUD (GET, POST, PUT, DELETE) sur l'entité Error et l'entité Answer selon vos besoins.
