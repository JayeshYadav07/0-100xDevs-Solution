import { useState } from "react";
import { Link } from "react-router-dom";
export default function LandingPage() {
	const [number, setNumber] = useState("");
	const handleSubmit = () => {
		console.log(number);
	};
	const handleChange = (e) => {
		if (e.target.value.toString().length <= 10) setNumber(e.target.value);
	};
	return (
		<div className="h-screen w-screen flex flex-col justify-center items-center bg-gray-300">
			<h1 className="mb-5 text-2xl text-black">Login via OTP</h1>
			<div>
				<input
					type="number"
					id="phone"
					value={number}
					maxLength={10}
					className="border border-black text-xl m-2 h-10 p-2 text-center rounded-md"
					required={true}
					onChange={handleChange}
				/>
			</div>
			<button
				className="text-lg text-white bg-blue-700 pt-2 pb-2 pl-4 pr-4 m-4 rounded-xl hover:text-xl"
				onClick={handleSubmit}
			>
				<Link to="/otp">Get OTP</Link>
			</button>
		</div>
	);
}

// i have to fix the number to length 10
