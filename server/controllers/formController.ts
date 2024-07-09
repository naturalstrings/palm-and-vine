import { Request, Response, NextFunction } from 'express';
import db from '../db/index.js';

const baseError = {
  status: 400,
  log: '',
  message: { err: '' },
};

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  description: string;
}

const processForm = async (req: Request, res: Response, next: NextFunction) => {
  try {
    // log data from form
    console.log(
      '\nInside formController.processForm:\nreq.body =',
      req.body,
      '\n'
    );
    res.locals.submission = req.body;
    return next();
  } catch (err) {
    baseError.log = `Error in formController: ${err}`;
    baseError.message.err = 'Something happened in processForm method.';
    return next(baseError);
  }
};

export default processForm;
