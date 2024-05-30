import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import rootReducer from "./reducers/rootReducer.tsx";
import { createStore } from "redux";
import { Provider } from "react-redux";

const store = createStore(rootReducer);

ReactDOM.createRoot(document.getElementById("root")!).render(
    <Provider store={store}>
        <App />
    </Provider>
);
