const { Router } = require("express");
const {
  getCategoria,
  addCategoria,
  deleteCategoria,
} = require("../repositorios/BDCategorias");

const routerCategoria = Router();

routerCategoria.get("/categorias", (req, res) => {
  const { categorias, camposCustomizados } = getCategoria();

  const message = req.flash("categoria-edit");
  res.render("categorias", { categorias, message, camposCustomizados });
});

routerCategoria.get("/categoria-deletar/:chave", (req, res) => {
  const { chave } = req.params;
  let message = "Categoria deletada com sucesso!";

  deleteCategoria(chave);

  req.flash("categoria-edit", message);
  res.redirect("/categorias");
});

routerCategoria.post("/categoria-salvar", (req, res) => {
  const { chave, valor, ...rest } = req.body;
  let camposCustomizados = [];
  let campos = [];

  let message = "Categoria salva com sucesso!";

  console.log("rest", rest);

  for (let item in rest) {
    campos.push(item);
  }

  camposCustomizados.push({ valor, campos });
  addCategoria({ chave, valor, camposCustomizados });

  req.flash("categoria-edit", message);
  res.redirect("/categorias");
});

module.exports = routerCategoria;
