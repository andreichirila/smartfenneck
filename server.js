'use strict';

const express = require('express');
const server = express();

const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const db = require('./SmartFileBE/db/connect-db');
const port = process.env.PORT || 8000;
const routes = require('./SmartFileBE/routes/app-routes/app.routes');

// middlewares
server.use(cors());
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({extended: true}));
server.use(express.static(path.join(__dirname,'public')));
server.use(function timeLog(req, res, next) {
    console.log('Time: ', Date.now());
    next();
});
server.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

// server paths
server.get('/', function (req, res, next) {
    // Handle the get for this route
    console.log('request ', req);
});

server.post(routes.Upload, function (req, res, next) {
    console.log(req);
    console.log(routes.Upload);
    res.sendStatus(200);
});

server.listen(port, () => {
    console.log('server is running ...');
});
