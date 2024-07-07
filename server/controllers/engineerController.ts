import { Response, Request, NextFunction} from 'express';
import db from '../db/index.js';

const baseError = {
    status: 400,
    log:'',
    message: {err:''},
};


const getEngineer = async (req: Request, res: Response, next:NextFunction) => {
    
    try {
        const query:string = 'SELECT * FROM "engineer_bios" ';
        console.log('**** Database query:', {
            text: query,
          });
        const { rows } = await db.query(query);
        res.locals.engineer_bios = rows;
        console.log('*****Result rows:', rows)
        return next();
    } catch (err) {
        baseError.log = `Error in engineerController:${err}`;
        baseError.message.err = 'Error, unable to retrieve engineer list';
        return next(baseError)
    }
    
}
export default getEngineer;