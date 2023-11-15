const Portfolio = require("../models/portfolio.model.js");

const portfolioController = {};
portfolioController.addPortfolio = async (req, res, next) => {
  try {
    const { name, link, img } = req.body;
    console.log(name);
    // Find the GigMedia document by gigId

    // Create a new GigMedia document if it doesn't exist
    let portfolio = new Portfolio({
      name: name,
      link: link,
      img: "https://res.cloudinary",
    });

    await portfolio.save();
    res.status(201).json({ message: "Portfolio saved successfully" });
  } catch (error) {
    res.status(500).json({ error: "An error occurred saving " });
    next(error);
  }
};

// GET
portfolioController.getPortfolio = async (req, res, next) => {
  try {
    const allPortfolio = await Portfolio.find();
    res.status(200).json(allPortfolio);
  } catch (error) {
    res.status(500).json({ error: "An error occurred" });
    next(error);
  }
};

portfolioController.editPortfolio = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name, link, img } = req.body;

    const updatedPortfolio = await Portfolio.findByIdAndUpdate(
      id,
      { name, link, img },
      { new: true }
    );

    if (!updatedData) {
      return res.status(404).json({ error: "Data not found" });
    }

    res.status(200).json(updatedData);
  } catch (error) {
    res.status(500).json({ error: "An error occurred" });
    next(error);
  }
};

portfolioController.deletePortfolio = async (req, res, next) => {
  try {
    const { id } = req.params;

    const deletedData = await Portfolio.findByIdAndDelete(id);

    if (!deletedData) {
      return res.status(404).json({ error: "Data not found" });
    }

    res.status(200).json({ message: "Data deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "An error occurred" });
    next(error);
  }
};

module.exports = portfolioController;
