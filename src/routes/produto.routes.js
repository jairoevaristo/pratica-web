const { Router } = require("express");

const {
  addProduto,
  editProduto,
  getProduto,
  findProdutoById,
} = require("../repositorios/BDProduto");

const routerProduto = Router();

routerProduto.get("/produtos", (req, res) => {
  res.render("produtos", { produtos: getProduto() });
});

routerProduto.get("/produto-editar", (req, res) => {
  const { id } = req.query;
  res.render("produto-edit", { produtoEditado: findProdutoById(id) });
});

routerProduto.post("/produto-editar", (req, res) => {
  const { id, nome, descricao, preco } = req.body;
  editProduto({ id, nome, descricao, preco });

  res.redirect("/produtos");
});

routerProduto.get("/produto-criar", (req, res) => {
  res.render("produto-criar");
});

routerProduto.post("/produto-cadastrar", (req, res) => {
  const { nome, descricao, preco } = req.body;
  addProduto({ nome, descricao, preco });

  res.redirect("/produtos");
});

module.exports = routerProduto;
