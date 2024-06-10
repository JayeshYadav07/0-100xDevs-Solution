"use server";
import db from "@/app/db";

export const addTodo = async (name: string) => {
    try {
        const todo = await db.todo.create({
            data: {
                name,
            },
        });
        return {
            success: true,
            msg: "Todo added successfully!",
        };
    } catch (error) {
        return {
            success: false,
        };
    }
};

export const deleteTodo = async (id: number) => {
    try {
        const todo = await db.todo.delete({
            where: {
                id,
            },
        });
        return {
            success: true,
            msg: "Todo deleted successfully!",
        };
    } catch (error) {
        return {
            success: false,
        };
    }
};
