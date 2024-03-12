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
