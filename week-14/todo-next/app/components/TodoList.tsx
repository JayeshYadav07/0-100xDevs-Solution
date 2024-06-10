import { mutate } from "swr";
import { deleteTodo } from "../action/todo";

export default function TodoList({ id, name }: TodoProps) {
    async function handleClick() {
        try {
            const data = await deleteTodo(id!);
            if (data.success) {
                mutate("/api/todos");
            } else {
                console.error("Failed to add todo");
            }
        } catch (error) {
            console.error("Error adding todo:", error);
        }
    }

    return (
        <div className="p-4 bg-white shadow rounded-md flex flex-col items-start space-y-4 my-2">
            <h2 className="text-l font-semibold">{name}</h2>
            <div className="flex space-x-2">
                <button
                    onClick={handleClick}
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
                >
                    Delete
                </button>
            </div>
        </div>
    );
}
