const categories = require("../models/categories");

const findAllcategories = async (req,res,next)=>{
    req.categoriesategoryArray = await categories.find({})
    next();
};
const findcategoriesById = async (req,res,next)=>{
    console.log(`GET /categories/${req.params.id}`);
    try{
req.category = await categories.findById(req.params.id)
next();
}catch (error) {
    res.setHeader("Content-Type", "application/json");
    res.status(404).send({message:"categories not found"});
} 
};
const createcategories = async (req,res,next)=>{
    console.log("POST /categories");
    try{
    console.log(req.body);
    req.category = await categories.create(req.body);
    next();
    } catch (error) {
        res.setHeader("Content-Type", "application/json");
     res.status(400).send(JSON.stringify({ message: "Error while categories crating" }));
    }
};
const deletecategories = async (req,res,next)=>{
    console.log(`DELETE /categories/${req.params.id}`);
    try{
       req.category = await categories.findByIdAndDelete(req.params.id)
       next();
    } catch (error) {
        res.setHeader("Content-Type", "application/json");
    res
        res.status(400).send({ message: "Error while game deleting" });
    }
};
const updateGamepdatedcategories = async (req,res,next)=>{
    console.log(`PUT /categories/${req.params.id}`);
    try{
       req.category = await categories.findByIdAndUpdate(req.params.id)
       next();
    } catch (error) {
        res.setHeader("Content-Type", "application/json");
    res
        res.status(400).send(JSON.stringify({ message: "Ошибка обновления категории" }));
    }
};

const checkEmptyName = async (req, res, next) => {
    if (!req.body.name) {
      res.setHeader("Content-Type", "application/json");
      res
        .status(400)
        .send(JSON.stringify({ message: "Введите название категории" }));
    } else {
      next();
    }
  };
  
  const checkIsCategoryExists = async (req, res, next) => {
    const isInArray = req.categoriesArray.find((category) => {
      return req.body.name === category.name;
    });
    if (isInArray) {
      res.setHeader("Content-Type", "application/json");
      res.status(400).send(
        JSON.stringify({
          message: "Категория с таким названием уже существует",
        })
      );
    } else {
      next();
    }
  };
  
module.exports = { findAllcategories, findcategoriesById,createcategories,deletecategories,updateGamepdatedcategories,checkEmptyName,checkIsCategoryExists};