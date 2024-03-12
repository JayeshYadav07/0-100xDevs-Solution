# OTP authentication frontend in react

A single page application , having two pages. [Enter number and verify otp]

Additionally, we can use lazy loading.

---

### App.jsx

```javascript
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage.jsx";
import VerifyPage from "./pages/VerifyPage.jsx";
export default function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" Component={LandingPage} />
				<Route path="/otp" Component={VerifyPage} />
			</Routes>
		</BrowserRouter>
	);
}
```

### LandingPage

```javascript
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
```

### VerifyPage

```javascript
import { useEffect, useRef, useState } from "react";

export default function VerifyPage() {
	const [otp, setOtp] = useState(["", "", "", ""]);
	const refs = [useRef(), useRef(), useRef(), useRef()];

	useEffect(() => {
		// this will call when component was mounted
		refs[0].current.focus();
	}, []);

	const handleChange = (e, index) => {
		if (e.target.value.length <= 1) {
			let newOtp = [...otp];
			newOtp[index] = e.target.value;
			setOtp(newOtp);
		}

		if (e.target.value !== "" && index < 3) {
			refs[index + 1].current.focus();
		}
	};

	const handleBackspace = (e, index) => {
		if (e.key == "Backspace" && e.target.value == "" && index > 0) {
			refs[index - 1].current.focus();
		}
	};

	const handleSubmit = () => {
		alert(`Your OTP : ${otp.join("")}`);
	};
	return (
		<div className="h-screen w-screen flex flex-col justify-center items-center bg-gray-300">
			<h1 className="mb-5 text-2xl text-black">Enter OTP</h1>
			<div>
				{otp.map((item, index) => (
					<input
						key={index}
						type="number"
						id={index}
						maxLength={1}
						value={item}
						onChange={(e) => {
							handleChange(e, index);
						}}
						onKeyDown={(e) => {
							handleBackspace(e, index);
						}}
						className="border border-black m-2 w-20 h-20 text-center rounded-md"
						required={true}
						ref={refs[index]}
					/>
				))}
			</div>
			<button
				className="text-lg text-white bg-blue-700 pt-2 pb-2 pl-4 pr-4 m-4 rounded-xl hover:text-xl"
				onClick={handleSubmit}
			>
				Enter
			</button>
		</div>
	);
}
```
