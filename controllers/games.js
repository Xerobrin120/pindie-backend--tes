const sendAllGames = (req,res) => {
    res.setHeader("content-Type","application/json");
    res.end(JSON.stringify(req.gamesArray))
};

module.exports = sendAllGames;