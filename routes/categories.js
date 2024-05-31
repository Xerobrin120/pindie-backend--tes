const {sendAllcategories, sendcategoriesById, sendcategoriesCreated, sendcategoriesDeleted, sendcategoriesUpdated} = require("../controllers/categories");
const { checkAuth } = require("../middlewares/auth");
const {findAllcategories, findcategoriesById, createcategories, deletecategories, updateGamepdatedcategories} = require("../middlewares/categories");

const categoriesRouter = require("express").Router();

categoriesRouter.get("/categories",findAllcategories,sendAllcategories);
categoriesRouter.get("/categories/:id",findcategoriesById,sendcategoriesById);
categoriesRouter.post("/categories",checkAuth, createcategories,sendcategoriesCreated);
categoriesRouter.delete("/categories/:id",checkAuth,deletecategories,sendcategoriesDeleted)
categoriesRouter.put("/categories/:id",checkAuth,updateGamepdatedcategories,sendcategoriesUpdated)
module.exports = categoriesRouter