import express, {
  ErrorRequestHandler,
  Request,
  Response,
  NextFunction,
} from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import signUp from './controllers/subscriptionController.ts';
// import db from './db/index.ts';

// db.query('SELECT NOW();');

const PORT = 8000;

const corsOptions = {
  origin: 'http://localhost:5173',
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

const app = express();
app.use(cors(corsOptions));

app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);

app.use(bodyParser.json());

app.get('/api/hello', (_req: Request, res: Response) => {
  res.status(200).json({ hello: 'world' });
});

app.post('/api/subscribe', signUp, (_req, res) => {
  console.log('Server has subscriber:', res.locals.subscriber);
  res.status(200).json({ subscriber: res.locals.subscriber });
});

//catch all
app.use((_req: Request, res: Response) =>
  res.status(404).send('Page not found.')
);

// default error
app.use(
  (
    err: ErrorRequestHandler,
    _req: Request,
    res: Response,
    _next: NextFunction
  ) => {
    const defaultErr = {
      log: 'Express error handler caught unknown middleware error',
      status: 500,
      message: { err: 'An error occurred' },
    };
    const errorObj = Object.assign({}, defaultErr, err);
    console.log(errorObj.log);
    res.status(errorObj.status).json(errorObj.message);
  }
);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
