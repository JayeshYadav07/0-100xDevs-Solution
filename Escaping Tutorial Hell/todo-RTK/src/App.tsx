import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, incrementByN } from "./slice/todoSlice";
import { RootState } from "./store";
function App() {
    const dispatch = useDispatch();
    const { count } = useSelector((state: RootState) => state.todo);
    return (
        <>
            <div>{count}</div>
            <button onClick={() => dispatch(increment())}>Increment</button>
            <button onClick={() => dispatch(decrement())}>Decrement</button>
            <button onClick={() => dispatch(incrementByN(2))}>
                Increment by 2
            </button>
        </>
    );
}

export default App;
