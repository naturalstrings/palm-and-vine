import pg from 'pg';
import dotenv from 'dotenv';

dotenv.config();
const { Pool } = pg;
const connectionString = process.env.DB_URL;
const pool = new Pool({
  connectionString,
});

const db = {
  query: async function (text: string, values?: any): Promise<pg.QueryResult> {
    try {
      return await pool.query(text, values);
    } catch (err) {
      console.log('db/index.ts, after pool.query:', err);
      return Promise.reject(err);
    }
  },
};

export default db;
