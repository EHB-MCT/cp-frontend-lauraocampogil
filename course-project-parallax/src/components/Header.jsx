import Logo from "../assets/Images-web/Logo_ErWasEens.svg";
import Searchbar from "./Searchbar";
function Header() {
	return (
		<header>
			<nav className="navbar">
				<div className="logo">
					<img src={Logo}></img>
				</div>
				<div className="menu">
					<a href="#">Home</a>

					<a href="#">Projects</a>

					<a href="#">Making Of</a>
				</div>
				<Searchbar />
			</nav>
			<hr />
		</header>
	);
}

export default Header;
