const dotenv = require("dotenv").config();
const express = require("express");
const routerApi = require("./routes");
//Create server express
const app = express();
const PORT = process.env.PORT || 4001;

//public directory
app.use(express.static("public"));

//read body
app.use(express.json());

routerApi(app);

//listen requets
app.listen(PORT, () => {
  console.log(`app listen in [PORT]:${PORT}`);
});
