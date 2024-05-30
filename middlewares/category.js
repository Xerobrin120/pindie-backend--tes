const category = require("../models/category");

const findAllcategory = async (req,res,next)=>{
    req.categoryArray = await category.find({})
    next();
};
const findCategoryById = async (req,res,next)=>{
    console.log(`GET /category/${req.params.id}`);
    try{
req.category = await category.findById(req.params.id)
next();
}catch (error) {
    console.log(error);
    res.status(404).send({message:"Category not found"});
} 
};
const createCategory = async (req,res,next)=>{
    console.log("POST /category");
    try{
    console.log(req.body);
    req.category = await category.create(req.body);
    next();
    } catch (error) {
        console.log(error);
     res.status(400).send({ message: "Error while category crating" });
    }
};
const deleteCategory = async (req,res,next)=>{
    console.log(`DELETE /category/${req.params.id}`);
    try{
       req.category = await category.findByIdAndDelete(req.params.id)
       next();
    } catch (error) {
        console.log(error);
        res.status(400).send({ message: "Error while game deleting" });
    }
};
const updateGamepdatedCategory = async (req,res,next)=>{
    console.log(`PUT /category/${req.params.id}`);
    try{
       req.category = await category.findByIdAndUpdate(req.params.id)
       next();
    } catch (error) {
        console.log(error);
        res.status(400).send({ message: "Error while game updating" });
    }
};
module.exports = { findAllcategory, findCategoryById,createCategory,deleteCategory,updateGamepdatedCategory};