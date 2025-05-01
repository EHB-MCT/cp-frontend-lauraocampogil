import { useScroll, useTransform, motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { ParallaxProvider } from "react-scroll-parallax";
import { useParallax } from "react-scroll-parallax";
import { ParallaxBanner, ParallaxBannerLayer } from "react-scroll-parallax";
import FairydustCursor from "../components/FairydustCursor.jsx";
import HeaderParallax from "../components/HeaderParallax.jsx";
import Stars from "../assets/Images-web/Sterstelsel.png";
import Brothers from "../assets/Images-web/londen-littleguys.png";
import Bigstar from "../assets/Images-web/Starwithstars.png";

function Parallax() {
	return (
		<>
			<ParallaxProvider>
				<div className="fairy-cursor">
					<FairydustCursor />
					<HeaderParallax />
				</div>
			</ParallaxProvider>
		</>
	);
}

export default Parallax;
