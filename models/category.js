const mongoose = require("mongoose");

const categorychema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
});

const category = mongoose.model("category",categorychema)

module.exports = category;