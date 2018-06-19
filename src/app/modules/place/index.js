import { Router } from 'express';
import endpoints from './endpoints';

export default class PlaceModule {
    apiRouter;
    router;

    constructor (apiRouter) {
        this.apiRouter = apiRouter;
        this.router = Router();
    }

    createEndpoints() {
        this.assignRouter();
        this.assignEndpoints();
    }

    assignRouter() {
        this.apiRouter.use('/places', this.router);
    }

    assignEndpoints() {
        endpoints(this.router);
    }
}
