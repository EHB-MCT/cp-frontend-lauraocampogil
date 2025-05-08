import FairydustCursor from "../components/FairydustCursor.jsx";
import HeaderParallax from "../components/HeaderParallax.jsx";

function EndpageParallax() {
	return (
		<>
			<div className="fairy-cursor">
				<div className="parallax">
					<FairydustCursor />
					<HeaderParallax />
					<div className="main-title">
						<h1>The End</h1>
					</div>
					<div className="end-button">
						<div className="parallax1-button">
							<a href="/firstpageparallax">
								<button className="parallax-btn">Restart Story</button>
							</a>
						</div>
						<div className="parallax2-button">
							<a href="/projects">
								<button className="parallax-btn">New Stories</button>
							</a>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
export default EndpageParallax;
