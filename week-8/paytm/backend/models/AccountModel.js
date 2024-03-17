const mongoose = require("mongoose");

const AccountSchema = new mongoose.Schema({
	userId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "User",
		required: true,
	},
	balance: Number,
});

const AccountModel = mongoose.model("Account", AccountSchema);

module.exports = AccountModel;
