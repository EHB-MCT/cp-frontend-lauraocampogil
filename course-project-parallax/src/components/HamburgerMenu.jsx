import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const HamburgerMenu = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};
	return (
		<div className="hamburgermenu-container">
			<div className={`hamburger-button ${isOpen ? "open" : ""}`} onClick={toggleMenu}>
				<div className="line"></div>
				<div className="line"></div>
				<div className="line"></div>
			</div>
			<div className={`menu-panel ${isOpen ? "open" : ""}`}>
				<div className="menu-items">
					<div className="menu-item">
						<NavLink to="/">HOME</NavLink>
						<NavLink to="/projects">PROJECTS</NavLink>
						<NavLink to="/makingof">MAKING-OF</NavLink>
					</div>
				</div>
			</div>
		</div>
	);
};
export default HamburgerMenu;
