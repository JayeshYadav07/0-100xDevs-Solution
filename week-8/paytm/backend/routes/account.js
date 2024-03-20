const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const authMiddleware = require("../middleware/authMiddleware");
const AccountModel = require("../models/AccountModel");

router.get("/", (req, res) => {
	res.send("This is the account request");
});

// 1. An endpoint for user to get their balance.
// Method: GET
// Route: /api/v1/account/balance
// Response:
// Status code - 200
// {
// 		balance: 100
// }

router.get("/balance", authMiddleware, async (req, res) => {
	const userId = req.userId;
	try {
		const account = await AccountModel.findOne({ userId: userId });
		res.send({
			balance: account.balance,
		});
	} catch (error) {
		res.status(500).send({ error: error.message });
	}
});

// 2. An endpoint for user to transfer money to another account
// Method: POST
// Route: /api/v1/account/transfer
// Body
// {
// 	to: string,
// 	amount: number
// }

router.post("/transfer", authMiddleware, async (req, res) => {
	const session = await mongoose.startSession();
	session.startTransaction();

	const { to, amount } = req.body;
	const userId = req.userId;

	const receiverAccount = await AccountModel.findOne({
		userId: to,
	}).session(session);

	if (!receiverAccount) {
		await session.abortTransaction();
		return res.status(404).send({ error: "Receiver account not found" });
	}

	const senderAccount = await AccountModel.findOne({
		userId: userId,
	}).session(session);

	if (senderAccount.balance < amount) {
		await session.abortTransaction();
		return res.status(400).send({ error: "Insufficient amount" });
	}

	// Perform the transfer
	await AccountModel.updateOne(
		{ userId: req.userId },
		{ $inc: { balance: -amount } }
	).session(session);
	await AccountModel.updateOne(
		{ userId: to },
		{ $inc: { balance: amount } }
	).session(session);

	await session.commitTransaction();
	res.status(200).send({ msg: "Transfer successful" });
});

/*

1) confirm that receiver account is valid  -> not valid account
2) balance amount - transfer amount >= 0   -> Insufficient amount
3) do atomicity 



*/
module.exports = router;
