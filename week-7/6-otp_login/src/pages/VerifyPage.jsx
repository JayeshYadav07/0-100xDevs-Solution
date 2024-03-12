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
