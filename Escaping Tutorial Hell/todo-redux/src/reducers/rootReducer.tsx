import { TodoState } from "../types/todoTypes";
import todoReducer from "./todoReducer";
import { combineReducers } from "redux";

export interface RootState {
    todo: TodoState;
}
const rootReducer = combineReducers({
    todo: todoReducer,
});

export default rootReducer;
