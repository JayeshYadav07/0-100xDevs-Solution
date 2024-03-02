# Solution

```jsx
import { useRef } from "react";

export default function App() {
	const bg = useRef();
	function handleClick(e) {
		bg.current.className = "";
		bg.current.classList.add("h-screen");
		bg.current.classList.add(e.target.className);
	}
	return (
		<div ref={bg} className="h-screen">
			<div className="absolute bottom-10 w-screen flex justify-center gap-4">
				<button className="bg-red-400" onClick={handleClick}>
					RED
				</button>
				<button className="bg-yellow-400" onClick={handleClick}>
					YELLOW
				</button>
				<button className="bg-green-400" onClick={handleClick}>
					GREEN
				</button>
				<button className="bg-blue-400" onClick={handleClick}>
					BLUE
				</button>
			</div>
		</div>
	);
}
```
