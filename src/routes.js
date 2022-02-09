const routes = require("express").Router();
const db = require('./app/models/index');

const SessionController = require('./app/controllers/SessionController')

routes.post('/sessions', SessionController.store);

module.exports = routes;