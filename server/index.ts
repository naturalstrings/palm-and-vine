import express, {
  ErrorRequestHandler,
  Request,
  Response,
  NextFunction,
} from 'express';
import path from 'path';
import cors from 'cors';
import bodyParser from 'body-parser';
import signUp from './controllers/subscriptionController.js';
import getArtists from './controllers/artistController.js';
import dotenv from 'dotenv';
import { env } from 'process';
import getGear from './controllers/gearController.js';

dotenv.config();

const PORT: number = parseInt(
  env.NODE_ENV === 'production' ? env.SERVERPRODPORT! : env.SERVERDEVPORT!
);
const clientPort: number = parseInt(
  env.NODE_ENV === 'production' ? env.CLIENTPRODPORT! : env.CLIENTDEVPORT!
);

const corsOptions = {
  origin: `http://localhost:${clientPort}`,
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

const app = express();
app.use(express.json());
app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);

app.use(express.static(path.resolve('dist/index.html')));

app.get('/api/hello', (_req: Request, res: Response) => {
  res.status(200).json({ hello: 'world' });
});

app.post('/api/subscribe', signUp, (_req, res) => {
  console.log('Server received subscriber:', res.locals.subscriber);
  res.status(200).json({ subscriber: res.locals.subscriber });
});

app.get('/api/artists', getArtists, (_req, res) => {
  // console.log('artists from api:', res.locals.artists);
  res.status(200).json([...res.locals.artists]);
});

app.get('/api/gear', getGear, (_req, res) => {
  console.log('gear from api:', res.locals.gear);
  res.status(200).json([...res.locals.gear]);
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
    console.log('Custom 500 error:', errorObj);
    res.status(errorObj.status).json(errorObj.message);
  }
);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
