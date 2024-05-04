import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

// Create
async function insertUser(
    username: string,
    password: string,
    firstName: string,
    lastName: string
) {
    const res = await prisma.user.create({
        data: {
            email: username,
            password,
            fname: firstName,
            lname: lastName,
        },
        select: {
            id: true,
            email: true,
        },
    });
    console.log(res);
}

interface UpdateParams {
    fname: string;
    lname: string;
}

// Update
async function updateUserName(id: number, { fname, lname }: UpdateParams) {
    const res = await prisma.user.update({
        where: {
            id,
        },
        data: {
            fname,
            lname,
        },
        select: {
            id: true,
            email: true,
            password: true,
            fname: true,
            lname: true,
        },
    });
    console.log(res);
}

// Read
async function getUser(username: string) {
    const res = await prisma.user.findFirst({
        where: {
            email: username,
        },
    });
    console.log(res);
}

// Delete
async function deleteUser(username: string) {
    const res = await prisma.user.delete({
        where: {
            email: username,
        },
    });
    console.log(res);
}

async function createTodo(userId: number, title: string, description: string) {
    const res = await prisma.todo.create({
        data: {
            userId,
            title,
            description,
        },
    });
    console.log(res);
}

async function getTodos(userId: number) {
    const todos = await prisma.todo.findMany({
        where: {
            userId: userId,
        },
    });
    console.log(todos);
}

async function getTodosAndUserDetails(userId: number) {
    const res = await prisma.user.findFirst({
        include: {
            todos: true, // Include the related todos
        },
        where: {
            id: userId,
        },
    });
    console.log(res);
}

// insertUser("jay@gmail.com", "123", "Jay", "Yadav");
// updateUserName(1, { fname: "Aman", lname: "Kumar" });
// getUser("jay@gmail.com");
// deleteUser("jay@gmail.com");
// createTodo(3, "go to gym", "Back day , 10 set of pull ups");
// createTodo(3, "github", "prisma code push to github at 8pm");
// getTodos(3);
getTodosAndUserDetails(3);
