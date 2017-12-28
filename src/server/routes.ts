/**
 * Copyright 2017 - Author gauravm.git@gmail.com
 */

import * as express from 'express';

import { Data } from './views';

export class Routes {

  public constructor(private readonly app: express.Application) {
  }

  public registerAppRoutes(): void {

    this.app.get('/data', this.processGet.bind(this));

  }

  private processGet(req: express.Request,
    res: express.Response,
    next: express.NextFunction) {

    res.json({
      message: Data.get()
    });

    next();

  }

}
