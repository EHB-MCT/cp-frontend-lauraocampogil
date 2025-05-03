import { useRef } from "react";
import FairydustCursor from "../components/FairydustCursor.jsx";
import HeaderParallax from "../components/HeaderParallax.jsx";

function Parallax() {
	return (
		<>
			<div className="fairy-cursor">
				<FairydustCursor />
				<HeaderParallax />
				<main className="parallax-container"></main>
			</div>
		</>
	);
}

export default Parallax;
