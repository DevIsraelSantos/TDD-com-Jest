const routes = require("express").Router();

//Status de online
routes.get("/", (req, res) => {return res.json({status:"Online"});});



module.exports = routes;