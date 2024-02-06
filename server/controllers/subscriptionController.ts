import { Request, Response, NextFunction } from 'express';
import db from '../db/index.ts';
// import db, { Result } from '../db/index.ts';

const baseError = {
  status: 400,
  log: '',
  message: { err: '' },
};

// interface Subscriber {
//   id: number;
//   first_name: string;
//   last_name: string;
//   email: string;
// };

const signUp = async (req: Request, res: Response, next: NextFunction) => {
  try {
    // if (!req.body) {throw new Error("Invalid input.")};
    const { firstName, lastName, email } = req.body;
    // TODO: Need to guard against SQL injection!
    const text: string =
      'INSERT INTO "Subscriber" (first_name, last_name, email) VALUES ($1, $2, $3) RETURNING *';
    const values: string[] = [firstName, lastName, email];
    console.log('**** Database query:', {
      text: text,
      values: values,
    });
    const { rows } = await db.query(text, values);
    console.log('**** Result rows:', rows);
    // const subscriber: Subscriber = result.rows[0];
    // store the subscriber's data
    res.locals.subscriber = rows[0];
    return next();
  } catch (err) {
    baseError.log = `Error in subscriptionController.signIn: ${err}`;
    baseError.message.err = 'Could not complete sign up.';
    return next(baseError);
  }
};

export default signUp;
