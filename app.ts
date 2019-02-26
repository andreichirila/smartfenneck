// express server
import * as express from 'express';

import * as bodyParser from 'body-parser';
import * as cors from 'cors';
import * as path from 'path';

import {AppRoutes} from './SmartFileBE/routes/app-routes/app.routes';
import {FileController} from './SmartFileBE/controllers/file';


class App {

    public expressServer;

    private express;
    private bodyParser;
    private cors;
    private path;
    private fileController = new FileController();

    constructor() {
        this.expressServer = express();
        this.express = express;
        this.bodyParser = bodyParser;
        this.cors = cors;
        this.path = path;
        this.initApp();
    }

    private initApp() {
        this.initMiddlewares();
        this.mountPaths();
    }

    private mountPaths() {
        this.expressServer.get(AppRoutes.MainPage, (req, res, next) => {
            console.log('request ', req);
        });
        this.expressServer.post(AppRoutes.Upload, (req, res, next) => {
            return this.fileController.upload(req, res);
        });
    }

    private initMiddlewares() {
        this.expressServer.use(this.cors());
        this.expressServer.use(this.bodyParser.json());
        this.expressServer.use(this.bodyParser.urlencoded({extended: true}));
        this.expressServer.use(this.express.static(this.path.join(__dirname, 'public')));
        this.expressServer.use((req, res, next) => {
            console.log('Time: ', Date.now());
            next();
        });
        this.expressServer.use((req, res, next) => {
            res.header('Access-Control-Allow-Origin', '*');
            res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
            next();
        });
    }
}

export default new App().expressServer;
