import db from '../db/index.js';
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
const signUp = async (req, res, next) => {
    try {
        // if (!req.body) {throw new Error("Invalid input.")}; <-- is this necessary?
        const { firstName, lastName, email } = req.body;
        // TODO: Need to guard against SQL injection!
        const text = 'INSERT INTO "Subscriber" (first_name, last_name, email) VALUES ($1, $2, $3) RETURNING *';
        const values = [firstName, lastName, email];
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
    }
    catch (err) {
        baseError.log = `Error in subscriptionController.signIn: ${err}`;
        baseError.message.err = 'Could not complete sign up.';
        return next(baseError);
    }
};
export default signUp;
//# sourceMappingURL=subscriptionController.js.map