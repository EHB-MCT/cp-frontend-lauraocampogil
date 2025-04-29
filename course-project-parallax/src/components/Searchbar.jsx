import React, { useState, useEffect, useRef } from "react";
import data from "../fairytale-data.json";

function Searchbar() {
	const [searchTerm, setSearchTerm] = useState("");
	const [showDropdown, setShowDropdown] = useState(false);
	const dropdownRef = useRef(null);

	// Close dropdown when clicking outside
	useEffect(() => {
		const handleClickOutside = (event) => {
			if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
				setShowDropdown(false);
			}
		};

		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, []);

	const onSearch = (searchItem) => {
		setSearchTerm(searchItem);
		setShowDropdown(false);
		console.log("search", searchItem);
	};

	const handleInputChange = (e) => {
		setSearchTerm(e.target.value);
		setShowDropdown(true); // Show dropdown when typing
	};

	//6. [YT VIDEO: Searchbar with suggestions]-(https://www.youtube.com/watch?v=Jd7s7egjt30)

	// Filter results based on search term
	const filteredData = data
		.filter((item) => {
			const searchItem = searchTerm.toLowerCase();
			const title = item.title.toLowerCase();
			return searchItem && title.includes(searchItem);
		})
		.slice(0, 5); // Limit to 5 results

	return (
		<div className="search-container" ref={dropdownRef}>
			<div className="search-inner">
				<input className="search-box" type="text" value={searchTerm} onChange={handleInputChange} onFocus={() => setShowDropdown(true)} placeholder="Search for a topic" />
				<button className="search-btn" onClick={() => onSearch(searchTerm)}>
					Search
				</button>
			</div>

			{showDropdown && filteredData.length > 0 && (
				<div className="dropdown">
					{filteredData.map((item) => (
						<div onClick={() => onSearch(item.title)} className="dropdown-row" key={item.id}>
							{item.title}
						</div>
					))}
				</div>
			)}
		</div>
	);
}

export default Searchbar;
