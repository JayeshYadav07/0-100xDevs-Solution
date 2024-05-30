import { Todo } from "../types/todoTypes";
export function addTodo(todo: Todo) {
    return {
        type: "ADD_TODO",
        payload: todo,
    };
}

export function deleteTodo(id: string) {
    return {
        type: "DELETE_TODO",
        payload: id,
    };
}
