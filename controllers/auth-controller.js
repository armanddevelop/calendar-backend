const { response } = require("express");
const User = require("../models/UserModel");
const { responseSuccess, responseError } = require("../utils/responseManager");
const { registerUserDb } = require("./store-auth-controller");

const resp = response;
const registerUser = async (req, res = resp) => {
  //const { name, email, password } = req.body;
  try {
    const response = await registerUserDb(req.body);
    return responseSuccess(res, 201, response);
  } catch (error) {
    console.error("[errorRegisterUser]: ", error);
    return responseError(res, 500, "something go wrong try again later");
  }
};

const loginUser = (req, res = resp) => {
  const { email, password } = req.body;

  res.status(200).json({
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
