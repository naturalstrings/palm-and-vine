import pg from 'pg';
// import pg, { QueryResult } from 'pg';

const { Pool } = pg;
const connectionString =
  'postgres://bcszacql:dQZsOAa00_0KxtQLcs2QFucvN4xlWPiq@bubble.db.elephantsql.com/bcszacql';
const pool = new Pool({
  connectionString,
});

// export type Result = QueryResult;

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
