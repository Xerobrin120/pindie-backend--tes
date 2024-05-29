const express = require("express");
const path = require("path");
const bodyParser = require("body-parser")

const gamesRouter = require("./routes/games")
const categoryRouter = require("./routes/category")
const usersRouter = require("./routes/users")

const PORT = 3000;

const app = express();

app.use(
    bodyParser.json(),
    express.static(path.join(__dirname,"public")),
    usersRouter,
    gamesRouter,
    categoryRouter
);

app.listen(PORT,() => {
 console.log(`Server is running at PORT http://loclhost:${PORT}`)
});