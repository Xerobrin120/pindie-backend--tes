const users = require("../models/users");
const jwt = require("jsonwebtoken");


const login = (req,res)=>{
    const { email,password } = req.body;
    users
    .findUserByCredentials(email,password) 
    .then((users)=>{
        const token = jwt.sign({_id: users._id}, "group-Twenty-six",{
            expiresIn: 3600,
        });
        return {users,token};
    })
    .then((users,token)=>{
        res
        .status(200)
        .send({_id: users._id, username: users.username, email: users.email, jwt: token,})
    })
    .catch((error)=>{
        res.status(401).send({message: error.message})
    });
};
module.exports = { login };