const categories = require("../models/categories");

const findAllcategories = async (req,res,next)=>{
    req.categoriesategoryArray = await categories.find({})
    next();
};
const findcategoriesById = async (req,res,next)=>{
    console.log(`GET /categories/${req.params.id}`);
    try{
req.categories = await categories.findById(req.params.id)
next();
}catch (error) {
    console.log(error);
    res.status(404).send({message:"categories not found"});
} 
};
const createcategories = async (req,res,next)=>{
    console.log("POST /categories");
    try{
    console.log(req.body);
    req.categories = await categories.create(req.body);
    next();
    } catch (error) {
        console.log(error);
     res.status(400).send({ message: "Error while categories crating" });
    }
};
const deletecategories = async (req,res,next)=>{
    console.log(`DELETE /categories/${req.params.id}`);
    try{
       req.categories = await categories.findByIdAndDelete(req.params.id)
       next();
    } catch (error) {
        console.log(error);
        res.status(400).send({ message: "Error while game deleting" });
    }
};
const updateGamepdatedcategories = async (req,res,next)=>{
    console.log(`PUT /categories/${req.params.id}`);
    try{
       req.categories = await categories.findByIdAndUpdate(req.params.id)
       next();
    } catch (error) {
        console.log(error);
        res.status(400).send({ message: "Error while game updating" });
    }
};
module.exports = { findAllcategories, findcategoriesById,createcategories,deletecategories,updateGamepdatedcategories};