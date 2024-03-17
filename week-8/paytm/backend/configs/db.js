require("dotenv").config();
const mongoose = require("mongoose");

const db_connection = mongoose.connect(process.env.MONGODB_URL);

module.exports = { db_connection };
