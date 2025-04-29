import Logo from "../assets/Images-web/Logo_ErWasEens.svg";
import Searchbar from "./Searchbar";
import { NavLink } from "react-router-dom";
function Header() {
	return (
		<header>
			<nav className="navbar">
				<div className="logo">
					<img src={Logo}></img>
				</div>
				<div className="menu">
					<NavLink to="/">Home</NavLink>
					<NavLink to="/projects">Projects</NavLink>
					<NavLink to="/makingof">Making Of</NavLink>
				</div>
				<Searchbar />
			</nav>
			<hr />
		</header>
	);
}

export default Header;
