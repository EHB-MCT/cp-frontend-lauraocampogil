import Fairytales from "../fairytale-data.json";
function Projects() {
	const handleButtonClick = (link) => {
		if (link) {
			window.location.href = link;
		}
	};
	return (
		<>
			<div className="hero-title">
				<h1>PROJECTS</h1>
			</div>
			<div className="fairy-tales-wrapper">
				<div className="fairy-tales-grid">
					{Fairytales.map((fairytale) => {
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
		</>
	);
}

export default Projects;
