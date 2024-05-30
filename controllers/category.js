const sendAllcategory = (req,res) => {
    res.setHeader("content-Type","application/json");
    res.end(JSON.stringify(req.categoryArray))
};
const sendCategoryById = (req,res)=>{
    res.setHeader("Content-Type","application/json");
    res.end(JSON.stringify(req.categoryArray));
};
const sendCategoryCreated = (req,res)=>{
    res.setHeader("Content-Type","application/json");
    res.end(JSON.stringify(req.category));
};
const sendCategoryDeleted = (req,res)=>{
    res.setHeader("Content-Type","application/json");
    res.end(JSON.stringify(req.category));
};
const sendCategoryUpdated = (req,res)=>{
    res.setHeader("Content-Type","application/json");
    res.end(JSON.stringify(req.category));
};
module.exports = {sendAllcategory,sendCategoryById,sendCategoryCreated,sendCategoryDeleted,sendCategoryUpdated};