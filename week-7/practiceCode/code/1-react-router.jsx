import { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
const Dashboard = lazy(() => import("./pages/Dashboard"));
const Home = lazy(() => import("./pages/Home"));
function App() {
	return (
		<>
			<BrowserRouter>
				<Appbar />
				<Routes>
					<Route
						path="/"
						element={
							<Suspense fallback="loading.................................">
								<Home />
							</Suspense>
						}
					></Route>
					<Route
						path="/dashboard"
						element={
							<Suspense fallback="loading.................................">
								<Dashboard />
							</Suspense>
						}
					></Route>
				</Routes>
			</BrowserRouter>
		</>
	);
}
function Appbar() {
	const navigate = useNavigate();
	return (
		<nav>
			<button
				onClick={() => {
					navigate("/");
				}}
			>
				Home
			</button>
			<button
				onClick={() => {
					navigate("/dashboard");
				}}
			>
				Dashboard
			</button>
		</nav>
	);
}
export default App;
