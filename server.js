const express = require("express");
const cors = require("cors");
const path = require("path");
const mongoose = require("mongoose");
const app = express();
const signupRouter = require("./routes/signup");
const loginRouter = require("./routes/login");
const session = require('express-session');
const flash = require('connect-flash');
const PORT = 3000;

//GLOBAL MIDDLEWARES
app.use(
  cors({
    origin: "*",
  })
);

//CONNECTING TO DATABASE
mongoose.connect(
  "mongodb+srv://noob26:1234@cluster0.afroe.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
  () => {
    console.log("Connected to the DB\n");
  }
);

app.use(session({
  secret: 'secret',
  cookie: {maxAge: 60000},
  resave: false,
  saveUninitialized: false
}))
app.use(flash())
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
  res.render("login", {
    message: "",
  });
});

app.get("/signup", (req, res) => {
  res.render("signup");
});

app.get("/form", (req, res) => {
  res.render("index");
});

app.use("/", signupRouter);
app.use("/", loginRouter);
