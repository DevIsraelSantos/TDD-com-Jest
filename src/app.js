require('dotenv').config({
    path: process.env.NODE_TEST ? '.env.test' : '.env'
})
const path = require('path')
const express = require("express");
const data = path.resolve('src', 'database', process.env.DB_FILE + '.sqlite3');

class AppController {
    constructor() {
        this.express = express();

        this.middlewares();
        this.routes();
    }

    middlewares() {
        this.express.use(express.json());
    }

    routes() {
        this.express.use(require("./routes"));
    }
}

module.exports = new AppController().express;