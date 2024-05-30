const sendAllcategory = (req,res) => {
    res.setHeader("content-Type","application/json");
    res.end(JSON.stringify(req.categoryArray))
};

module.exports = sendAllcategory;