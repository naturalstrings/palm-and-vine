import { Request, Response, NextFunction } from 'express';
import db from '../db/index.ts';

const baseError = {
  status: 400,
  log: '',
  message: { err: '' },
};

const signUp = async (req: Request, res: Response, next: NextFunction) => {
  try {
    // if (!req.body) {throw new Error("Invalid input.")};
    const { firstName, lastName, email } = req.body;
    // TODO: Need to guard against SQL injection!
    const text: string = `INSERT INTO "Subscriber" (first_name, last_name, email) VALUES ('${firstName}', '${lastName}', '${email}') RETURNING *;`;
    // const params: string[] = [firstName, lastName, email];
    // const dbRes = await db.query(text, params, () => null);
    const dbRes = await db.query(text);
    if (!dbRes) {
      throw new Error('Could not complete subscription.');
    } else {
      console.log(dbRes);
      res.locals.result = dbRes.rows[0];
      return next();
    }
  } catch (err) {
    baseError.log = `Error in subscriptionController.signIn: ${err}`;
    baseError.message.err = 'Could not complete sign up.';
    return next(baseError);
  }
};

export default signUp;
