import FairydustCursor from "../components/FairydustCursor.jsx";
import HeaderParallax from "../components/HeaderParallax.jsx";

function FirstpageParallax() {
	return (
		<>
			<div className="fairy-cursor">
				<div className="parallax">
					<FairydustCursor />
					<HeaderParallax />
					<div className="main-title">
						<h1>Discover the magic world of Peter Pan</h1>
					</div>
					<div className="parallax-button">
						<a href="/parallax">
							<button className="parallax-btn">Discover now</button>
						</a>
					</div>
				</div>
			</div>
		</>
	);
}
export default FirstpageParallax;
