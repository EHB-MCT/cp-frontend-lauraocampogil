import { useScroll, useTransform, motion } from "framer-motion";
import { useEffect, useRef } from "react";
import FairydustCursor from "../components/FairydustCursor.jsx";
import HeaderParallax from "../components/HeaderParallax.jsx";
import Stars from "../assets/Images-web/Sterstelsel.png";
import Brothers from "../assets/Images-web/londen-littleguys.png";
import Bigstar from "../assets/Images-web/Starwithstars.png";
import PeterPan from "../assets/Images-web/PeterPan-Shadow-RIGHT.png";

function Parallax() {
	const containerRef = useRef(null);
	const { scrollYProgress } = useScroll();

	return (
		<>
			<div className="fairy-cursor">
				<FairydustCursor />
				<HeaderParallax />
				<main className="main-container" ref={containerRef}>
					<StarsSection scrollYProgress={scrollYProgress} />
					<div className="scroll-container">
						<BrothersSection scrollYProgress={scrollYProgress} />
						<BigStarSection scrollYProgress={scrollYProgress} />
					</div>
				</main>
			</div>
		</>
	);
}

const StarsSection = ({ scrollYProgress }) => {
	const starsY = useTransform(scrollYProgress, [0, 0.5], ["0%", "30%"]);
	return (
		<motion.div className="stars-section" style={{ y: starsY }}>
			<div className="stars-image">
				<img src={Stars} />
			</div>
			<div className="peterpan-image">
				<img src={PeterPan} />
			</div>
			<div className="stars-text">
				<motion.p initial={{ opacity: 0, y: -100 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 3 }}>
					“Wendy and her brothers believe in the fairy tale of Peter Pan”
				</motion.p>
				<motion.p initial={{ opacity: 0, y: -100 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 3 }}>
					““Peter Pan who was looking for his shadow entered Wendy's house, where his shadow was”
				</motion.p>
				<motion.p initial={{ opacity: 0, y: -100 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 3 }}>
					“Peter Pan together with Wendy and her brothers fly to the magical island of Neverland, where Peter Pan lives”
				</motion.p>
			</div>
		</motion.div>
	);
};
const BrothersSection = ({ scrollYProgress }) => {
	const brothersY = useTransform(scrollYProgress, [0, 0.3], ["0%", "-100%"]);
	return (
		<motion.div className="brothers-section" style={{ y: brothersY }}>
			<div className="brothers-image">
				<img src={Brothers} />
			</div>
		</motion.div>
	);
};
const BigStarSection = ({ scrollYProgress }) => {
	const bigStarY = useTransform(scrollYProgress, [0, 0.5], ["100%", "0%"]);
	return (
		<motion.div className="bigstar-section" style={{ y: bigStarY }}>
			<div className="big-star-image">
				<img src={Bigstar} />
			</div>
		</motion.div>
	);
};

export default Parallax;
