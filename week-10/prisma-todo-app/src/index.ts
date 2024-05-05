import express, { Express, Request, Response } from "express";
import todoRoutes from "./routes/todoRoutes";
import userRoutes from "./routes/userRoutes";

const app: Express = express();

app.use(express.json());
app.use("/todo", todoRoutes);
app.use("/user", userRoutes);

app.get("/", (req: Request, res: Response) => {
    res.send("Hello, TypeScript Express!");
});

app.listen(3000, () => {
    console.log("Server listening at port 3000!");
});
