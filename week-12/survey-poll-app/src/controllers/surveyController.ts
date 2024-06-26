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

type Question = {
    text: string;
    options: Option[];
};
type Option = {
    text: string;
};
export async function create(req: Request, res: Response) {
    let questionsData: any;
    let optionsData: any;

    try {
        const validate = createSchema.safeParse(req.body);
        if (!validate.success) {
            return res.status(422).json({ msg: validate.error });
        }

        await prisma.$transaction(async (prisma) => {
            const survey = await prisma.surveys.create({
                data: {
                    title: req.body.title,
                },
            });

            const questionsPromises = req.body.questions.map(
                (question: Question) => {
                    return prisma.questions.create({
                        data: {
                            text: question.text,
                            surveyId: survey.id,
                        },
                    });
                }
            );
            questionsData = await Promise.all(questionsPromises);

            const optionsPromises = req.body.questions.flatMap(
                (question: Question, index: number) => {
                    return question.options.map((option: Option) => {
                        return prisma.options.create({
                            data: {
                                text: option.text,
                                questionId: questionsData[index].id,
                            },
                        });
                    });
                }
            );
            optionsData = await Promise.all(optionsPromises);
        });

        res.status(201).json({
            msg: "Survey Created",
            questionsData,
            optionsData,
        });
    } catch (error) {
        console.error("Error creating survey:", error);
        res.status(500).json({ error: "Internal Server Error" });
    } finally {
        await prisma.$disconnect(); // Disconnect from Prisma client
    }
}
export function update(req: Request, res: Response) {
    res.send("Survey Updated!");
}
export async function remove(req: Request, res: Response) {
    try {
        const id = parseInt(req.params.id);
        const survey = await prisma.surveys.delete({
            where: {
                id,
            },
        });
        res.send({ msg: "Survey Removed!", survey });
    } catch (error) {
        console.error("Error creating survey:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
}

export default {
    welcome,
    getAll,
    get,
    create,
    update,
    remove,
};
