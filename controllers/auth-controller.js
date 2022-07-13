const { response } = require("express");
const { responseSuccess, responseError } = require("../utils/responseManager");
const { registerUserDb, loginUserDb } = require("./store-auth-controller");

const resp = response;
const registerUser = async (req, res = resp) => {
  try {
    const response = await registerUserDb(req.body);
    if (!response.responseDB?._id) return responseError(res, 400, response);
    const uid = response && response.responseDB && response.responseDB._id;
    const name = response && response.responseDB && response.responseDB.name;
    const { token } = response;
    return responseSuccess(res, 200, { uid, name, token });
  } catch (error) {
    console.error("[errorRegisterUser]: ", error);
    return responseError(res, 500, "something go wrong try again later");
  }
};

const loginUser = async (req, res = resp) => {
  try {
    const response = await loginUserDb(req.body);
    if (!response.findUser?._id) {
      return responseError(res, 400, response);
    }
    const { findUser, token } = response;
    const { _id, name } = findUser;
    return responseSuccess(res, 200, { uid: _id, name, token });
  } catch (error) {
    console.error("[errorLoginUser]: ", error);
    return responseError(res, 500, "something go wrong try again later");
  }
};

const renewToken = (req, res = resp) => {
  res.json({
    ok: true,
    message: "renew token",
  });
};

module.exports = { registerUser, loginUser, renewToken };
