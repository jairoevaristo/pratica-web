const { Router } = require("express");
const {
  getCategoria,
  addCategoria,
  deleteCategoria,
} = require("../repositorios/BDCategorias");

const routerCategoria = Router();

routerCategoria.get("/categorias", (req, res) => {
  const message = req.flash("categoria-edit");
  res.render("categorias", { categorias: getCategoria(), message });
});

routerCategoria.get("/categoria-deletar/:chave", (req, res) => {
  const { chave } = req.params;
  let message = "Categoria deletada com sucesso!";

  deleteCategoria(chave);

  req.flash("categoria-edit", message);
  res.redirect("/categorias");
});

routerCategoria.post("/categoria-salvar", (req, res) => {
  const { chave, valor } = req.body;
  let message = "Categoria salva com sucesso!";
  addCategoria({ chave, valor });

  req.flash("categoria-edit", message);
  res.redirect("/categorias");
});

module.exports = routerCategoria;
