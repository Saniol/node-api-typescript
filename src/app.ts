import 'reflect-metadata';
import { createConnection } from 'typeorm';
import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as helmet from 'helmet';
import * as compression from 'compression';
import catchAsync from './helper/catchAsync';
import RoutesV1 from './routes/v1';

export default catchAsync(
  async () => {
    await createConnection();

    const app = express();

    app.use(helmet());
    app.use(compression());
    app.use(bodyParser.json());
    app.set('json spaces', 2);

    app.use('/v1', RoutesV1);

    return app;
  },
  (error: Error) => {
    console.log('TypeORM connection error: ', error);

    throw error;
  }
);
