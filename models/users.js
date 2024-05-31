const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        require: true,
    },
    
email: {
        type: String,
        require: true,
        unique: true,
    },
    
password: {
        type: String,
        require: true,
    },
});

userSchema.statics.findUserByCredentials = function(email,password){
      return this
    .findOne({email}).then((users)=>{
        if(!users){
            return Promise.reject(new Error("Неправельные почта или пароль"));
        }
        return bcrypt.compare(password, users.password).then(matched=>{
        if(!matched){
            return Promise.reject(new Error("Неправельные почта или пароль"));
        }
        return users;
      });
    });
};
module.exports = mongoose.model('users', userSchema); 