import pg from 'pg';
const { Pool } = pg;

const connectionString =
  'postgres://bcszacql:dQZsOAa00_0KxtQLcs2QFucvN4xlWPiq@bubble.db.elephantsql.com/bcszacql';

const pool = new Pool({
  connectionString,
});

export const query = async (text: string) => {
  try {
    const res = await pool.query(text);
    console.log('Executed query: ', { text, rows: res.rowCount });
    return res;
  } catch (err) {
    console.log(err);
  } finally {
    pool.end;
  }
};
