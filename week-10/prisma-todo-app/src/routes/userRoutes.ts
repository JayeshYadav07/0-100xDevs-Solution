import { Router, Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { z } from "zod";

const prisma = new PrismaClient();
const router = Router();

router.get("/", (req: Request, res: Response) => {
    res.send("User API");
});

const signupSchema = z.object({
    email: z.string().email(),
    password: z.string(),
    fname: z.string().optional(),
    lname: z.string().optional(),
});

router.post("/signup", async (req: Request, res: Response) => {
    const { email, password, fname, lname } = req.body;
    const validate = signupSchema.safeParse(req.body);
    if (!validate.success) return res.status(400).send({ msg: validate.error });

    try {
        const user = await prisma.user.create({
            data: {
                email,
                password,
                fname,
                lname,
            },
        });
        res.send(user);
    } catch (error) {
        console.log(error);
        res.send("Something went wrong");
    }
});

const loginSchema = z.object({
    email: z.string().email(),
    password: z.string(),
});

router.post("/login", async (req: Request, res: Response) => {
    const { email, password } = req.body;
    const validate = loginSchema.safeParse(req.body);
    if (!validate.success) return res.status(400).send({ msg: validate.error });

    try {
        const user = await prisma.user.findFirst({
            where: {
                email,
                password,
            },
        });
        if (user != undefined)
            return res.send({ msg: "Login successful!", user });
        else return res.send({ msg: "username and password does not match" });
    } catch (error) {
        console.log(error);
        res.send("Something went wrong");
    }
});

export default router;
