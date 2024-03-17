const express = require("express");
const router = express.Router();
const cors = require("cors");
const bodyParser = require("body-parser");

const userRouter = require("./user");
const accountRouter = require("./account");

router.use(cors());
router.use(bodyParser.json());

router.use("/user", userRouter);
router.use("/account", accountRouter);

module.exports = router;
