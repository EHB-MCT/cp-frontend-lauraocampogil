import FairydustCursor from "../components/FairydustCursor.jsx";
import Sound from "../components/Sound.jsx";
import RightNav from "../components/RightNav.jsx";
function Parallax() {
	return (
		<>
			<div className="fairy-cursor">
				<div className="parallax">
					<FairydustCursor />

					<div className="music">
						<Sound />
					</div>
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

export default Parallax;
