import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import z from "zod";

const prisma = new PrismaClient();

export function welcome(req: Request, res: Response) {
    res.send("Welcome to Survey API!");
}
export function getAll(req: Request, res: Response) {
    res.send("All Survey get successfully!");
}
export function get(req: Request, res: Response) {
    res.send("Survey get successfully!");
}

// create a survey

const createSchema = z.object({
    title: z.string(),
    questions: z.array(
        z.object({
            text: z.string(),
            options: z.array(
                z.object({
                    text: z.string(),
                })
            ),
        })
    ),
});

type question = {
    text: string;
    options: option[];
};
type option = {
    text: string;
};
export async function create(req: Request, res: Response) {
    const validate = createSchema.safeParse(req.body);
    if (!validate.success) {
        return res.status(422).json({ msg: validate.error });
    }
    const survey = await prisma.surveys.create({
        data: {
            title: req.body.title,
        },
    });
    req.body.questions.forEach(async (question: question) => {
        const qtn = await prisma.questions.create({
            data: {
                text: question.text,
                surveyId: survey.id,
            },
        });
        question.options.forEach(async (option: option) => {
            const opt = await prisma.options.create({
                data: {
                    text: option.text,
                    questionId: qtn.id,
                },
            });
        });
    });
    res.send("Survey Created");
}
export function update(req: Request, res: Response) {
    res.send("Survey Updated!");
}
export function remove(req: Request, res: Response) {
    res.send("Survey Removed!");
}

export default {
    welcome,
    getAll,
    get,
    create,
    update,
    remove,
};
