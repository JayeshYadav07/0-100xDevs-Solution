"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const surveyRoutes_1 = __importDefault(require("./routes/surveyRoutes"));
const userRoutes_1 = __importDefault(require("./routes/userRoutes"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use("/user", userRoutes_1.default);
app.use("/survey", surveyRoutes_1.default);
app.get("/", (req, res) => {
    res.send("Welcome to survey  application API!");
});
app.listen(8000, () => {
    console.log("Listening port at 8000!");
});
