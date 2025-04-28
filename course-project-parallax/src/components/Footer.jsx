import Logo from "../assets/Images-web/Logo_ErWasEens.svg";
function Footer() {
	return (
		<footer>
			<div className="logo-footer">
				<img src={Logo}></img>
			</div>
			<h3>About Us</h3>
			<p>Welcome to a world where fairy tales scroll with depth. Through parallax magic, we bring front-end stories to life — one layer at a time. ✨</p>
			<h3>Links</h3>
			<ul>
				<li>
					<a href="#">Home</a>
				</li>
				<li>
					<a href="#">Projects</a>
				</li>
				<li>
					<a href="#">Making Of</a>
				</li>
			</ul>
		</footer>
	);
}
export default Footer;
