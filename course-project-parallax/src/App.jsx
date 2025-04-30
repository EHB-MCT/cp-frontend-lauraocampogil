import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout.jsx";
import Layout2 from "./pages/Layout2.jsx";
import Home from "./pages/Home.jsx";
import Projects from "./pages/Projects.jsx";
import MakingOf from "./pages/MakingOf.jsx";
import Parallax from "./pages/Parallax.jsx";

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Layout />}>
						<Route index element={<Home />} />
						<Route path="projects" element={<Projects />} />
						<Route path="makingof" element={<MakingOf />} />
					</Route>
					<Route path="/parallax" element={<Layout2 />}>
						<Route index element={<Parallax />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
