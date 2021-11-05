const bcrypt = require("bcrypt");
const User = require("../models/User");
const jwt = require("jsonwebtoken");

exports.signup_post = (req, res, next) => {
  const username = req.body.username;
  const password = req.body.password;
  bcrypt.hash(password, 10, (err, hash) => {
    if (err) {
      return res.status(500).json({
        error: err,
      });
    } else {
      User.findAndCountAll({ where: { user_name: username } })
        .then((result) => {
          if (result.count > 0) {
            res.status(403).json({
              message: "USER NAME ALREADY EXISTS",
            });
          } else {
            User.create({
              user_name: username,
              password: hash,
            })
              .then((result) => {
                res.status(200).json({
                  message: "Signup successfully",
                });
              })
              .catch((err) => {
                res.send(err);
              });
          }
        })
        .catch((err) => {
          res.send(err);
        });
    }
  });
};

exports.login_post = (req, res, next) => {
  const username = req.body.username;
  const password = req.body.password;
  User.findOne({ where: { user_name: username } })
    .then((user) => {
      if (user) {
        bcrypt.compare(password, user.password, (err, result) => {
          if (err) {
            res.status(401).json({
              message: "Auth Failed before comparing ",
            });
          }
          if (result) {
            const token = jwt.sign(
              {
                id: user.id,
                username: user.user_name,
              },
              "nodetodo",
              {
                expiresIn: "1h",
              }
            );
            res.status(200).json({
              message: "AUTH SUCCESSFUL",
              token: token,
            });
          }
        });
      } else {
        res.status(401).json({
          message: "Auth failed",
        });
      }
    })
    .catch((err) => {
      res.json({ err });
    });
};
