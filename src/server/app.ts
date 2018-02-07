/**
 * Copyright 2017 - Author gauravm.git@gmail.com
 */

import './globals';

import express from 'express';

import { Routes } from 'routes';

// Import ends.

const log = console.log;

const app = express();

app.use(express.static(global.clientSrc));

// register app routes.
const route = new Routes(app);
route.registerAppRoutes();

app.listen(80, () => {
  log('Server started on port 80');
});
