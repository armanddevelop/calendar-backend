const User = require("../models/UserModel");

const registerUserDb = async (request) => {
  try {
    const user = new User(request);
    const responseDB = await user.save();
    return responseDB;
  } catch (error) {
    console.error("[errorregisterUserDb]: ", error);
    throw new Error(error);
  }
};

module.exports = { registerUserDb };
