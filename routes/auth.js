/*
  Routes of user /authUser
  host + /api/v1/ + /authUser
*/
const { Router } = require("express");
const router = Router();
const {
  registerUser,
  loginUser,
  renewToken,
} = require("../controllers/auth-controller");

router.post("/register/user", registerUser);

router.post("/login", loginUser);

router.get("/renew/token", renewToken);

module.exports = router;
