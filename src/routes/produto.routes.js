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
  const { categorias, camposCustomizados } = getCategoria();

  res.render("produto-edit", {
    produtoEditado: findProdutoById(id),
    categorias,
    camposCustomizados: JSON.stringify(findProdutoById(id).camposCustomizados),
    camposCustom: JSON.stringify(camposCustomizados),
  });
});

routerProduto.post("/produto-editar", (req, res) => {
  const { id, nome, descricao, preco, categoria, ...rest } = req.body;
  let camposCustomizados = [];
  let message = "Produto editado com sucesso!";

  for (let item in rest) {
    let name = item;
    camposCustomizados.push({ [name]: rest[item] });
  }

  editProduto({ id, nome, descricao, preco, categoria, camposCustomizados });

  req.flash("produto-save", message);
  res.redirect("/produtos");
});

routerProduto.get("/produto-criar", (req, res) => {
  const { camposCustomizados, categorias } = getCategoria();

  res.render("produto-criar", {
    categorias,
    camposCustomizados: JSON.stringify(camposCustomizados),
  });
});

routerProduto.post("/produto-cadastrar", (req, res) => {
  const { nome, descricao, preco, categoria, ...rest } = req.body;
  let camposCustomizados = [];
  let message = "Produto cadastrado com sucesso!";

  for (let item in rest) {
    let name = item;
    camposCustomizados.push({ [name]: rest[item] });
  }

  addProduto({ nome, descricao, preco, categoria, camposCustomizados });
  req.flash("produto-save", message);

  res.redirect("/produtos");
});

module.exports = routerProduto;
