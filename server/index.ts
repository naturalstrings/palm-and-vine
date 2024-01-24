import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
// TODO: move this import to controllers
import '../prisma/index.ts';

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
  res.json({ hello: 'world' });
});

app.post('/api/subscribe', (req: Request, res: Response) => {
  res.json(req.body);
});

app.use((error: Error, _req: Request, res: Response, _next: NextFunction) => {
  res.status ? res.status : res.status(500);
  res.json(error);
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
