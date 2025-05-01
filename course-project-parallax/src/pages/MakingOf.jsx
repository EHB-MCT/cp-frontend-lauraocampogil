import Banner from "../assets/Images-web/Banner-peterpan.png";
function MakingOf() {
	return (
		<>
			<div className="makingof-container">
				<div className="hero-title">
					<h1>Making-Of - Peter Pan</h1>
				</div>
				<div className="banner">
					<img src={Banner} />
				</div>
				<div className="explainvideo-container">
					<div className="video-section">
						<h2>Explainer Video</h2>
					</div>
					<div className="description-container">
						<h2>Description</h2>
					</div>
					<div className="visitwebsite-btn">
						<a href="/parallax">
							<button className="visitwebsite-button">Visit Website</button>
						</a>
					</div>
				</div>
			</div>
		</>
	);
}

export default MakingOf;
