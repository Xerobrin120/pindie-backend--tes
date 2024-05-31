const sendAllcategories = (req,res) => {
    res.setHeader("content-Type","application/json");
    res.end(JSON.stringify(req.categoriesArray))
};
const sendcategoriesById = (req,res)=>{
    res.setHeader("Content-Type","application/json");
    res.end(JSON.stringify(req.categoriesArray));
};
const sendcategoriesCreated = (req,res)=>{
    res.setHeader("Content-Type","application/json");
    res.end(JSON.stringify(req.categories));
};
const sendcategoriesDeleted = (req,res)=>{
    res.setHeader("Content-Type","application/json");
    res.end(JSON.stringify(req.categories));
};
const sendcategoriesUpdated = (req,res)=>{
    res.setHeader("Content-Type","application/json");
    res.end(JSON.stringify(req.categories));
};
module.exports = {sendAllcategories,sendcategoriesById,sendcategoriesCreated,sendcategoriesDeleted,sendcategoriesUpdated};