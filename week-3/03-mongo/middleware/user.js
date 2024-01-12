const { User } = require("../db/index.js");
// Middleware for handling auth
async function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
    try {
        const { username, password } = req.headers;
        const result = await User.findOne({ username, password });
        if (result) {
            req.body["id"] = result.id;
            next();
        } else {
            res.status(403).send({ message: "Invalid username or password" });
        }
    } catch (error) {
        res.status(404).send({ message: "Something went wrong" });
    }
}

module.exports = userMiddleware;
