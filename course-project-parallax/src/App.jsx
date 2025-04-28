import { useState } from "react";
import "./App.css";
import "./index.css";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import FairydustCursor from "./components/FairydustCursor.jsx";

function App() {
	return (
		<>
			<FairydustCursor />
			<Header />
			<Footer />
		</>
	);
}

export default App;
