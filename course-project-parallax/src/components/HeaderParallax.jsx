import Sound from "../components/Sound.jsx";
import HamburgerMenu from "../components/HamburgerMenu.jsx";
import Logo from "../assets/Images-web/Logo_ErWasEens.svg";
function HeaderParallax() {
	return (
		<div className="header-parallax">
			<div className="logo-container">
				<div className="logo-parallax">
					<img src={Logo}></img>
				</div>
			</div>
			<div className="music-container">
				<Sound />
			</div>
			<div className="hamburger-container">
				<HamburgerMenu />
			</div>
		</div>
	);
}
export default HeaderParallax;
