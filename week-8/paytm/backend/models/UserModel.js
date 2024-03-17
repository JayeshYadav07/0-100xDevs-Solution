const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
	username: String,
	firstName: String,
	lastName: String,
	password: String,
});

const UserModel = mongoose.model("User", UserSchema);

module.exports = UserModel;
