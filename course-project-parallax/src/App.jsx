import { useState } from "react";
import "./App.css";
import "./index.css";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import FairydustCursor from "./components/FairydustCursor.jsx";
import Fairytales from "./fairytale-data.json";

function App() {
	return (
		<>
			<div className="fairy-cursor">
				<FairydustCursor />
				<Header />
				<Footer />
				{Fairytales.map((fairytale) => {
					return (
						<div className="fairy-tale">
							<img src={fairytale.image} />
							<div className="fairy-tale-text">
								<h2>{fairytale.title}</h2>
								<p>{fairytale.name}</p>
							</div>
						</div>
					);
				})}
			</div>
		</>
	);
}

export default App;
