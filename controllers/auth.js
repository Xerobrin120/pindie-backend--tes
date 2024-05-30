const users = require("../models/users");
const bcrypt = require("bcryptjs");

const login = (req,res)=>{
    const { email,password } = req.body;
    users.findByCredentials(email,password) 
    .then((users)=>{
        if(!users){
            return Promise.reject(new Error("Неправельные почта или пароль"));
        }
        return bcrypt.compare(password, users.password).then(matched=>{
        if(!matched){
            return Promise.reject(new Error("Неправельные почта или пароль"));
        }
        return users;
      });
    })
    .then((users)=>{
        res
        .status(200)
        .send({_id: users._id, username: users.username, email: users.email})
    })
    .catch((error)=>{
        res.status(401).send({message: error.message})
    });
};
module.exports = { login };