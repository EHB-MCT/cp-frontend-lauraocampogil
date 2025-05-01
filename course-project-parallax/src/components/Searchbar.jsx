import React, { useState, useEffect, useRef } from "react";
import data from "../fairytale-data.json";

function Searchbar() {
	const [searchTerm, setSearchTerm] = useState("");
	const [showDropdown, setShowDropdown] = useState(false);
	const dropdownRef = useRef(null);

	// Close dropdown when clicking outside
	useEffect(() => {
		if (searchTerm.trim() === "") {
			window.searchResults = null;
			// Trigger a custom event to notify other components
			window.dispatchEvent(new CustomEvent("searchResultsUpdated", { detail: null }));
		} else {
			const results = data.filter((item) => {
				const searchItem = searchTerm.toLowerCase();
				const title = item.title.toLowerCase();
				const name = item.name.toLowerCase();
				return title.includes(searchItem) || name.includes(searchItem);
			});

			window.searchResults = results;
			// Trigger a custom event to notify other components
			window.dispatchEvent(new CustomEvent("searchResultsUpdated", { detail: results }));
		}
	}, [searchTerm]);

	// Update search results whenever search term changes
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

	const handleInputChange = (e) => {
		setSearchTerm(e.target.value);
		setShowDropdown(true); // Show dropdown when typing
	};
	// Handle clicking on a suggestion
	const handleSuggestionClick = (item) => {
		setSearchTerm(item.title);
		setShowDropdown(false);
	};

	//6. [YT VIDEO: Searchbar with suggestions]-(https://www.youtube.com/watch?v=Jd7s7egjt30)

	// Filter results based on search term
	const filteredData = data
		.filter((item) => {
			const searchItem = searchTerm.toLowerCase();
			const title = item.title.toLowerCase();
			const name = item.name.toLowerCase();
			return searchItem && (title.includes(searchItem) || name.includes(searchItem));
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
						<div onClick={() => handleSuggestionClick(item)} className="dropdown-row" key={item.id}>
							{item.title} - {item.name}
						</div>
					))}
				</div>
			)}
		</div>
	);
}

export default Searchbar;
