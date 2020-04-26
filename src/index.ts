import { Express } from 'express';
import runApp from './app';

process.env.TZ = 'UTC';

const appPort = process.env.PORT;

runApp().then((app: Express) => {
  app.listen(appPort);

  console.log(`Express application is up and running on port ${appPort}`);
});
