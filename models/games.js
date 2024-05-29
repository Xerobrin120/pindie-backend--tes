const mongoose = require("mongoose");

const gameSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true,
    },
    
description: {
        type: String,
        require: true,
    },
    
developer: {
        type: String,
        require: true,
    },
    image: {
        type: String,
        require: true,
    },
    link: {
        type: String,
        require: true,
    },
});

const games = mongoose.model("games",gameSchema)

module.exports = games;