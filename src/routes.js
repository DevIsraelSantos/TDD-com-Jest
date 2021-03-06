const routes = require("express").Router();
const db = require('./app/models/index');

const SessionController = require('./app/controllers/SessionController')
const authMiddleware = require('./app/middleware/auth')

routes.post('/sessions', SessionController.store);

//Abaixo disso precisa de autenticação
routes.use(authMiddleware);

routes.get('/dashboard', (req, res) => {
    return res.status(200).send();
 })
module.exports = routes;