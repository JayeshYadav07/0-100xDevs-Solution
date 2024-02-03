/* eslint-disable react/prop-types */
import { useState } from "react";
import axios from "axios";
export function Input({ fetchData }) {
	const [input, setInput] = useState({});
	function handleChange(e) {
		const name = e.target.name;
		const value = e.target.value;
		setInput({ ...input, [name]: value });
	}
	function addTodo() {
		const url = "http://localhost:8080/todo";
		axios.post(url, input).then(() => {
			fetchData();
		});
	}
	return (
		<>
			<input
				type="text"
				placeholder="title"
				name="title"
				onChange={handleChange}
			/>
			<input
				type="text"
				placeholder="Description"
				name="desc"
				onChange={handleChange}
			/>
			<button onClick={addTodo}>Add</button>
		</>
	);
}
