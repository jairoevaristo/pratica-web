const { Router } = require("express");

const {
  addProduto,
  editProduto,
  getProduto,
  findProdutoById,
} = require("../repositorios/BDProduto");

const { getCategoria } = require("../repositorios/BDCategorias");

const routerProduto = Router();

routerProduto.get("/produtos", (req, res) => {
  res.render("produtos", { produtos: getProduto() });
});

routerProduto.get("/produto-editar", (req, res) => {
  const { id } = req.query;
  console.log(findProdutoById(id));
  res.render("produto-edit", {
    produtoEditado: findProdutoById(id),
    categorias: getCategoria(),
  });
});

routerProduto.post("/produto-editar", (req, res) => {
  const { id, nome, descricao, preco, categoria } = req.body;
  editProduto({ id, nome, descricao, preco, categoria });

  res.redirect("/produtos");
});

routerProduto.get("/produto-criar", (req, res) => {
  res.render("produto-criar", { categorias: getCategoria() });
});

routerProduto.post("/produto-cadastrar", (req, res) => {
  const { nome, descricao, preco, categoria } = req.body;
  addProduto({ nome, descricao, preco, categoria });

  res.redirect("/produtos");
});

module.exports = routerProduto;
