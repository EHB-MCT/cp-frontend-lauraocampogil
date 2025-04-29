import Logo from "../assets/Images-web/Logo_ErWasEens.svg";
function Footer() {
	return (
		<footer>
			<div className="footer-container">
				<div className="logo-footer">
					<img src={Logo}></img>
				</div>
				<div className="about-container">
					<h3>About Us</h3>
					<p>Welcome to a world where fairy tales scroll with depth. Through parallax magic, we bring front-end stories to life — one layer at a time. ✨</p>
				</div>
				<div className="links-container">
					<h3>Links</h3>
					<div className="links">
						<a href="#">HOME</a>

						<a href="#">PROJECTS</a>

						<a href="#">MAKING OF</a>
					</div>
				</div>
			</div>
		</footer>
	);
}
export default Footer;
