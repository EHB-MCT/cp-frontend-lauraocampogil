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
	const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
	const [scrollY, setScrollY] = useState(0);

	// Mouse movement handler
	useEffect(() => {
		const handleMouseMove = (event) => {
			const { clientX, clientY } = event;
			const { innerWidth, innerHeight } = window;

			// Convert mouse position to a range between -1 and 1
			const x = (clientX / innerWidth - 0.5) * 2;
			const y = (clientY / innerHeight - 0.5) * 2;

			setMousePosition({ x, y });
		};

		const handleScroll = () => {
			if (parallaxRef.current && parallaxRef.current.container) {
				const scrollTop = parallaxRef.current.container.current.scrollTop;
				setScrollY(scrollTop);
			}
		};

		window.addEventListener("mousemove", handleMouseMove);

		// Add scroll listener to parallax container
		const parallaxContainer = parallaxRef.current?.container?.current;
		if (parallaxContainer) {
			parallaxContainer.addEventListener("scroll", handleScroll);
		}

		return () => {
			window.removeEventListener("mousemove", handleMouseMove);
			if (parallaxContainer) {
				parallaxContainer.removeEventListener("scroll", handleScroll);
			}
		};
	}, []);

	// Calculate island position based on mouse
	const islandStyle = {
		transform: `translate(${mousePosition.x * 50}px, ${mousePosition.y * 50}px)`,
		transition: "transform 0.1s ease-out",
		willChange: "transform",
	};

	// Calculate Peter Pan moving position (Section 0-1)
	const getPeterPanTransform = () => {
		const progress = Math.min(scrollY / (window.innerHeight || 800), 1);
		const moveDistance = progress * window.innerWidth * 0.8; // Move across 80% of screen
		return `translateX(${-400 + moveDistance}px)`;
	};

	// Calculate star scale (Section 2)
	const getStarScale = () => {
		const sectionStart = window.innerHeight * 1.5;
		const sectionEnd = window.innerHeight * 2.3; // Shorter section for faster growth
		if (scrollY < sectionStart) return 1;
		if (scrollY > sectionEnd) return 5;
		const sectionProgress = (scrollY - sectionStart) / (sectionEnd - sectionStart);
		return 1 + sectionProgress * 4; // Scale from 1 to 5
	};

	// Calculate star opacity for fade out
	const getStarOpacity = () => {
		const sectionStart = window.innerHeight * 1.5;
		const fadeStart = window.innerHeight * 1.8; // Start fading earlier
		const fadeEnd = window.innerHeight * 2.1; // End fading before island
		if (scrollY < fadeStart) return 1;
		if (scrollY > fadeEnd) return 0;
		const fadeProgress = (scrollY - fadeStart) / (fadeEnd - fadeStart);
		return Math.max(0, 1 - fadeProgress);
	};

	// Calculate horizontal scroll progress - TIGHT BLOCKING
	const getHorizontalProgress = () => {
		const sectionStart = window.innerHeight * 3;
		const sectionEnd = sectionStart + window.innerHeight * 0.99; // Almost full section
		if (scrollY < sectionStart) return 0;
		if (scrollY > sectionEnd) return 1;
		return (scrollY - sectionStart) / (window.innerHeight * 0.99);
	};

	// Calculate Lost Boys opacity - SLOWER DISAPPEARANCE
	const getLostBoysOpacity = () => {
		const progress = getHorizontalProgress();
		return progress < 0.7 ? 1 : Math.max(0, 1 - (progress - 0.7) / 0.3); // Stay visible longer
	};

	// Calculate sword fight animation - MUCH LATER
	const getSwordFightProgress = () => {
		const sectionStart = window.innerHeight * 6;
		const sectionEnd = sectionStart + window.innerHeight * 0.3;
		if (scrollY < sectionStart) return 0;
		if (scrollY > sectionEnd) return 1;
		return (scrollY - sectionStart) / (window.innerHeight * 0.3);
	};

	// Calculate end star shrinking
	const getEndStarScale = () => {
		const sectionStart = window.innerHeight * 7.6;
		if (scrollY < sectionStart) return 1;
		const progress = (scrollY - sectionStart) / window.innerHeight;
		return Math.max(0.1, 1 - progress * 0.9);
	};

	return (
		<>
			<div className="fairy-cursor">
				<FairydustCursor />
				<HeaderParallax />
				<div className="parallax-container">
					<Parallax pages={8.5} style={{ top: "0", left: "0" }} className="peterpan-parallax" ref={parallaxRef}>
						{/* Section 0-1: Brothers with moving Peter Pan */}
						<ParallaxLayer sticky={{ start: 0, end: 1 }} offset={0} speed={1} style={{ zIndex: -1 }}>
							<img className="animation-layer" src={SterStelsel} alt="Star System" />
						</ParallaxLayer>

						<ParallaxLayer offset={0} speed={1} style={{ zIndex: 1 }}>
							<img className="animation-layer" src={Brothers} alt="Brothers" />
						</ParallaxLayer>

						{/* Moving Peter Pan */}
						<ParallaxLayer offset={0} speed={1} style={{ zIndex: 2 }}>
							<div className="moving-peter-pan" style={{ transform: getPeterPanTransform() }}>
								<img src={Shadow} alt="Peter Pan Shadow" className="peter-pan-moving" />
							</div>
						</ParallaxLayer>

						{/* Text overlays */}
						<ParallaxLayer offset={0.2} speed={2} style={{ zIndex: 3 }} className="text-animation">
							<p>"Wendy and her brothers believe in the fairy tale of Peter Pan"</p>
						</ParallaxLayer>

						{/* Section 1: Shadow scene */}
						<ParallaxLayer offset={1} speed={1} style={{ zIndex: -1 }}>
							<img className="animation-image-shadow-scene1" src={Shadow} alt="Shadow" />
						</ParallaxLayer>

						<ParallaxLayer offset={1.1} speed={2} style={{ zIndex: 1 }} className="text-animation">
							<p>"Peter Pan who was looking for his shadow entered Wendy's house, where his shadow was"</p>
						</ParallaxLayer>

						<ParallaxLayer offset={1.8} speed={2} style={{ zIndex: 1 }} className="text-animation">
							<p>"Peter Pan together with Wendy and her brothers fly to the magical island of Neverland, where Peter Pan lives"</p>
						</ParallaxLayer>

						{/* Section 2: Growing Star - Sticky and Growing */}
						<ParallaxLayer sticky={{ start: 1.5, end: 2.4 }} offset={1.5} speed={1} style={{ zIndex: 10 }}>
							<div className="star-container">
								<img
									src={OneStar}
									alt="Star"
									className="growing-star"
									style={{
										transform: `scale(${getStarScale()})`,
										opacity: getStarOpacity(),
										transition: "transform 0.05s ease-out",
									}}
								/>
							</div>
						</ParallaxLayer>

						{/* Section 3: Neverland Island with mouse follow */}
						<ParallaxLayer offset={2.5} speed={1} style={{ zIndex: -1 }}>
							<img className="animation-layer" src={Rainbow} alt="Rainbow" />
						</ParallaxLayer>

						<ParallaxLayer offset={2.6} speed={2} style={{ zIndex: 1 }} className="text-animation">
							<p>"Welcome to Neverland! Where children never have to grow up"</p>
						</ParallaxLayer>

						{/* Island with mouse follow effect */}
						<ParallaxLayer offset={2.5} speed={1} style={{ zIndex: 1 }}>
							<div className="animation-image-island-container">
								<img className="animation-image-island" src={Island} alt="Island" style={islandStyle} />
							</div>
						</ParallaxLayer>

						<ParallaxLayer offset={2.5} speed={1} style={{ zIndex: -1 }}>
							<img className="animation-image-shadow-scene2" src={Shadow} alt="Shadow" />
						</ParallaxLayer>

						{/* Section 4: HORIZONTAL SCROLL - FULL SCREEN STICKY */}
						<ParallaxLayer sticky={{ start: 3, end: 6 }} offset={3} speed={0.5} style={{ zIndex: -2, height: "100vh", overflow: "hidden" }}>
							<div className="horizontal-scroll-container">
								<img
									className="horizontal-image magic-forest"
									src={MagicForest}
									alt="Magic Forest"
									style={{
										transform: `translateX(-${getHorizontalProgress() * 200}%)`,
										transition: "transform 0.1s ease-out",
									}}
								/>
								<img
									className="horizontal-image normal-forest"
									src={Forest}
									alt="Forest"
									style={{
										transform: `translateX(-${getHorizontalProgress() * 200}%)`,
										transition: "transform 0.1s ease-out",
									}}
								/>
								<img
									className="horizontal-image tree-kidnapped"
									src={Tree}
									alt="Tree"
									style={{
										transform: `translateX(-${getHorizontalProgress() * 200}%)`,
										transition: "transform 0.1s ease-out",
									}}
								/>
							</div>
						</ParallaxLayer>

						{/* Lost Boys - STICKY ON TOP */}
						<ParallaxLayer sticky={{ start: 3, end: 6 }} offset={3} speed={0.5} style={{ zIndex: 10, height: "100vh" }}>
							<img
								className="animation-image-lostguys"
								src={LostGuys}
								alt="Lost Guys"
								style={{
									opacity: getLostBoysOpacity(),
									transition: "opacity 0.1s ease-out",
								}}
							/>
						</ParallaxLayer>

						<ParallaxLayer offset={5.5} speed={2} style={{ zIndex: 3 }} className="text-animation">
							<p>"The Lost Boys were kidnapped by the pirates"</p>
						</ParallaxLayer>

						{/* Section 5-6: Pirate Ship */}
						<ParallaxLayer offset={5.8} speed={1} style={{ zIndex: -1 }}>
							<img className="animation-layer" src={Ship} alt="Ship" />
						</ParallaxLayer>

						<ParallaxLayer offset={5.8} speed={1} style={{ zIndex: 1 }}>
							<img className="animation-image-pirates" src={Pirates} alt="Pirates" />
						</ParallaxLayer>

						<ParallaxLayer offset={6} speed={2} style={{ zIndex: 2 }} className="text-animation">
							<p>"Captain Hook and Peter Pan fight for the lost boys"</p>
						</ParallaxLayer>

						{/* Section 6: Sword Fight */}
						<ParallaxLayer sticky={{ start: 6, end: 6.2 }} offset={6} speed={1} style={{ zIndex: -1 }}>
							<img className="animation-layer" src={PeterVSHaak} alt="Peter vs Hook" />
						</ParallaxLayer>

						{/* Animated Swords */}
						<ParallaxLayer offset={6} speed={1} style={{ zIndex: 2 }}>
							<img
								className="animation-image-swordpeter"
								src={Sword}
								alt="Peter's Sword"
								style={{
									transform: `translateX(${getSwordFightProgress() * 200}px) rotate(${getSwordFightProgress() * 45}deg)`,
									transition: "transform 0.1s ease-out",
								}}
							/>
						</ParallaxLayer>

						<ParallaxLayer offset={6} speed={1} style={{ zIndex: 2 }}>
							<img
								className="animation-image-swordhaak"
								src={Sword}
								alt="Hook's Sword"
								style={{
									transform: `translateX(-${getSwordFightProgress() * 200}px) rotate(-${getSwordFightProgress() * 45}deg)`,
									transition: "transform 0.1s ease-out",
								}}
							/>
						</ParallaxLayer>

						{/* Section 7: Peter Pan Saves Everyone */}
						<ParallaxLayer offset={6.9} speed={2} style={{ zIndex: 2 }} className="text-animation">
							<p>"Peter Pan saves the lost boys and Wendy"</p>
						</ParallaxLayer>

						<ParallaxLayer offset={6.9} speed={1} style={{ zIndex: -1 }}>
							<img className="animation-layer" src={Children} alt="Children" />
						</ParallaxLayer>

						{/* Section 8: Return to London */}
						<ParallaxLayer offset={7.2} speed={2} style={{ zIndex: 2 }} className="text-animation">
							<p>"Together they fly back to London"</p>
						</ParallaxLayer>

						<ParallaxLayer offset={7.2} speed={1} style={{ zIndex: -1 }}>
							<img className="animation-layer" src={FlyingShip} alt="Flying Ship" />
						</ParallaxLayer>
					</Parallax>
				</div>
				<EndPageParallax />
			</div>
		</>
	);
}

export default PeterPanParallax;
