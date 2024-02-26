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
