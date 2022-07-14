const bcrypt = require("bcryptjs");
const User = require("../models/UserModel");
const { generateJWT } = require("../utils/jwt");

const encryptPassword = (request) => {
  const { password } = request;
  const salt = bcrypt.genSaltSync();
  request.password = bcrypt.hashSync(password, salt);
  return request;
};

const registerUserDb = async (request) => {
  try {
    const { email } = request;
    const isUnique = await User.findOne({ email });
    if (!isUnique) {
      const userEncrypt = encryptPassword(request);
      const user = new User(userEncrypt);
      const responseDB = await user.save();
      //generate JWT
      const token = await generateJWT(responseDB._id, responseDB.name);
      return { responseDB, token };
    } else {
      return "The email is in use try again";
    }
  } catch (error) {
    console.error("[errorRegisterUserDb]: ", error);
    return error;
  }
};
const loginUserDb = async (request) => {
  try {
    const { email, password } = request;
    const findUser = await User.findOne({ email });
    if (!findUser) return "The user or password is incorrect";
    const validPassword = bcrypt.compareSync(password, findUser.password);
    if (!validPassword) return "The user or password is incorrect";
    //generate jsonwbtoken
    const token = await generateJWT(findUser._id, findUser.name);
    return { findUser, token };
  } catch (error) {
    console.error("[errorLoginUserDb]: ", error);
    return error;
  }
};
const generateToken = async (request) => {
  const { uid, name } = request;
  try {
    //generate jsonwbtoken
    const token = await generateJWT(uid, name);
    return { token };
  } catch (error) {
    console.error("[errorGenerateToken]: ", error);
    return error;
  }
};

module.exports = { registerUserDb, loginUserDb, generateToken };
