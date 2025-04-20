const jwt = require("jsonwebtoken")

module.exports = function(req, res,next) {
    const token = req.headers['auth-token'] || req.headers['authorization'];
    if(!token) return res.status(401).send("Access Denied");

    try {
        const rawToken = token.startsWith("Bearer ") ? token.split(" ")[1] : token;
        const verified = jwt.verify(rawToken, process.env.TOKEN_SECRET);
         req.user = verified;
        next();
    } catch(err){
        res.status(400).send("Invalid token")
    }
}