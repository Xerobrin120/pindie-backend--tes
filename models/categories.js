const mongoose = require("mongoose");

const categorieschema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
});

const categories = mongoose.model("categories",categorieschema)

module.exports = categories;