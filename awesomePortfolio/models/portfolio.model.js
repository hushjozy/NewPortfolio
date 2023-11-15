const mongoose = require("mongoose");

const dataSchema = new mongoose.Schema({
  name: String,
  link: String,
  img: String,
});

const Portfolio = mongoose.model("Data", dataSchema);

module.exports = Portfolio;
