const routes = require("express").Router();

routes.use("/usuarios", require("./components/usuarios/usuarios.routes"));
routes.get("/", (_, res) => {
  res.send("Hello World!");
});

module.exports = routes;
