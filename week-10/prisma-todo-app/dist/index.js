"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const todoRoutes_1 = __importDefault(require("./routes/todoRoutes"));
const userRoutes_1 = __importDefault(require("./routes/userRoutes"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use("/todo", todoRoutes_1.default);
app.use("/user", userRoutes_1.default);
app.get("/", (req, res) => {
    res.send("Hello, TypeScript Express!");
});
app.listen(3000, () => {
    console.log("Server listening at port 3000!");
});
