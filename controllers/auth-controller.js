const { response } = require("express");

const resp = response;

const registerUser = (req, res = resp) => {
  const { name, email, password } = req.body;

  res.status(201).json({
    ok: true,
    message: "register user",
    name,
    email,
    password,
  });
};

const loginUser = (req, res = resp) => {
  const { email, password } = req.body;
  res.json({
    ok: true,
    message: "login user",
    email,
    password,
  });
};

const renewToken = (req, res = resp) => {
  res.json({
    ok: true,
    message: "renew token",
  });
};

module.exports = { registerUser, loginUser, renewToken };
