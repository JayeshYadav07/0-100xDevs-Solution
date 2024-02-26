### ShowTodos.jsx Component

```js
import { useRecoilValue } from "recoil";
import { todoListAtom } from "../recoil/atom/todoListAtom";

export default function ShowTodos() {
	const todoList = useRecoilValue(todoListAtom);
	return (
		<div>
			{todoList.map((todoItem) => (
				<p key={todoItem.id}>{todoItem.todo}</p>
			))}
		</div>
	);
}
```

### TodoItemCreator.jsx Component

```js
import { useState } from "react";
import { useRecoilState } from "recoil";
import { todoListAtom } from "../recoil/atom/todoListAtom";
import ShowTodos from "./ShowTodos";
export default function TodoItemCreator() {
	const [, setTodoList] = useRecoilState(todoListAtom);
	const [inputValue, setInputValue] = useState({ task: "" });
	function handleChange(e) {
		setInputValue({
			...inputValue,
			[e.target.name]: e.target.value,
		});
	}
	function handleClick() {
		setTodoList((todoList) => [
			...todoList,
			{
				id: Math.random(),
				todo: inputValue.task,
			},
		]);
	}
	return (
		<div>
			<input
				type="text"
				name="task"
				value={inputValue.task}
				onChange={handleChange}
			/>
			<button onClick={handleClick}>Add</button>
			<ShowTodos></ShowTodos>
		</div>
	);
}
```

### todoListAtom.jsx atom

```js
import { atom } from "recoil";
// creation of atom
export const todoListAtom = atom({
	key: "todoListState",
	default: [],
});
```

### App.jsx

```js
import TodoItemCreator from "./components/TodoItemCreator";
function App() {
	return (
		<>
			<h1>Todo Application</h1>
			<TodoItemCreator></TodoItemCreator>
		</>
	);
}
export default App;
```

---

[Learn More](https://www.freecodecamp.org/news/how-to-use-recoil-for-state-management-in-your-react-projects/)

---

# START OF PART 2 -> filter todo app

### Selectors

A selector represents a piece of derived state. You can think of derived state as the output of passing state to a pure function that derives a new value from the said state.

### todoListAtom.jsx

```js
import { atom, selector } from "recoil";
// creation of atom
export const todoListState = atom({
	key: "todoListState",
	default: [],
});

export const filterState = atom({
	key: "filterState",
	default: "",
});

export const inputState = atom({
	key: "inputState",
	default: {
		title: "",
		description: "",
	},
});

export const filteredTodoList = selector({
	key: "filteredTodoList",
	get: ({ get }) => {
		const todoList = get(todoListState);
		const filter = get(filterState);
		return todoList.filter(
			(item) =>
				item.title.toLowerCase().includes(filter.toLowerCase()) ||
				item.description.toLowerCase().includes(filter.toLowerCase())
		);
	},
});
```

### App.jsx

```js
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
```

[Learn More About Selectors](https://recoiljs.org/docs/basic-tutorial/selectors)
