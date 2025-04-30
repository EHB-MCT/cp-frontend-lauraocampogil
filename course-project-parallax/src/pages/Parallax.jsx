import FairydustCursor from "../components/FairydustCursor.jsx";
import Sound from "../components/Sound.jsx";
import HamburgerMenu from "../components/HamburgerMenu.jsx";
import Logo from "../assets/Images-web/Logo_ErWasEens.svg";
function Parallax() {
	return (
		<>
			<div className="fairy-cursor">
				<div className="parallax">
					<FairydustCursor />
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
					<div className="main-title">
						<h1>Discover the magic world of Peter Pan</h1>
					</div>
					<div className="parallax-button">
						<a href="/parallax">
							<button className="parallax-btn">Discover now</button>
						</a>
					</div>
				</div>
			</div>
		</>
	);
}

export default Parallax;
