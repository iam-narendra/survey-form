const express = require("express");
const router = express.Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");

router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({username: req.body.username});
    if (user) {
      const cmp = await bcrypt.compare(req.body.password, user.password);
      if (cmp) {
        res.redirect("/form");
      } else {
        req.flash("message", "Wrong Username or Password");
        res.render("login", {message: req.flash("message")});
      }
    } else {
      req.flash("message", "Wrong Username or Password");
      res.render("login", {message: req.flash("message")});
    }
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
