const { Admin } = require("../db/index.js");
// Middleware for handling auth
async function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    try {
        const { username, password } = req.headers;
        const result = await Admin.findOne({ username, password });
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

module.exports = adminMiddleware;
