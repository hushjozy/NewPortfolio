const express = require("express");
const {
  addPortfolio,
  editPortfolio,
  deletePortfolio,
  getPortfolio,
} = require("./controllers/portfolio.controller");
const bodyParser = require("body-parser");
const db = require("./db");
const portfolioController = require("./controllers/portfolio.controller");
const app = express();
require("dotenv").config();
const port = process.env.PORT || 5000;

// !important!
// you need to install the following libraries |express|[dotenv > if required]
// or run this command >> npm i express dotenv
app.use(bodyParser.json());

app.post("/api/data", portfolioController.addPortfolio);
app.put("/api/data/:id", portfolioController.editPortfolio); // New route for editing data
app.delete("/api/data/:id", portfolioController.deletePortfolio); // New route for deleting data

app.get("/api/getPortfolio", getPortfolio);

app.listen(port, () =>
  console.log("> Server is up and running on port : " + port)
);
