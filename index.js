const dotenv = require("dotenv").config();
const express = require("express");
const routerApi = require("./routes");
//Create server express
const app = express();
const PORT = process.env.PORT || 4001;

//routes

//public directory
app.use(express.static("public"));

routerApi(app);

//listen requets
app.listen(PORT, () => {
  console.log(`app listen in [PORT]:${PORT}`);
});
