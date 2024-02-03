const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const { Todo } = require("./db");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());

// get all todo's
app.get("/todos", async (req, res) => {
	const result = await Todo.find();
	res.send(result);
});

//  add todo
app.post("/todo", async (req, res) => {
	const { title, desc } = req.body;
	try {
		await Todo.create({ title, desc });
		res.send("Todo crated");
	} catch (error) {
		res.send("Something went wrong");
	}
});
//  get todo
app.get("/todo/:id", async (req, res) => {
	const { id } = req.params;
	try {
		const result = await Todo.findById(id);
		res.send(result);
	} catch (error) {
		res.send("Something went wrong");
	}
});

// updated todo
app.patch("/todo/:id", async (req, res) => {
	const { id } = req.params;
	try {
		const result = await Todo.findByIdAndUpdate(id, { ...req.body });
		res.send(`Todo id :${id} updated`);
	} catch (error) {
		res.send("Something went wrong");
	}
});

app.listen(8080, async () => {
	try {
		console.log("Listening on port 8080");
		await mongoose.connect(process.env.MONGODB_URL);
		console.log("Db connected!");
	} catch (error) {
		console.log("Something went wrong");
	}
});
