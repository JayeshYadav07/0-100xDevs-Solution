import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Send from "./pages/Send";
import Dashboard from "./pages/Dashboard";
import NoPage from "./pages/NoPage";
export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path="/"
                    element={
                        <h1 className=" text-center font-bold">Welcome!</h1>
                    }
                />
                <Route path="Signin" element={<Signin />} />
                <Route path="signup" element={<Signup />} />
                <Route path="dashboard" element={<Dashboard />} />
                <Route path="send" element={<Send />} />
                <Route path="*" element={<NoPage />} />
            </Routes>
        </BrowserRouter>
    );
}
