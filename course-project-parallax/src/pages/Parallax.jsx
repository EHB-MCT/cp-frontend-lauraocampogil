import { useRef, useState, useEffect } from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import FairydustCursor from "../components/FairydustCursor.jsx";
import HeaderParallax from "../components/HeaderParallax.jsx";
import EndPageParallax from "../components/EndPageParallax.jsx";

//images import
import SterStelsel from "../assets/Images-web/Sterstelsel.png";
import Brothers from "../assets/Images-web/londen-littleguys.png";
import BigStar from "../assets/Images-web/Starwithstars.png";
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

// Custom hook for horizontal parallax - defined OUTSIDE the component
const useParallax = ({ speed = 0, targetElement = null }) => {
	const ref = useRef(null);
	const [position, setPosition] = useState(0);

	useEffect(() => {
		if (!targetElement) return;

		const handleScroll = () => {
			const scrollPosition = targetElement.scrollLeft;
			setPosition(scrollPosition * speed * 0.01);
		};

		const element = targetElement;
		element.addEventListener("scroll", handleScroll);
		return () => element.removeEventListener("scroll", handleScroll);
	}, [speed, targetElement]);

	return { ref, position };
};

function PeterPanParallax() {
	const parallaxRef = useRef(null);
	const horizontalScrollRef = useRef(null);
	const [showLostGuys, setShowLostGuys] = useState(true);

	// Initialize parallax effects after the component mounts
	const [scrollContainer, setScrollContainer] = useState(null);

	useEffect(() => {
		if (horizontalScrollRef.current) {
			setScrollContainer(horizontalScrollRef.current);
		}
	}, []);

	// Setup parallax layers with proper container reference
	const forestBgParallax = useParallax({
		speed: 30,
		targetElement: scrollContainer,
	});

	const forestMidParallax = useParallax({
		speed: 70,
		targetElement: scrollContainer,
	});

	const treeParallax = useParallax({
		speed: 40,
		targetElement: scrollContainer,
	});

	// Handle LostGuys visibility based on scroll position
	useEffect(() => {
		if (!scrollContainer) return;

		const handleVisibility = () => {
			const scrollPosition = scrollContainer.scrollLeft;
			const scrollWidth = scrollContainer.scrollWidth;
			const viewportWidth = scrollContainer.clientWidth;

			// Hide LostGuys when we reach the last third (Tree section)
			if (scrollPosition + viewportWidth > (scrollWidth * 2) / 3) {
				setShowLostGuys(false);
			} else {
				setShowLostGuys(true);
			}
		};

		scrollContainer.addEventListener("scroll", handleVisibility);
		return () => scrollContainer.removeEventListener("scroll", handleVisibility);
	}, [scrollContainer]);

	const scrollHorizontal = (direction) => {
		if (horizontalScrollRef.current) {
			horizontalScrollRef.current.scrollBy({
				left: direction * 300,
				behavior: "smooth",
			});
		}
	};

	return (
		<>
			<div className="fairy-cursor">
				<FairydustCursor />
				<HeaderParallax />
				<div className="parallax-container">
					<Parallax pages={11} style={{ top: "0", left: "0" }} className="peterpan-parallax" ref={parallaxRef}>
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
						<ParallaxLayer offset={2} speed={2} style={{ zIndex: 1 }} className="text-animation">
							<p> "Peter Pan who was looking for his shadow entered Wendy's house, where his shadow was"</p>
						</ParallaxLayer>
						<ParallaxLayer offset={2.1} speed={1} style={{ zIndex: -1 }}>
							<img className="animation-layer" src={BigStar} />
						</ParallaxLayer>
						<ParallaxLayer offset={3} speed={1} style={{ zIndex: -1 }}>
							<img className="animation-layer" src={Rainbow} />
						</ParallaxLayer>
						<ParallaxLayer offset={3.2} speed={2} style={{ zIndex: 1 }} className="text-animation">
							<p> “Welcome to Neverland! Where children never have to grow up”</p>
						</ParallaxLayer>
						<ParallaxLayer offset={3} speed={1} style={{ zIndex: 1 }}>
							<img className="animation-image-island" src={Island} />
						</ParallaxLayer>
						<ParallaxLayer offset={3} speed={1} style={{ zIndex: -1 }}>
							<img className="animation-image-shadow-scene2" src={Shadow} />
						</ParallaxLayer>

						{/* Horizontal Scroll Section (offset 4-6) */}
						<ParallaxLayer offset={4} speed={0.5} style={{ height: "300vh" }}>
							<div className="horizontal-section-container">
								<div className="horizontal-controls">
									<button onClick={() => scrollHorizontal(-1)}>← Previous</button>
									<button onClick={() => scrollHorizontal(1)}>Next →</button>
								</div>

								<div className="horizontal-scroll-area" ref={horizontalScrollRef}>
									<div className="horizontal-content">
										{/* Forest Background */}
										<div
											ref={forestBgParallax.ref}
											className="horizontal-layer"
											style={{
												transform: `translateX(${forestBgParallax.position}px)`,
												zIndex: -1,
											}}
										>
											<img className="horizontal-image" src={MagicForest} alt="Magic Forest" />
										</div>

										{/* Sticky Lost Guys (visible only during first two sections) */}
										<div className={`horizontal-layer sticky-layer ${showLostGuys ? "visible" : "hidden"}`} style={{ zIndex: 1 }}>
											<img className="animation-image-lostguys" src={LostGuys} alt="Lost Guys" />
										</div>

										{/* Forest Midground */}
										<div
											ref={forestMidParallax.ref}
											className="horizontal-layer"
											style={{
												transform: `translateX(${forestMidParallax.position}px)`,
												zIndex: -1,
												left: "100%",
											}}
										>
											<img className="horizontal-image" src={Forest} alt="Forest" />
										</div>

										{/* Tree */}
										<div
											ref={treeParallax.ref}
											className="horizontal-layer"
											style={{
												transform: `translateX(${treeParallax.position}px)`,
												zIndex: -1,
												left: "200%",
											}}
										>
											<img className="horizontal-image" src={Tree} alt="Tree" />
										</div>
										<ParallaxLayer offset={4.2} speed={2} style={{ zIndex: 1 }} className="text-animation">
											<p>“The Lost Boys were kidnapped by the pirates”</p>
										</ParallaxLayer>
									</div>
								</div>
							</div>
						</ParallaxLayer>

						{/* Sections 7-11 (Vertical Scroll Again) */}
						<ParallaxLayer offset={5} speed={1} style={{ zIndex: -1 }}>
							<img className="animation-layer" src={Ship} />
						</ParallaxLayer>
						<ParallaxLayer offset={5} speed={1} style={{ zIndex: 1 }}>
							<img className="animation-image-pirates" src={Pirates} />
						</ParallaxLayer>
						<ParallaxLayer offset={7} speed={2} style={{ zIndex: 1 }} className="text-animation">
							<p>“Captain Hook and Peter Pan fight for the lost boys”</p>
						</ParallaxLayer>
						<ParallaxLayer sticky={{ start: 5, end: 7 }} offset={8} speed={1} style={{ zIndex: -1 }}>
							<img className="animation-layer" src={PeterVSHaak} />
						</ParallaxLayer>
						<ParallaxLayer offset={7} speed={1} style={{ zIndex: 1 }}>
							<img className="animation-image-swordpeter" src={Sword} />
						</ParallaxLayer>
						<ParallaxLayer offset={7} speed={1} style={{ zIndex: 1 }}>
							<img className="animation-image-swordhaak" src={Sword} />
						</ParallaxLayer>
						<ParallaxLayer offset={8} speed={2} style={{ zIndex: 1 }} className="text-animation">
							<p>“Peter Pan saves the lost boys and Wendy”</p>
						</ParallaxLayer>
						<ParallaxLayer offset={8} speed={1} style={{ zIndex: -1 }}>
							<img className="animation-layer" src={Children} />
						</ParallaxLayer>
						<ParallaxLayer offset={9} speed={2} style={{ zIndex: 1 }} className="text-animation">
							<p>“Together they fly back to London”</p>
						</ParallaxLayer>
						<ParallaxLayer offset={9} speed={1} style={{ zIndex: -1 }}>
							<img className="animation-layer" src={FlyingShip} />
						</ParallaxLayer>
						<ParallaxLayer offset={10} speed={1} style={{ zIndex: -1 }}>
							<img className="animation-layer" src={BigStar} />
						</ParallaxLayer>
						<ParallaxLayer offset={11} speed={1} style={{ zIndex: -1 }}>
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
