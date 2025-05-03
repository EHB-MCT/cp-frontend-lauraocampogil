import { useRef } from "react";
import FairydustCursor from "../components/FairydustCursor.jsx";
import HeaderParallax from "../components/HeaderParallax.jsx";
import "../styles/parallax.css";

function Parallax() {
	const containerRef = useRef(null);
	const { scrollYProgress } = useScroll();

	return (
		<>
			<div className="fairy-cursor">
				<FairydustCursor />
				<HeaderParallax />
				<main className="parallax-container" ref={containerRef}>
					<Scene1 scrollYProgress={scrollYProgress} />
					<Scene2 scrollYProgress={scrollYProgress} />
					<Scene3 scrollYProgress={scrollYProgress} />
				</main>
			</div>
		</>
	);
}

export default Parallax;
