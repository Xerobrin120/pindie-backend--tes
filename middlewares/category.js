const category = require("../models/category");

const findAllcategory = async (req,res,next)=>{
    req.categoryArray = await category.find({})
    next();
}
module.exports = findAllcategory;