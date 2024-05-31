const allowedCors = ["https://mentot-26.nomoredomainswork.ru/"];

function cors(req,res,next) {
    const { origin } = req.headers;

    if (allowedCors.includes(origin)) {
        res.headers("Access-Control_Allow_Origin",origin);
    }
    res.headers("Access-Control_Allow_Methods","GET,HEAD,PUT,PATCH,POST,DELETE");
    res.headers("Access-Control_Allow_Heders","Access-Control_Allow_Heders,Origin,Access,X-Requested-With,Content-Type,Access-Control-Request-Method,Access-Control-Request-Method"
    );
    next();
}

module.exports = cors;