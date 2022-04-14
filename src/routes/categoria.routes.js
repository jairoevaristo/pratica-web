const { Router } = require("express");
const {
  getCategoria,
  addCategoria,
  deleteCategoria,
} = require("../repositorios/BDCategorias");

const routerCategoria = Router();

routerCategoria.get("/categorias", (req, res) => {
  res.render("categorias", { categorias: getCategoria() });
});

routerCategoria.get("/categoria-deletar/:chave", (req, res) => {
  const { chave } = req.params;

  deleteCategoria(chave);

  res.redirect("/categorias");
});

routerCategoria.post("/categoria-salvar", (req, res) => {
  const { chave, valor } = req.body;

  addCategoria({ chave, valor });

  res.redirect("/categorias");
});

module.exports = routerCategoria;
