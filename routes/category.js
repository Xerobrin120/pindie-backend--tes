const {sendAllcategory, sendCategoryById, sendCategoryCreated, sendCategoryDeleted, sendCategoryUpdated} = require("../controllers/category");
const {findAllcategory, findCategoryById, createCategory, deleteCategory, updateGamepdatedCategory} = require("../middlewares/category");

const categoryRouter = require("express").Router();

categoryRouter.get("/category",findAllcategory,sendAllcategory);
categoryRouter.get("/category/:id",findCategoryById,sendCategoryById);
categoryRouter.post("/category", createCategory,sendCategoryCreated);
categoryRouter.delete("/category/:id",deleteCategory,sendCategoryDeleted)
categoryRouter.put("/category/:id",updateGamepdatedCategory,sendCategoryUpdated)
module.exports = categoryRouter