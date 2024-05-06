const serverless = require("serverless-http");
const express = require("express");
const app = express();
const userRoutes = require("./routes/userRoutes");
const postRoutes = require("./routes/postRoutes");

app.use(express.json());

app.get("/", (req, res, next) => {
    return res.status(200).json({
        message: "Hello from root!",
    });
});

app.use("/user", userRoutes);
app.use("/post", postRoutes);

module.exports.handler = serverless(app);
