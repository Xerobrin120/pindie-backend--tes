const mongoose = require("mongoose");
const categories = require("./categories");
const users = require("./users");

const gameSchema = new mongoose.Schema({
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    developer: {
      type: String,
      required: true
    },
    image: {
      type: String,
      required: true
    },
    link: {
      type: String,
      required: true
    },
    // Добавляем поле для списка пользователей
    users: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: users,
    }],
    // Добавляем поле для списка категорий
    categories: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: categories,
    }],
  });
  
  module.exports = mongoose.model('games', gameSchema); 