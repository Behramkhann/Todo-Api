const express = require("express");
const router = express.Router();
const db = require("../util/connection");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { object } = require("webidl-conversions");

router.post("/signup", (req, res, next) => {
  const username = req.body.username;
  const password = req.body.password;
  bcrypt.hash(password, 10, (err, hash) => {
    if (err) {
      return res.status(500).json({
        error: err,
      });
    } else {
      res.json({
        username,
        password: hash,
      });
    }
  });
});

module.exports = router;
