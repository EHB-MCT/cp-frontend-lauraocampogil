import { useState, useEffect } from "react";
import Fairytales from "../fairytale-data.json";

function Home() {
	const [randomFairytales, setRandomFairytales] = useState([]);
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
	return (
		<>
			<div className="hero-title">
				<h1>IN THE SPOTLIGHT</h1>

				<div className="fairy-tales-wrapper">
					<div className="fairy-tales-grid">
						{randomFairytales.map((fairytale) => {
							return (
								<div className="fairy-tale" key={fairytale.id}>
									<img src={fairytale.image} alt="" />
									<div className="fairy-tale-text">
										<h2>{fairytale.title}</h2>
										<p>{fairytale.name}</p>
										<button className="fairy-tale-button" onClick={() => handleButtonClick(fairytale.link)}>
											i
										</button>
									</div>
								</div>
							);
						})}
					</div>
				</div>
				<div className="projects-btn">
					<a href="/projects">
						<button className="projects-button">ALL PROJECTS</button>
					</a>
				</div>
			</div>
		</>
	);
}
export default Home;
