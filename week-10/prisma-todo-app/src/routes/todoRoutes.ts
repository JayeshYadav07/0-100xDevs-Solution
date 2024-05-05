import { Router, Request, Response } from "express";
import zod from "zod";

const router = Router();

router.get("/", (req: Request, res: Response) => {
    res.send("Todo API");
});

export default router;
