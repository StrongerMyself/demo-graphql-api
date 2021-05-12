import path from 'path'

export const PORT = 8001
export const HOST = `http://localhost:${PORT}`
export const REST_API_URL = `${HOST}/rest`
export const DEV = process.env.NODE_ENV !== 'production' 
export const PROD = !DEV 
export const DB_PATH = path.resolve(__dirname, 'rest/db.json')
