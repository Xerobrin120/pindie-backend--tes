const sendAllUsers = (req,res) => {
    res.setHeader("content-Type","application/json");
    res.end(JSON.stringify(req.usersArray))
};

module.exports = sendAllUsers;