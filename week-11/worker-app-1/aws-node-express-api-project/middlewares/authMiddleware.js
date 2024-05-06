require("dotenv").config();
const JWT_SECRET = process.env.JWT_SECRET;
const jwt = require("jsonwebtoken");

function authMiddleware(req, res, next) {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return res
            .status(403)
            .json({ msg: "Token is not valid , Login again!" });
    }

    const token = authHeader.split(" ")[1];

    try {
        let decoded = jwt.verify(token, JWT_SECRET);
        req.body.userId = decoded.userId;
        next();
    } catch (err) {
        return res.status(401).send({ msg: err.message });
    }
}
module.exports = authMiddleware;
