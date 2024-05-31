const users = require("../models/users");
const bcrypt = require("bcryptjs");

const findAllUsers = async (req,res,next)=>{
    console.log("GET /api/users");
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
const hashPasswords = async (req,res,next)=>{
    try{
     const salt = await bcrypt.genSalt(10);
     const hash = await bcrypt.hash(req.body.passwosrd,salt);
     req.body.passwosrd = hash;
    } catch(error) {
  res.status(400).send({message: "Ошибка при хешировании пароля"});
    }

};
const checkEmptyNameAndEmailAndPassword = async (req, res, next) => {
    if (!req.body.username || !req.body.email || !req.body.password) {
      res.setHeader("Content-Type", "application/json");
      res
        .status(400)
        .send(JSON.stringify({ message: "Введите имя, email и пароль" }));
    } else {
      next();
    }
  };
  
  const checkEmptyNameAndEmail = async (req, res, next) => {
    if (!req.body.username || !req.body.email) {
      res.setHeader("Content-Type", "application/json");
      res.status(400).send(JSON.stringify({ message: "Введите имя и email" }));
    } else {
      next();
    }
  };
  
  const checkIsUserExists = async (req, res, next) => {
    const isInArray = req.usersArray.find((user) => {
      return req.body.email === user.email;
    });
    if (isInArray) {
      res.setHeader("Content-Type", "application/json");
      res
        .status(400)
        .send(
          JSON.stringify({ message: "Пользователь с таким email уже существует" })
        );
    } else {
      next();
    }
  };
  
module.exports = {findAllUsers,findUsersById,createUsers,deleteUser,updateUser,hashPasswords,checkIsUserExists,checkEmptyNameAndEmail,checkEmptyNameAndEmailAndPassword};
