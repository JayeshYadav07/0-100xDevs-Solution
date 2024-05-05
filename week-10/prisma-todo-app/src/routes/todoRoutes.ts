import { Router, Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { z } from "zod";

const prisma = new PrismaClient();
const router = Router();

router.get("/", (req: Request, res: Response) => {
    res.send("Todo API");
});

const getTodoSchema = z.number();
router.get("/get/:id", async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);

    const validate = getTodoSchema.safeParse(id);
    if (!validate.success) return res.status(400).send({ msg: validate.error });

    const todos = await prisma.todo.findMany({
        where: {
            userId: id,
        },
    });
    res.json(todos);
});

const addTodoSchema = z.object({
    userId: z.number(),
    title: z.string(),
    description: z.string().optional(),
    done: z.boolean().optional(),
});
router.post("/add", async (req: Request, res: Response) => {
    const { title, description, done, userId } = req.body;
    const validate = addTodoSchema.safeParse(req.body);
    if (!validate.success) return res.status(400).send({ msg: validate.error });

    const todo = await prisma.todo.create({
        data: {
            title,
            description,
            done,
            userId,
        },
    });
    res.json(todo);
});
export default router;
