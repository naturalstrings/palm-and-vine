import { Request, Response, NextFunction } from 'express';
import db from '../db/index.ts';

const baseError = {
  message: '',
  status: 400,
};

const subscriptionController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    // if (!req.body) {throw new Error("Invalid input.")};
    const { firstName, lastName, email } = req.body;
    // TODO: Need to guard against SQL injection!
    const text: string = `INSERT INTO subscriber (first_name, last_name, email) VALUES (${firstName}, ${lastName}, ${email});`;
    const dbRes = await db.query(text);
    if (!dbRes) {
      throw new Error('Could not complete subscription.');
    } else {
      console.log(dbRes);
      res.locals.result = dbRes.rows[0];
      return next();
    }
  } catch (err) {
    baseError.message = err;
    return next(baseError);
  }
};

export default subscriptionController;
