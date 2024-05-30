const jwt = require("jsonwebtoken");
const checkAuth = (req,res,next) =>{
    const {authorization} = req.headers;
    if(!authorization || !authorization.startsWith("Bearer")){
        return res.status(401).send({message: "Необходима авторизация "});
    }
    const token = authorization.replace("Bearer","");
    try{
        req.users = jwt.verify(token,"group-twenty-six");
    } catch (error) {
        return res.status(401).send({message: "Необходима авторизация "});
    }
};
module.exports = {checkAuth}