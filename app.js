const express = require("express");
const path = require("path");
const bodyParser = require("body-parser")

const connectToDatabase = require("./database/connect");
const apiRouter = require("./routes/api");
const cookieParser = require("cookie-parser");
const pagesRouter = require("./routes/pages");

const PORT = 3000;

const app = express();
connectToDatabase();

app.use(
    cookieParser(),
    bodyParser.json(),
    pagesRouter,
    apiRouter
);

app.listen(PORT,() => {
 console.log(`Server is running at PORT http://loclhost:${PORT}`)
});