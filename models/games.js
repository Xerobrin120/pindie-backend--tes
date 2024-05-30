const mongoose = require("mongoose");
const category = require("./category");
const users = require("./users");

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
    category:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: category
    }],
    users:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: users,
    }]
});

const games = mongoose.model("games",gameSchema)

module.exports = games;