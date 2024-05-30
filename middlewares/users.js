const users = require("../models/users");

const findAllUsers = async (req,res,next)=>{
    req.usersArray = await users.find({})
    next();
};
const findUsersById = async (req,res,next)=>{
    console.log(`GET /userss/${req.params.id}`);
    try{
req.users = await users.findById(req.params.id)
next();
} catch (error) {
    console.log(error);
    res.status(404).send({message:"Users not found"});
} 
};
const createUsers = async (req,res,next)=>{
    console.log("POST /users");
    try{
    console.log(req.body);
    req.user = await users.create(req.body);
    next();
    } catch (error) {
    console.log(error);
     res.status(400).send({ message: "Error while users crating" });
    }
};
const deleteUser = async (req,res,next)=>{
    console.log(`DELETE /users/${req.params.id}`);
    try{
       req.user = await users.findByIdAndDelete(req.params.id)
       next();
    } catch (error) {
        console.log(error);
        res.status(400).send({ message: "Error while users deleting" });
    }
};
const updateUser = async (req,res,next)=>{
    console.log(`PUT /users/${req.params.id}`);
    try{
        if(req.body.name || req.body.email || req.body.passwosrd){
            console.log(req.body);
            req.user = await users.findByIdAndUpdate(req.params.id, req.body);
            next();
        }else{
            res.status(400).send({ message: "Error while users updating: body is empty" });
        }
    } catch (error) {
        console.log(error);
        res.status(400).send({ message: "Error while users updating" });
    }
};
module.exports = {findAllUsers,findUsersById,createUsers,deleteUser,updateUser};
