const express = require("express");
const cors = require("cors");
const path = require("path");
const app = express();
const PORT = 3000;

//GLOBAL MIDDLEWARES
app.use(
  cors({
    origin: "*",
  })
);

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

//INITIALIZING SERVER
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

//ROUTES
app.get("/", (req, res) => {
  res.render("login");
});

app.get("/signup", (req, res) => {
  res.render("signup");
});

app.get("/form", (req, res) => {
  res.render("index");
});
