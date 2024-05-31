const mongoose = require("mongoose");

const categorieschema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
});

module.exports = mongoose.model('categories', categorieschema)