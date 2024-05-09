import express, { Request, Response } from "express";
import surveyRoutes from "./routes/surveyRoutes";
import userRoutes from "./routes/userRoutes";

const app = express();

app.use(express.json());
app.use("/user", userRoutes);
app.use("/survey", surveyRoutes);

app.get("/", (req: Request, res: Response) => {
    res.send("Welcome to survey  application API!");
});

app.listen(8000, () => {
    console.log("Listening port at 8000!");
});
