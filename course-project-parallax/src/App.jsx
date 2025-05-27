import "./index.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout.jsx";
import Home from "./pages/Home.jsx";
import Projects from "./pages/Projects.jsx";
import MakingOf from "./pages/MakingOf.jsx";
import Parallax from "./pages/Parallax.jsx";
import FirstpageParallax from "./components/FirstpageParallax.jsx";

function App() {
	return (
		<HashRouter>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Home />} />
					<Route path="projects" element={<Projects />} />
					<Route path="makingof" element={<MakingOf />} />
				</Route>
				<Route path="/firstpageparallax" element={<FirstpageParallax />} />
				<Route path="/parallax" element={<Parallax />} />
			</Routes>
		</HashRouter>
	);
}

export default App;
