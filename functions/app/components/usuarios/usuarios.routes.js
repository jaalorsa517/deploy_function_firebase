const route = require("express").Router();
const usuarios = require("./usuarios.controller");

route.get("/", usuarios.get);
route.get("/:id", usuarios.getById);

module.exports = route;
