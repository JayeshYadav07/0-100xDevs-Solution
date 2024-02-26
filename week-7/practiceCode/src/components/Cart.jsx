import { CountContext } from "../context/CountContext";
import { useContext } from "react";
export default function Cart() {
	const { count, setCount } = useContext(CountContext);
	return (
		<div>
			<b>I am from Cart :{count}</b>
			<br />
			<br />
			<button disabled={count <= 0} onClick={() => setCount(count - 1)}>
				-1
			</button>
			{!(count >= 10) && (
				<button onClick={() => setCount(count + 1)}>+1</button>
			)}
		</div>
	);
}
