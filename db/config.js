const mongoose = require("mongoose");
const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.DB_CNN, {
      useNewUrlParser: true,
    });
    console.log("dbOnline!!!!");
  } catch (error) {
    console.error("[dataBaseError]: ", error);
    throw new Error("Filed to connect to data base");
  }
};

module.exports = { dbConnection };
