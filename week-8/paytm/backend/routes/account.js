const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/authMiddleware");

router.get("/", (req, res) => {
	res.send("This is the account request");
});

router.get("/test", authMiddleware, (req, res) => {
	const userId = req.userId;
	res.send({ message: "This is the test request", userId: userId });
});

module.exports = router;
