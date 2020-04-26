import 'reflect-metadata';
import { createConnection } from 'typeorm';
import * as express from 'express';
import * as bodyParser from 'body-parser';
import RoutesV1 from './routes/v1';

process.env.TZ = 'UTC';

const appPort = process.env.PORT;

createConnection()
  .then(async () => {
    const app = express();
    app.use(bodyParser.json());
    app.set('json spaces', 2);

    app.use('/v1', RoutesV1);

    app.listen(appPort);

    console.log(`Express application is up and running on port ${appPort}`);
  })
  .catch((error) => console.log('TypeORM connection error: ', error));
