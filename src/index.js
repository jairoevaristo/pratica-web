const express = require("express");
const app = express();

const routes = require("./routes");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

app.set("view engine", "ejs");
app.set("views", "./src/views");
app.use(express.static(__dirname + "../../public"));

app.get("/home", (req, res) => {
  res.render("home", {
    title: "loja de produtos",
    message: "o mais barato é aqui!",
  });
});

app.get("/produtos", (req, res) => {
  res.render("produtos", { categorias: getCategoria() });
});

app.listen(3000);
