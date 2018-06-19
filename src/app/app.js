import express from 'express';
import RateLimit from 'express-rate-limit';
import logger from 'morgan';
import helmet from 'helmet';
import { json, urlencoded } from 'body-parser';
import enableModules from './modules';
import limiter from './configs/limiter';
import corsOptions from './configs/cors';
import cors from 'cors';
import expressValidator from 'express-validator';
import { BAD_REQUEST_CODE } from './configs/status-codes';

import cookieParser from 'cookie-parser';
import { ServiceUnavailable } from './errors';

import configPassport from './strategies/passport-jwt';
import passport from 'passport';

class Application {
    app;
    router;

    constructor () {
        this.app = express();
        this.initApp();
    }
    initApp() {
        this.configApp();
        this.configPassport();
        this.setParams();
        this.setRouter();
        this.setErrorHandler();
        this.enableModules();
    }

    configApp() {
        if (this.app.get('env') !== 'production') {
            this.app.use(logger('dev'));
        }

        this.app.use(cors(corsOptions))
                .use(expressValidator())
                .use(json())
                .use(urlencoded({ extended: true }))
                .use(cookieParser())
                .use(this.createLimiter())
                .use(helmet());
    }

    createLimiter() {
        return new RateLimit(limiter);
    }

    configPassport() {
        configPassport(params.tokenSecret, passport);
        this.app.use(passport.initialize())
            .use(passport.session());
    }

    setParams() {
        this.app.set('json spaces', 4);
    }

    setRouter() {
        this.router = express.Router();
        this.app.use(`/api`, this.router);
    }

    setErrorHandler() {
        this.app.use(async (err, req, res, next) => {
            if(!err.status) {
                next(new ServiceUnavailable(err.message));
            }

            let status = err.status || BAD_REQUEST_CODE;

            return res.status (status).json({
                status: status,
                data: null,
                message: err.message || '',
                errors: err.errors || null,
                body: req.body
            });
        });
    }

    enableModules() {
        enableModules(this.router);
    }
}

export default () => new Application().app;
