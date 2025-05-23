import Fairytales from "../fairytale-data.json";
import { useState, useEffect } from "react";
function Projects() {
	const [searchResults, setSearchResults] = useState(null);
	useEffect(() => {
		const handleSearchResults = (event) => {
			setSearchResults(event.detail);
		};

		window.addEventListener("searchResultsUpdated", handleSearchResults);

		// Check if there are already search results (for when navigating between pages)
		if (window.searchResults) {
			setSearchResults(window.searchResults);
		}

		return () => {
			window.removeEventListener("searchResultsUpdated", handleSearchResults);
		};
	}, []);
	const handleButtonClick = (link) => {
		if (link) {
			window.location.href = link;
		}
	};
	// Determine which fairytales to display
	const fairytalesToDisplay = searchResults || Fairytales;
	// Determine which title to show
	const titleText = searchResults ? "SEARCH RESULTS" : "PROJECTS";
	return (
		<>
			<div className="hero-title">
				<h1>{titleText}</h1>
			</div>
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
		</>
	);
}

export default Projects;
