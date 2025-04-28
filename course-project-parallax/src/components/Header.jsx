import Logo from "../assets/Images-web/Logo_ErWasEens.svg";
function Header() {
	return (
		<header>
			<nav>
				<div className="logo">
					<img src={Logo}></img>
				</div>
				<div className="menu">
					<ul className="menu-item">
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
				</div>
			</nav>
		</header>
	);
}

export default Header;
