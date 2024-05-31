const {sendAllcategories, sendcategoriesById, sendcategoriesCreated, sendcategoriesDeleted, sendcategoriesUpdated} = require("../controllers/categories");
const { checkAuth } = require("../middlewares/auth");
const {findAllcategories, findcategoriesById, createcategories, deletecategories, updateGamepdatedcategories, checkIsCategoryExists, checkEmptyName} = require("../middlewares/categories");

const categoriesRouter = require("express").Router();

categoriesRouter.get("/categories",findAllcategories,sendAllcategories);
categoriesRouter.get("/categories/:id",
findAllcategories,
checkIsCategoryExists,
checkAuth,
checkEmptyName,
createcategories,
findcategoriesById,
sendcategoriesCreated,
sendcategoriesById);

categoriesRouter.post("/categories",checkAuth, createcategories,sendcategoriesCreated);

categoriesRouter.delete("/categories/:id",checkAuth,deletecategories,sendcategoriesDeleted)

categoriesRouter.put("/categories/:id",checkAuth,checkEmptyName,updateGamepdatedcategories,sendcategoriesUpdated)
module.exports = categoriesRouter