export type Todo = {
    id: string;
    name: string;
    isCompleted?: false;
};
export interface TodoState {
    todo: Todo[];
}
