const {sendAllcategory, sendCategoryById, sendCategoryCreated, sendCategoryDeleted, sendCategoryUpdated} = require("../controllers/category");
const { checkAuth } = require("../middlewares/auth");
const {findAllcategory, findCategoryById, createCategory, deleteCategory, updateGamepdatedCategory} = require("../middlewares/category");

const categoryRouter = require("express").Router();

categoryRouter.get("/category",findAllcategory,sendAllcategory);
categoryRouter.get("/category/:id",findCategoryById,sendCategoryById);
categoryRouter.post("/category",checkAuth, createCategory,sendCategoryCreated);
categoryRouter.delete("/category/:id",checkAuth,deleteCategory,sendCategoryDeleted)
categoryRouter.put("/category/:id",checkAuth,updateGamepdatedCategory,sendCategoryUpdated)
module.exports = categoryRouter