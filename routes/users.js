const {sendAllUsers, sendUsersById, sendUsersCreated, sendUsersDelete, sendUsersUpdated} = require("../controllers/users");
const { checkAuth } = require("../middlewares/auth");
const {findAllUsers, findUsersById, createUsers, deleteUser, updateUser, hashPasswords} = require("../middlewares/users");

const usersRouter = require("express").Router();

usersRouter.get("/users",findAllUsers,sendAllUsers);
usersRouter.get("/users/:id",findUsersById,sendUsersById);
usersRouter.post("/users",hashPasswords,createUsers,sendUsersCreated);
usersRouter.delete("/users/:id",checkAuth,deleteUser,sendUsersDelete);
usersRouter.put("/users/:id",checkAuth,updateUser,sendUsersUpdated);
module.exports = usersRouter