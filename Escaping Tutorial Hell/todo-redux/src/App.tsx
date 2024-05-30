import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo } from "./actions/todoAction";
import { v4 as uuidv4 } from "uuid";
import { RootState } from "./reducers/rootReducer";
import { Todo } from "./types/todoTypes";
import { useState } from "react";
function App() {
    const [input, setInput] = useState({
        id: uuidv4(),
        name: "",
    });
    const dispatch = useDispatch();
    const todo = useSelector((state: RootState) => state.todo.todo);
    function handleClick() {
        dispatch(addTodo({ id: input.id, name: input.name }));
        setInput({ id: uuidv4(), name: "" });
    }
    return (
        <>
            <div>
                <input
                    type="text"
                    placeholder="Enter Your TODO"
                    value={input.name}
                    onChange={(e) =>
                        setInput({ ...input, name: e.target.value })
                    }
                />
                <button onClick={handleClick}>Add</button>
            </div>
            <TodoContainer todo={todo} />
        </>
    );
}

function TodoContainer({ todo }: { todo: Todo[] }) {
    const dispatch = useDispatch();
    function handleDelete(id: string) {
        dispatch(deleteTodo(id));
    }
    return (
        <ul>
            {todo.map((item) => {
                return (
                    <li key={uuidv4()}>
                        {item.name}
                        <input
                            type="checkbox"
                            name={item.id}
                            id={item.id}
                            onChange={() => handleDelete(item.id)}
                        />
                    </li>
                );
            })}
        </ul>
    );
}
export default App;
