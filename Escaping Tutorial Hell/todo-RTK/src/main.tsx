import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import store from "./store.tsx";
import { Provider } from "react-redux";

// connecting store to react
ReactDOM.createRoot(document.getElementById("root")!).render(
    <Provider store={store}>
        <App />
    </Provider>
);
