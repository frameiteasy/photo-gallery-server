import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import albums from './assets/albums.json';

dotenv.config();

const app: Express = express();
const cors = require('cors');
app.use(cors());
const port = process.env.PORT;

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});

app.get('/albums', (req: Request, res: Response) => {
  res.send(albums);
});

app.get('/albums/:albumId', (req: Request, res: Response) => {
  try {
    const album = require('./assets/albums/' +
      req.params.albumId +
      '/album.json');

    res.send(album);
  } catch (error) {
    res.send('There is no such album');
  }
});

app.get('/photo/:photoName', (req: Request, res: Response) => {
  res.send('List of albums' + ': ' + req.params.photoName);
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
