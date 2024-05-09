import { Request, Response } from "express";

function welcome(req: Request, res: Response) {
    res.send("Welcome to User API!");
}

export default {
    welcome,
};
