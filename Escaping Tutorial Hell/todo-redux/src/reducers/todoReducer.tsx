import { Todo } from "../types/todoTypes";

const initialState = {
    todo: [],
};
const todoReducer = (
    state = initialState,
    action: { type: string; payload?: object | number }
) => {
    switch (action.type) {
        case "ADD_TODO":
            return { ...state, todo: [...state.todo, action.payload] };
        case "DELETE_TODO":
            return {
                ...state,
                todo: state.todo.filter(
                    (item: Todo) => item.id !== action.payload
                ),
            };
        default:
            return state;
    }
};

export default todoReducer;
