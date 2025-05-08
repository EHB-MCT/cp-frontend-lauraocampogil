import { useRef, useState, useEffect } from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import FairydustCursor from "../components/FairydustCursor.jsx";
import HeaderParallax from "../components/HeaderParallax.jsx";
import EndPageParallax from "../components/EndPageParallax.jsx";

//images import
import SterStelsel from "../assets/Images-web/Sterstelsel.png";
import Brothers from "../assets/Images-web/londen-littleguys.png";
import OneStar from "../assets/Images-web/ONE-STAR-NOBK.png";
import Shadow from "../assets/Images-web/PeterPan-Shadow-RIGHT.png";
import Rainbow from "../assets/Images-web/Water-rainbow-extended.png";
import Island from "../assets/Images-web/Island-NOBK.png";
import MagicForest from "../assets/Images-web/Bos1.png";
import Forest from "../assets/Images-web/Bos2.png";
import LostGuys from "../assets/Images-web/Kinderen-op-rij.png";
import Tree from "../assets/Images-web/Gekidnapped.png";
import Ship from "../assets/Images-web/Schip.png";
import Pirates from "../assets/Images-web/People-on-the-ship.png";
import PeterVSHaak from "../assets/Images-web/HaakVSPeterzonderZwaard.png";
import Sword from "../assets/Images-web/Sword.png";
import Children from "../assets/Images-web/PeterPan-helps.png";
import FlyingShip from "../assets/Images-web/UitNeverlandShip.png";

function PeterPanParallax() {
	const parallaxRef = useRef(null);

	return (
		<>
			<div className="fairy-cursor">
				<FairydustCursor />
				<HeaderParallax />
				<div className="parallax-container">
					<Parallax pages={7} style={{ top: "0", left: "0" }} className="peterpan-parallax" ref={parallaxRef}>
						{/* Sections 0-3 (Vertical Scroll) */}
						<ParallaxLayer sticky={{ start: 0, end: 2 }} offset={0} speed={1} style={{ zIndex: -1 }}>
							<img className="animation-layer" src={SterStelsel} />
						</ParallaxLayer>
						<ParallaxLayer offset={0} speed={1} style={{ zIndex: 1 }}>
							<img className="animation-layer" src={Brothers} />
						</ParallaxLayer>
						<ParallaxLayer offset={1} speed={1} style={{ zIndex: -1 }}>
							<img className="animation-image-shadow-scene1" src={Shadow} />
						</ParallaxLayer>
						<ParallaxLayer offset={1.1} speed={2} style={{ zIndex: 1 }} className="text-animation">
							<p> "Wendy and her brothers believe in the fairy tale of Peter Pan"</p>
						</ParallaxLayer>
						<ParallaxLayer offset={1.8} speed={2} style={{ zIndex: 1 }} className="text-animation">
							<p> "Peter Pan who was looking for his shadow entered Wendy's house, where his shadow was"</p>
						</ParallaxLayer>
						<ParallaxLayer offset={1.9} speed={2} style={{ zIndex: 1 }} className="text-animation">
							<p> “Peter Pan together with Wendy and her brothers fly to the magical island of Neverland, where Peter Pan lives”</p>
						</ParallaxLayer>
						<ParallaxLayer sticky={{ start: 1.5, end: 2 }} offset={1.9} speed={1} style={{ zIndex: -1 }}>
							<img className="animation-layer" src={OneStar} />
						</ParallaxLayer>
						<ParallaxLayer offset={2.99} speed={1} style={{ zIndex: -1 }}>
							<img className="animation-layer" src={Rainbow} />
						</ParallaxLayer>
						<ParallaxLayer offset={3} speed={2} style={{ zIndex: 1 }} className="text-animation">
							<p> “Welcome to Neverland! Where children never have to grow up”</p>
						</ParallaxLayer>
						<ParallaxLayer offset={2.99} speed={1} style={{ zIndex: 1 }}>
							<img className="animation-image-island" src={Island} />
						</ParallaxLayer>
						<ParallaxLayer offset={2.99} speed={1} style={{ zIndex: -1 }}>
							<img className="animation-image-shadow-scene2" src={Shadow} />
						</ParallaxLayer>
						{/*BEGIN HORIZONTAL PARALLAX*/}
						<ParallaxLayer offset={3} speed={0.5} style={{ height: "300vh" }}>
							<img className="horizontal-image" src={MagicForest} alt="Magic Forest" />
						</ParallaxLayer>
						{/*STICKY IMAGE UNTIL TREE IMAGES*/}
						<ParallaxLayer offset={3} speed={0.5} style={{ height: "300vh" }}>
							<img className="animation-image-lostguys" src={LostGuys} alt="Lost Guys" />
						</ParallaxLayer>
						<ParallaxLayer offset={3} speed={0.5} style={{ height: "300vh" }}>
							<img className="horizontal-image" src={Forest} alt="Forest" />
						</ParallaxLayer>
						{/*Disappear of LostGuys*/}
						<ParallaxLayer offset={3} speed={0.5} style={{ height: "300vh" }}>
							<img className="horizontal-image" src={Tree} alt="Tree" />
						</ParallaxLayer>
						{/* END HORIZONTAL PARALLAX */}
						<ParallaxLayer offset={4.2} speed={2} style={{ zIndex: 1 }} className="text-animation">
							<p>“The Lost Boys were kidnapped by the pirates”</p>
						</ParallaxLayer>
						{/* Sections 7-11 (Vertical Scroll Again) */}
						<ParallaxLayer offset={3.99} speed={1} style={{ zIndex: -1 }}>
							<img className="animation-layer" src={Ship} />
						</ParallaxLayer>
						<ParallaxLayer offset={3.99} speed={1} style={{ zIndex: 1 }}>
							<img className="animation-image-pirates" src={Pirates} />
						</ParallaxLayer>
						<ParallaxLayer offset={4} speed={2} style={{ zIndex: 1 }} className="text-animation">
							<p>“Captain Hook and Peter Pan fight for the lost boys”</p>
						</ParallaxLayer>
						<ParallaxLayer sticky={{ start: 4, end: 4.5 }} offset={4} speed={1} style={{ zIndex: -1 }}>
							<img className="animation-layer" src={PeterVSHaak} />
						</ParallaxLayer>
						<ParallaxLayer offset={4} speed={1} style={{ zIndex: 1 }}>
							<img className="animation-image-swordpeter" src={Sword} />
						</ParallaxLayer>
						<ParallaxLayer offset={4} speed={1} style={{ zIndex: 1 }}>
							<img className="animation-image-swordhaak" src={Sword} />
						</ParallaxLayer>
						<ParallaxLayer offset={4.99} speed={2} style={{ zIndex: 1 }} className="text-animation">
							<p>“Peter Pan saves the lost boys and Wendy”</p>
						</ParallaxLayer>
						<ParallaxLayer offset={4.99} speed={1} style={{ zIndex: -1 }}>
							<img className="animation-layer" src={Children} />
						</ParallaxLayer>
						<ParallaxLayer offset={5} speed={2} style={{ zIndex: 1 }} className="text-animation">
							<p>“Together they fly back to London”</p>
						</ParallaxLayer>
						<ParallaxLayer offset={5} speed={1} style={{ zIndex: -1 }}>
							<img className="animation-layer" src={FlyingShip} />
						</ParallaxLayer>
						<ParallaxLayer offset={5.99} speed={1} style={{ zIndex: -1 }}>
							<img className="animation-layer" src={OneStar} />
						</ParallaxLayer>
						<ParallaxLayer offset={6} speed={1} style={{ zIndex: -1 }}>
							<img className="animation-layer" src={SterStelsel} />
						</ParallaxLayer>
					</Parallax>
				</div>
				<EndPageParallax />
			</div>
		</>
	);
}

export default PeterPanParallax;
