import { Request, Response, NextFunction } from 'express';
import db from '../db/index.js';
// import db, { Result } from '../db/index.ts';

const baseError = {
  status: 400,
  log: '',
  message: { err: '' },
};

interface Gear {
  gear_id: number;
  name: string;
  
}

const getGear = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const text: string = 'SELECT * FROM "gear"';
    console.log('**** Database query:', {
      text: text,
    });
    const { rows } = await db.query(text);
    console.log('**** Result rows:', rows);
    // store the subscriber's data
    res.locals.gear = rows;
    //res.json(rows)
    return next();
  } catch (err) {
    baseError.log = `Error in gearController: ${err}`;
    baseError.message.err = 'Could not retrieve gear list.';
    return next(baseError);
  }
};

export default getGear;
