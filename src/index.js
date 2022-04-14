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
  res.render("home", { title: "Loja de Produtos" });
});

app.get("/sobre", (req, res) => {
  res.render("sobre");
});

app.listen(3000);
