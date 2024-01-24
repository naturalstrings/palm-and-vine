import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import subscriptionController from './controllers/subscriptionController.ts';

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

app.post('/api/subscribe', subscriptionController, (req, res) => {
  res.status(200).json(res.locals.result);
});

app.use((err: Error, _req: Request, res: Response, _next: NextFunction) => {
  const globalError = {
    message: err.message ? err.message : 'Invalid request.',
    status: 500,
  };

  const status = res.status ? res.status : res.status(500);
  res.status(globalError.status).json(globalError.message);
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
