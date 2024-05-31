const {sendAllUsers, sendUsersById, sendUsersCreated, sendUsersDelete, sendUsersUpdated, sendMe} = require("../controllers/users");
const { checkAuth } = require("../middlewares/auth");
const {findAllUsers, findUsersById, createUsers, deleteUser, updateUser, hashPasswords, checkIsUserExists, checkEmptyNameAndEmailAndPassword, checkEmptyNameAndEmail} = require("../middlewares/users");

const usersRouter = require("express").Router();

usersRouter.get("/users",findAllUsers,sendAllUsers);
usersRouter.get("/users/:id",findUsersById,sendUsersById);
usersRouter.get("/me", checkAuth,sendMe)
usersRouter.post(
    "/users",
    findAllUsers,
    hashPasswords,
    createUsers,
    checkIsUserExists,
    checkEmptyNameAndEmailAndPassword,
    checkAuth,
    sendUsersCreated
  ); 
usersRouter.delete("/users/:id",checkAuth,deleteUser,sendUsersDelete);
usersRouter.put("/users/:id",checkAuth,updateUser,sendUsersUpdated,checkEmptyNameAndEmail);
module.exports = usersRouter