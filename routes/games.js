const {sendAllGames, sendGameById, sendGameCreated, sendGameDeleted, sendGameUpdated} = require("../controllers/games");
const { checkAuth } = require("../middlewares/auth");
const {findAllGames, findGameById, createGame, deleteGame, updateGame, checkEmptyFields, checkIfCategoriesAvaliable, checkIsGameExists, checkIfUsersAreSafe, checkIsVoteRequest} = require("../middlewares/games");

const gamesRouter = require("express").Router();

gamesRouter.get("/games",findAllGames,sendAllGames);
gamesRouter.get("/games/:id",findGameById, sendGameById);
gamesRouter.post(
    "/games",
    findAllGames,
    checkIsGameExists,
    checkIfCategoriesAvaliable,
    checkEmptyFields,
    checkAuth,
    createGame,
    sendGameCreated
  );
gamesRouter.delete("/games/:id",checkAuth,deleteGame,sendGameDeleted);
gamesRouter.put("/games/:id",findGameById,
checkIsVoteRequest,
checkIfUsersAreSafe,
checkIfCategoriesAvaliable,
checkEmptyFields,checkAuth,updateGame,sendGameUpdated);
module.exports = gamesRouter