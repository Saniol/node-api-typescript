import 'reflect-metadata';
import { createConnection } from 'typeorm';
import * as express from 'express';
import * as bodyParser from 'body-parser';
import RoutesV1 from './routes/v1';

process.env.TZ = 'UTC';

createConnection()
  .then(async () => {
    const app = express();
    app.use(bodyParser.json());

    app.use('/v1', RoutesV1);

    app.listen(3000);

    console.log('Express application is up and running on port 3000');
  })
  .catch((error) => console.log('TypeORM connection error: ', error));
