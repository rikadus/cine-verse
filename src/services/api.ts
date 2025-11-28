import axios from "axios";

// Pega as variáveis do arquivo .env
export const apiKey = import.meta.env.VITE_API_KEY;
export const imgPrefix = import.meta.env.VITE_IMG_PREFIX;

// Cria a conexão base
export const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE,
});
