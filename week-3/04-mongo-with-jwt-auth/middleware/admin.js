// Middleware for handling auth
const jwt = require("jsonwebtoken");
const JWT_SECRET = "@jwt-secret123";

function adminMiddleware(req, res, next) {
    try {
        const token = req.headers.authorization;
        const decode = jwt.verify(token, JWT_SECRET);
        req.body.id = decode.userId;
        next();
    } catch (error) {
        res.status(404).send({ msg: error.message });
    }
}

module.exports = adminMiddleware;
