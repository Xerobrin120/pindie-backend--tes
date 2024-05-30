const sendAllUsers = (req,res) => {
    res.setHeader("content-Type","application/json");
    res.end(JSON.stringify(req.usersArray))
};
const sendUsersById = (req,res)=>{
    res.setHeader("Content-Type","application/json");
    res.end(JSON.stringify(req.userssArray));
};
const sendUsersCreated = (req,res)=>{
    res.setHeader("Content-Type","application/json");
    res.end(JSON.stringify(req.user));
};
const sendUsersDelete = (req,res)=>{
    res.setHeader("Content-Type","application/json");
    console.log(req.users)
    res.end(JSON.stringify(req.users));
};
const sendUsersUpdated = (req,res)=>{
    res.setHeader("Content-Type","application/json");
    console.log(req.users)
    res.end(JSON.stringify(req.users));
};
module.exports = {sendAllUsers,sendUsersById,sendUsersCreated,sendUsersDelete,sendUsersUpdated};