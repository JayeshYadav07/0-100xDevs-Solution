const express = require("express");
const { db_connection } = require("./configs/db");
const v1Router = require("./routes/index");
require("dotenv").config();

const PORT = process.env.PORT || 3000;
const app = express();

app.get("/", (req, res) => {
	res.send("Hello World!");
});

app.use("/api/v1", v1Router);



app.listen(PORT, async () => {
	try {
		await db_connection;
		console.log("Connected to DB");
	} catch (err) {
		console.log(err);
	}
	console.log(`Server running on ${PORT} !`);
});
