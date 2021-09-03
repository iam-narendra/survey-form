const express = require("express");
const router = express.Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");

router.post("/signup", async (req, res) => {
  try {
    //see if confirm password mathces
    if (req.body.password !== req.body.cpassword) {
      res.send("Passwords do not match");
    }

    //if user already exists
    const user = await User.findOne({username: req.body.name});
    if (user) {
      res.send("User already exists");
    }

    const hashedpwd = await bcrypt.hash(req.body.password, 10);

    const newUser = new User({
      username: req.body.name,
      password: hashedpwd,
      email: req.body.email,
      phone: req.body.phoneno,
      college: req.body.collegename
    });

    await newUser.save();
    res.redirect("/");
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
