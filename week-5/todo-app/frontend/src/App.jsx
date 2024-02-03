import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import { Input } from "./components/Input";
import { ShowTodo } from "./components/ShowTodo";

function App() {
	const [data, setData] = useState([]);
	useEffect(() => {
		fetchData();
	}, []);

	function fetchData() {
		const url = "http://localhost:8080/todos";
		axios.get(url).then((result) => {
			setData(result.data);
		});
	}

	return (
		<>
			<Input fetchData={fetchData} />
			<ShowTodo todos={data} />
		</>
	);
}

export default App;
