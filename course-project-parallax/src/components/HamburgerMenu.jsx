import React, { useState } from "react";
const Burger = () => {
	const [open, setOpen] = useState(false);
	return (
		<div className="hamburger-menu" open={open} onClick={() => setOpen(!open)}>
			<div />
			<div />
			<div />
		</div>
	);
};
export default Burger;
