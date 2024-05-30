const games = require("../models/games");

const findAllGames = async (req,res,next)=>{
    req.gamesArray = await games.find({})
    .populate("category")
    .populate({
        path: "users",
        select: "-password"
    });
    next();
};
    const findGameById = async (req,res,next)=>{
        console.log(`GET /games/${req.params.id}`);
        try{
    req.game = await games
    .findById(req.params.id)
    .populate("category")
    .populate({
        path: "users",
        select: "-password",
    });
    next();
    }catch (error) {
        console.log(error);
        res.status(404).send({message:"Games not found"});
    } 
    };
    const createGame = async (req,res,next)=>{
        console.log("POST /games");
        try{
        console.log(req.body);
        req.game = await games.create(req.body);
        } catch (error) {
        console.log(error);
         res.status(400).send({ message: "Error while game crating" });
        }
    };
    const deleteGame = async (req,res,next)=>{
        console.log(`DELETE /games/${req.params.id}`);
        try{
           req.game = await games.findByIdAndDelete(req.params.id)
           next();
        } catch (error) {
            res.status(400).send({ message: "Error while game deleting" });
        }
    }
    const updateGame = async (req,res,next)=>{
        console.log(`PUT /games/${req.params.id}`);
        try{
           req.game = await games.findByIdAndUpdate(req.params.id, req.body);
           next();
        } catch (error) {
            console.log(error);
            res.status(400).send({ message: "Error while game updating" });
        }
    }
module.exports = {findAllGames,findGameById,deleteGame,createGame,updateGame };
