"use client";
import { useState } from "react";
import { addTodo } from "../action/todo";
import Todo from "../components/Todo";
import { mutate } from "swr";
export default function Page() {
    const [todo, setTodo] = useState("");
    async function handleClick() {
        try {
            const data = await addTodo(todo);
            if (data.success) {
                setTodo("");
                mutate("/api/todos");
            } else {
                console.error("Failed to add todo");
            }
        } catch (error) {
            console.error("Error adding todo:", error);
        }
    }
    return (
        <div className="flex justify-center mt-5">
            <div>
                <h1 className="text-2xl font-bold my-2">Todo App</h1>
                <div>
                    <input
                        value={todo}
                        onChange={(e) => setTodo(e.target.value)}
                        type="text"
                        className="border border-gray-300 rounded text-sm outline-none py-2 px-4 mr-2"
                    />
                    <button
                        onClick={handleClick}
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    >
                        Add
                    </button>
                </div>
                <div>
                    <Todo />
                </div>
            </div>
        </div>
    );
}
