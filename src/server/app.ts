import './globals';

import * as express from 'express';

import { Routes } from 'routes';

// Import ends.

const app = express();

app.use(express.static(global.clientSrc));

// register app routes.
const route = new Routes(app);
route.registerAppRoutes();

app.listen(80, () => {
  console.log('Server started on port 80');
});