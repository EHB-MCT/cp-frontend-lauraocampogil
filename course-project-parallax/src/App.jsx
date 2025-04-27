import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import MakingOf from "./pages/MakingOf";

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<h1>React Router Demo</h1>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Layout />}>
						<Route index element={<Home />} />
						<Route path="projects" element={<Projects />} />
						<Route path="makingof" element={<MakingOf />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
