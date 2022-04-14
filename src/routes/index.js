const { Router } = require("express");

const routerCategoria = require("../routes/categoria.routes");
const routerProduto = require("../routes/produto.routes");

const routes = Router();

routes.use(routerCategoria);
routes.use(routerProduto);

module.exports = routes;
