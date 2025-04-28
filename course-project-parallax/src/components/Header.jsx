import Logo from "../assets/Images-web/Logo_ErWasEens.svg";
function Header() {
	return (
		<header>
			<nav>
				<div className="logo">
					<img src={Logo}></img>
				</div>
				<div className="menu">
					<a href="#">Home</a>

					<a href="#">Projects</a>

					<a href="#">Making Of</a>
				</div>
			</nav>
		</header>
	);
}

export default Header;
