/*
  Routes of user /authUser
  host + /api/v1/ + /authUser
*/
const { Router } = require("express");
const { check } = require("express-validator");
const router = Router();
const {
  registerUser,
  loginUser,
  renewToken,
} = require("../controllers/auth-controller");
const { validateJWT } = require("../middlewares/valid-jwt");
const { validateFields } = require("../middlewares/validateFields");
const validationsMiddlewareUser = [
  check("name")
    .notEmpty()
    .withMessage("The field name is mandatory")
    .isLength({ min: 5 })
    .withMessage("The name need to be minimum 5 characteres"),
  check("email")
    .notEmpty()
    .withMessage("The field email is mandatory")
    .isEmail()
    .withMessage("The field email must be a valid email"),
  check("password")
    .notEmpty()
    .withMessage("The password is mandatory")
    .isLength({ min: 6 })
    .withMessage("The password need to be minimum 5 characteres"),
  validateFields,
];
const validationsMiddlewareLogin = [
  check("email")
    .notEmpty()
    .withMessage("The field email is mandatory")
    .isEmail()
    .withMessage("The field email must be a valid email"),
  check("password")
    .notEmpty()
    .withMessage("The password is mandatory")
    .isLength({ min: 6 })
    .withMessage("The password need to be minimum 5 characteres"),
  validateFields,
];

router.post("/register/user", validationsMiddlewareUser, registerUser);

router.post("/login", validationsMiddlewareLogin, loginUser);

router.get("/renew/token", [validateJWT], renewToken);

module.exports = router;
