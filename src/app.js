require('dotenv').config({
    path: process.env.NODE_TEST ? '.env.test' : '.env'
})
const bodyParser = require('body-parser')
const express = require("express");

class AppController {
    constructor() {
        this.express = express();

        this.middlewares();
        this.routes();
    }

    middlewares() {
        this.express.use(bodyParser.json());
        this.express.use(bodyParser.urlencoded({
            extended: true
        }));
    }

    routes() {
        this.express.use(require("./routes"));
    }
}

module.exports = new AppController().express;