## App.js

```js
// import { Component } from "react";

// export default class App extends Component {
//     constructor(props) {
//         super(props);
//         this.state = { count: 0 };
//     }
//     incrementCount = () => {
//         this.setState({ count: this.state.count + 1 });
//     };
//     componentDidMount() {
//         console.log("Mount");
//     }
//     componentDidUpdate() {
//         console.log("Update");
//     }
//     componentWillUnmount() {
//         console.log("Unmount");
//     }
//     render() {
//         return (
//             <div>
//                 Count : {this.state.count}
//                 <button onClick={this.incrementCount}>Increment</button>
//             </div>
//         );
//     }
// }

import { useState, useEffect } from "react";

function useFetch(time) {
    const [render, setRender] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setRender(false);
        }, time * 1000);
        return () => {};
    }, [time]);
    return render;
}
// export default function App() {
//     const render = useFetch(10);
//     return <div>{render && <h1>Hello</h1>}</div>;
// }

function useIsOnline() {
    const [online, setOnline] = useState(window.navigator.onLine);
    useEffect(() => {
        window.addEventListener("online", () => {
            setOnline(true);
        });
        window.addEventListener("offline", () => {
            setOnline(false);
        });

        return () => {
            window.removeEventListener("online");
            window.removeEventListener("offline");
        };
    }, []);
    return online;
}

// export default function App() {
//     const online = useIsOnline();
//     return <div>{online ? <h1>Online</h1> : <h1>Offline</h1>}</div>;
// }

function useInterval(fn, timeout) {
    useEffect(() => {
        let id = setInterval(() => {
            fn();
        }, timeout);

        return () => {
            clearInterval(id);
        };
    }, [fn, timeout]);
}

// export default function App() {
//     const [count, setCount] = useState(0);
//     useInterval(() => {
//         setCount((c) => c + 1);
//     }, 1000);
//     return <div>{count}</div>;
// }

// delay the backend call
function useDebounce(search, timeout) {
    const [debouncedValue, setDebouncedValue] = useState(search);
    useEffect(() => {
        // call backend api with search value
        let id = setTimeout(() => {
            setDebouncedValue(search);
        }, timeout);
        return () => {
            clearTimeout(id);
        };
    }, [search, timeout]);
    return debouncedValue;
}
export default function App() {
    const [search, setSearch] = useState("");
    const debounceValue = useDebounce(search, 200);
    return (
        <div>
            <input
                type="text"
                onChange={(e) => setSearch(e.target.value)}
                value={search}
            />
            <p>{debounceValue}</p>
        </div>
    );
}
```
