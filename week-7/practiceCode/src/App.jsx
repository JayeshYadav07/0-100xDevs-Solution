import { useRecoilState, useRecoilValue } from "recoil";
import {
	todoListState,
	filterState,
	inputState,
	filteredTodoList,
} from "./recoil/atom/todoListAtom";
export default function App() {
	return (
		<div>
			<FilterTodo />
			<AddTodo />
			<TodoList />
		</div>
	);
}
function FilterTodo() {
	const [filter, setFilter] = useRecoilState(filterState);
	return (
		<div>
			search :
			<input
				type="text"
				value={filter}
				onChange={(e) => setFilter(e.target.value)}
			/>
		</div>
	);
}
function TodoList() {
	const filteredList = useRecoilValue(filteredTodoList);
	return (
		<div>
			<b>Todo List</b>
			{filteredList.map((item) => (
				<div key={Math.random()}>
					<p>Title : {item.title}</p>
					<p>Description : {item.description}</p>
				</div>
			))}
		</div>
	);
}
function AddTodo() {
	const [todoList, setTodoList] = useRecoilState(todoListState);
	const [input, setInput] = useRecoilState(inputState);
	function handleInputChanges(e) {
		setInput({
			...input,
			[e.target.name]: e.target.value,
		});
	}
	function handleClick() {
		setTodoList([...todoList, input]);
	}
	return (
		<div>
			<input
				type="text"
				name="title"
				value={input.title}
				placeholder="title"
				onChange={handleInputChanges}
			/>
			<input
				type="text"
				name="description"
				value={input.description}
				placeholder="Description"
				onChange={handleInputChanges}
			/>
			<button onClick={handleClick}>Add</button>
		</div>
	);
}
// 2 boxes for title and description  -> third atom
// button to add
//filter by text  -> one atom
// list of todo  -> second atom
