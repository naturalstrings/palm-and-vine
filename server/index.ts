import express, {
  ErrorRequestHandler,
  Request,
  Response,
  NextFunction,
} from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import signUp from './controllers/subscriptionController.js';
import getArtists from './controllers/artistController.js';
import dotenv from 'dotenv';
import { env } from 'process';

dotenv.config();

const PORT: number =
  env.NODE_ENV === 'production' ? 3000 : parseInt(process.env.PORT!);
const clientPort: number = env.NODE_ENV === 'production' ? 4173 : 5173;

const corsOptions = {
  origin: `http://localhost:${clientPort}`,
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

app.use('/static', express.static(path.join(__dirname, 'public')));

app.get('*', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

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
