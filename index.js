const dotenv = require("dotenv").config();
const express = require("express");
const cors = require("cors");
const routerApi = require("./routes");
const { dbConnection } = require("./db/config");
//Create server express
const app = express();
//connectDataBase
dbConnection();
//CORS
app.use(cors());
const PORT = process.env.PORT || 3001;

//public directory
app.use(express.static("public"));

//read body
app.use(express.json());

routerApi(app);

//listen requets
app.listen(PORT, () => {
  console.log(`app listen in [PORT]:${PORT}`);
});
