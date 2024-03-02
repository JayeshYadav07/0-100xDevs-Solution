import { useState } from "react";

export default function App() {
	const [wordLength, setWordLength] = useState("");
	const [para, setPara] = useState("");
	function handleClick() {
		let result = "";
		let words = ["i", "am", "tony", "stark", "from", "marvel"];
		for (let i = 0; i < wordLength; i++) {
			result += words[Math.floor(Math.random() * words.length)] + " ";
		}
		setPara(result);
	}
	function handleChange(e) {
		setWordLength(e.target.value);
	}
	return (
		<div>
			<h1 className="text-center text-3xl mt-5">Para Generator</h1>
			<div className="flex justify-center p-10">
				<input
					type="text"
					placeholder="Enter number of words"
					className="w-96 p-2 mr-2 border rounded"
					value={wordLength}
					onChange={handleChange}
				/>
				<button
					onClick={handleClick}
					className="border bg-black text-white rounded p-2"
				>
					Generate
				</button>
			</div>
			<div className="p-10">{para}</div>
		</div>
	);
}
