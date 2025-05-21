import React from "react";
import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";
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
						<div className="video-yt">
							<LiteYouTubeEmbed id="nDM499ppEWk" title="Peter Pan Explainer Video" poster="maxresdefault" />
						</div>
					</div>
					<div className="description-section">
						<h2>Description</h2>
						<p>
							Embark on a magical journey through Peter Pan's enchanting world in this immersive parallax experience. From the Darling children's bedroom to the mysterious Neverland island, where adventure awaits at every scroll. Encounter the
							spirited Lost Boys, face Captain Hook's menacing pirates aboard the Jolly Roger, and follow Tinkerbell's cursor and magic fee through the forests and crystal lagoons. Don't forget to activate your sound for the full enchantment—the lost
							boys and Peter Pan await!
						</p>

						<div className="visitwebsite-btn">
							<a href="#/firstpageparallax">
								<button className="visitwebsite-button">Visit Website</button>
							</a>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default MakingOf;
