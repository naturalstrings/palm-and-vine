import db from '../db/index.js';
// import db, { Result } from '../db/index.ts';
const baseError = {
    status: 400,
    log: '',
    message: { err: '' },
};
const getArtists = async (req, res, next) => {
    try {
        const text = 'SELECT * FROM "Artist"';
        console.log('**** Database query:', {
            text: text,
        });
        const { rows } = await db.query(text);
        console.log('**** Result rows:', rows);
        // store the subscriber's data
        res.locals.artists = rows;
        return next();
    }
    catch (err) {
        baseError.log = `Error in artistController.signIn: ${err}`;
        baseError.message.err = 'Could not retrieve artists.';
        return next(baseError);
    }
};
export default getArtists;
//# sourceMappingURL=artistController.js.map