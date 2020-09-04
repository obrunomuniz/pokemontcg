const DEV = 'development';
const env = process.env.NODE_ENV || DEV;

const urls = {
  development: 'https://api.pokemontcg.io/v1/cards',
  test: 'https://api.pokemontcg.io/v1/cards',
  production: 'https://api.pokemontcg.io/v1/cards',
} as any;

export const API_URL = urls[env];
