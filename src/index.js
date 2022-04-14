const express = require("express");
const flash = require("connect-flash");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const app = express();

const routes = require("./routes");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cookieParser("keyboard cat"));
app.use(
  session({
    secret: "SecretStringForSession",
    cookie: { maxAge: 60000 },
    resave: true,
    saveUninitialized: true,
  })
);
app.use(flash());

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
