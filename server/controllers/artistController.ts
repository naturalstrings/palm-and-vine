import { Request, Response, NextFunction } from 'express';
import db from '../db/index.ts';
// import db, { Result } from '../db/index.ts';

const baseError = {
  status: 400,
  log: '',
  message: { err: '' },
};

interface Artist {
  id: number;
  first_name: string;
  last_name: string;
  video_link: string | null;
  photo_link: string;
  bio: string;
}

const getArtists = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const text: string = 'SELECT * FROM "Artist"';
    console.log('**** Database query:', {
      text: text,
    });
    const { rows } = await db.query(text);
    console.log('**** Result rows:', rows);
    // store the subscriber's data
    res.locals.artists = rows;
    return next();
  } catch (err) {
    baseError.log = `Error in artistController.signIn: ${err}`;
    baseError.message.err = 'Could not retrieve artists.';
    return next(baseError);
  }
};

export default getArtists;
