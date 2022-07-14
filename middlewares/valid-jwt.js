const { response, request } = require("express");
const jwt = require("jsonwebtoken");
const { responseError } = require("../utils/responseManager");

const validateJWT = async (req = request, res = response, next) => {
  const token = req.header("x-token");
  if (!token) return responseError(res, 400, "invalid token try again");
  try {
    const { uid, name } = jwt.verify(token, process.env.SECRET_JWT_SEED);
    req.uid = uid;
    req.name = name;
    next();
  } catch (error) {
    console.error("[errorValidateJWT]: ", error);
    responseError(res, 401, "invalid token");
  }
};

module.exports = { validateJWT };
