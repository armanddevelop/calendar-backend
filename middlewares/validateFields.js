const { response } = require("express");
const { validationResult } = require("express-validator");
const { errorManager } = require("../utils/errorManager");
const resp = response;

const validateFields = (req, res = resp, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return errorManager(res, errors, 400);
  }
  next();
};
module.exports = { validateFields };
