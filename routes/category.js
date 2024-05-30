const sendAllcategory = require("../controllers/category");
const findAllcategory = require("../middlewares/category");

const categoryRouter = require("express").Router();

categoryRouter.get("/category",findAllcategory,sendAllcategory);

module.exports = categoryRouter