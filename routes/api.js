const apiRouter = require("express").Router();
const categoryRouter = require("./category");
const gamesRouter = require("./games");
const usersRouter = require("./users");

apiRouter.use("/api",gamesRouter);
apiRouter.use("/api",usersRouter);
apiRouter.use("/api",categoryRouter);

module.exports = apiRouter;