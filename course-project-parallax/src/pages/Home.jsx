import Fairytales from "../fairytale-data.json";

function Home() {
	return (
		<>
			<div className="hero-title">
				<h1>IN THE SPOTLIGHT</h1>

				<div className="fairy-tales-wrapper">
					<div className="fairy-tales-grid">
						{Fairytales.map((fairytale) => {
							return (
								<div className="fairy-tale" key={fairytale.id}>
									<img src={fairytale.image} alt="" />
									<div className="fairy-tale-text">
										<h2>{fairytale.title}</h2>
										<p>{fairytale.name}</p>
										<button className="fairy-tale-button">i</button>
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
