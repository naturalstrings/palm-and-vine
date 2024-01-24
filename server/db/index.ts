import pg from 'pg';

const { Pool, QueryResult } = pg;
const connectionString =
  'postgres://bcszacql:dQZsOAa00_0KxtQLcs2QFucvN4xlWPiq@bubble.db.elephantsql.com/bcszacql';
const pool = new Pool({
  connectionString,
});

// interface Query {
//   text: string;
//   params?: Array<string | number>;
//   callback?: Function;
// }

/*

--- Ugh, let's use Prisma. Manually managing Postgres with Typescript
--- is such an error prone process.

*/

const db = {
  query: async (
    text: string,
    params: any[],
    callback: (err: Error, result: pg.QueryResult) => void
  ) => {
    try {
      pool.query;
      const res = await pool.query(text, params, callback);
      // const res: pg.QueryResult | void = await pool.query(text, params, callback);
      console.log('Executed query: ', {
        text: text,
        rows: res.rowCount,
      });
      return res;
    } catch (err) {
      console.log(err);
    } finally {
      pool.end;
    }
  },
};
export default db;
