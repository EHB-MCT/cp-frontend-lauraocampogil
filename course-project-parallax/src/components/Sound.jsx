
import Sounds from "../assets/Sounds/peter_pan_song.mp3";
import { useState, useRef, useEffect } from "react";

function Sound() {
	const [isPlaying, setIsPlaying] = useState(false);
	const audioRef = useRef(new Audio(Sounds));

	useEffect(() => {
		// Handle play/pause based on state
		if (isPlaying) {
			audioRef.current.play().catch((err) => console.error("Audio playback error:", err));
		} else {
			audioRef.current.pause();
		}

		// Cleanup function to pause audio when component unmounts
		return () => {
			audioRef.current.pause();
		};
	}, [isPlaying]);

	const togglePlay = () => {
		setIsPlaying(!isPlaying);
	};

	return (
		<div className="play">
			<button className="play-button" onClick={togglePlay}>
				{isPlaying ? "Pause Music" : "Play Music"}
			</button>
		</div>
	);
}

export default Sound;
