if (process.env.NODE_ENV !== 'production') {
    require('dotenv').load();
}

import env from 'env-var';

export const mongoUrl = env.get('MONGO_URL').asString();
export const apiURL = env.get('API_URL').asString();
export const appURL = env.get('APP_URL').asString();
export const port = env.get('PORT').asString();
