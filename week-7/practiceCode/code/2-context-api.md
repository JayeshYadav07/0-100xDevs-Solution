# Context API

### App.jsx

```javascript
import { useState } from "react";
import Cart from "./components/Cart";
import { CountContext } from "./context/CountContext";
function App() {
	const [count, setCount] = useState(0);
	return (
		<>
			<p>App count : {count}</p>
			<CountContext.Provider value={{ count, setCount }}>
				<Cart />
			</CountContext.Provider>
		</>
	);
}
export default App;
```

### Cart.jsx

```javascript
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
```

### CountContext.jsx

```javascript
import { createContext } from "react";
export const CountContext = createContext("");
```
