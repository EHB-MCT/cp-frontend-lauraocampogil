import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SearchProvider } from "./components/SearchContext.jsx";
import Layout from "./pages/Layout.jsx";
import Home from "./pages/Home.jsx";
import Projects from "./pages/Projects.jsx";
import MakingOf from "./pages/MakingOf.jsx";

function App() {
	return (
		<>
			<SearchProvider>
				<BrowserRouter>
					<Routes>
						<Route path="/" element={<Layout />}>
							<Route index element={<Home />} />
							<Route path="projects" element={<Projects />} />
							<Route path="makingof" element={<MakingOf />} />
						</Route>
					</Routes>
				</BrowserRouter>
			</SearchProvider>
		</>
	);
}

export default App;
