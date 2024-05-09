import { Request, Response } from "express";

export function welcome(req: Request, res: Response) {
    res.send("Welcome to Survey API!");
}

export default {
    welcome,
};
