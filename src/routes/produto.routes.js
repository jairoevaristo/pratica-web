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
  const message = req.flash("produto-save");
  res.render("produtos", { produtos: getProduto(), message });
});

routerProduto.get("/produto-editar", (req, res) => {
  const { id } = req.query;

  res.render("produto-edit", {
    produtoEditado: findProdutoById(id),
    categorias: getCategoria(),
  });
});

routerProduto.post("/produto-editar", (req, res) => {
  const { id, nome, descricao, preco, categoria } = req.body;
  let message = "Produto editado com sucesso!";

  editProduto({ id, nome, descricao, preco, categoria });

  req.flash("produto-save", message);
  res.redirect("/produtos");
});

routerProduto.get("/produto-criar", (req, res) => {
  res.render("produto-criar", { categorias: getCategoria() });
});

routerProduto.post("/produto-cadastrar", (req, res) => {
  const { nome, descricao, preco, categoria } = req.body;
  let message = "Produto cadastrado com sucesso!";

  addProduto({ nome, descricao, preco, categoria });
  req.flash("produto-save", message);

  res.redirect("/produtos");
});

module.exports = routerProduto;
