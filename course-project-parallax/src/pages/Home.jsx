import { useState, useEffect } from "react";
import Fairytales from "../fairytale-data.json";

function Home() {
	const [randomFairytales, setRandomFairytales] = useState([]);
	const [searchResults, setSearchResults] = useState(null);
	useEffect(() => {
		const handleSearchResults = (event) => {
			setSearchResults(event.detail);
		};

		window.addEventListener("searchResultsUpdated", handleSearchResults);

		return () => {
			window.removeEventListener("searchResultsUpdated", handleSearchResults);
		};
	}, []);
	useEffect(() => {
		const getRandomFairytales = () => {
			const fairytalesCopy = [...Fairytales];
			const shuffled = fairytalesCopy.sort(() => 0.5 - Math.random());
			return shuffled.slice(0, 4);
		};
		setRandomFairytales(getRandomFairytales());
	}, []); //Empty dependency because it was running a lot and wasn't stopping
	const handleButtonClick = (link) => {
		if (link) {
			window.location.href = link;
		}
	};
	// Determine which fairytales to display
	const fairytalesToDisplay = searchResults || randomFairytales;
	// Determine which title to show
	const titleText = searchResults ? "SEARCH RESULTS" : "IN THE SPOTLIGHT";
	return (
		<>
			<div className="hero-title">
				<h1>{titleText}</h1>

				<div className="fairy-tales-wrapper">
					<div className="fairy-tales-grid">
						{fairytalesToDisplay.map((fairytale) => {
							return (
								<div className="fairy-tale" key={fairytale.id}>
									<img src={fairytale.imgThumbnail} alt="" />
									<div className="fairy-tale-text">
										<h2>{fairytale.fairytale}</h2>
										<p>{fairytale.nameStudent}</p>
										<button className="fairy-tale-button" onClick={() => handleButtonClick(fairytale.fairytaleLink)}>
											i
										</button>
									</div>
								</div>
							);
						})}
					</div>
				</div>
				<div className="projects-btn">
					<a href="#/projects">
						<button className="projects-button">ALL PROJECTS</button>
					</a>
				</div>
			</div>
		</>
	);
}
export default Home;
