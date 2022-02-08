const routes = require("express").Router();
const { User } = require('./app/models')

//Status de online
routes.get("/", (req, res) => { return res.json({ status: "Online" }); });



module.exports = routes;