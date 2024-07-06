import express from 'express';
import exitHook from 'async-exit-hook';
import { CONNECT_DB, CLOSE_DB } from '~/config/mongodb';
import { env } from '~/config/environment';
import { APIs_V1 } from '~/routes/v1';
import { APIs_V2 } from './routes/v2';
import cors from 'cors';
import { corsOptions } from './config/cors';
import userMiddleware from './middlewares/userMiddleware'; // Import middleware using ES6 import

// const errorHandlingMiddleware = (err, req, res, next) => {
//   console.error(err.stack);
//   res.status(500).send('Something broke!');
// };

const START_SERVER = () => {
  const app = express();

  app.use(cors(corsOptions));
  app.use(express.json());

  // Apply userMiddleware for authentication/authorization
  // app.use(userMiddleware);

  app.use('/v1', APIs_V1);
  app.use('/v2', APIs_V2);

  // app.use(errorHandlingMiddleware);

  app.listen(env.APP_PORT, env.APP_HOST, () => {
    console.log(`Server is running at http://${env.APP_HOST}:${env.APP_PORT}/`);
  });

  exitHook(() => {
    console.log('Server is shutting down...');
    CLOSE_DB();
    console.log('Disconnected from MongoDB Cloud Atlas');
  });
};

(async () => {
  try {
    console.log('Connecting to MongoDB Cloud Atlas...');
    await CONNECT_DB();
    console.log('Connected to MongoDB Cloud Atlas!');

    START_SERVER();
  } catch (error) {
    console.error(error);
    process.exit(0);
  }
})();
