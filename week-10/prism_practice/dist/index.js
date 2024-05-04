"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
// Create
function insertUser(username, password, firstName, lastName) {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield prisma.user.create({
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
    });
}
// Update
function updateUserName(id_1, _a) {
    return __awaiter(this, arguments, void 0, function* (id, { fname, lname }) {
        const res = yield prisma.user.update({
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
    });
}
// Read
function getUser(username) {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield prisma.user.findFirst({
            where: {
                email: username,
            },
        });
        console.log(res);
    });
}
// Delete
function deleteUser(username) {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield prisma.user.delete({
            where: {
                email: username,
            },
        });
        console.log(res);
    });
}
function createTodo(userId, title, description) {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield prisma.todo.create({
            data: {
                userId,
                title,
                description,
            },
        });
        console.log(res);
    });
}
function getTodos(userId) {
    return __awaiter(this, void 0, void 0, function* () {
        const todos = yield prisma.todo.findMany({
            where: {
                userId: userId,
            },
        });
        console.log(todos);
    });
}
function getTodosAndUserDetails(userId) {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield prisma.user.findFirst({
            include: {
                todos: true, // Include the related todos
            },
            where: {
                id: userId,
            },
        });
        console.log(res);
    });
}
// insertUser("jay@gmail.com", "123", "Jay", "Yadav");
// updateUserName(1, { fname: "Aman", lname: "Kumar" });
// getUser("jay@gmail.com");
// deleteUser("jay@gmail.com");
// createTodo(3, "go to gym", "Back day , 10 set of pull ups");
// createTodo(3, "github", "prisma code push to github at 8pm");
// getTodos(3);
getTodosAndUserDetails(3);
