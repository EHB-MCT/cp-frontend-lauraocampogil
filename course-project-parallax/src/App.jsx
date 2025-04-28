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

				{Fairytales.map((fairytale) => {
					return (
						<div className="fairy-tales-wrapper">
							<h1>IN THE SPOTLIGHT</h1>
							<div className="fairy-tales-grid">
								<div className="fairy-tale">
									<img src={fairytale.image} />
									<div className="fairy-tale-text">
										<h2>{fairytale.title}</h2>
										<p>{fairytale.name}</p>
										<button className="fairy-tale-button">i</button>
									</div>
								</div>
							</div>
						</div>
					);
				})}
				<Footer />
			</div>
		</>
	);
}

export default App;
