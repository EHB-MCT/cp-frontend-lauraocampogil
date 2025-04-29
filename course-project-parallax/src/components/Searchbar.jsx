import React, { useState } from "react";
import data from "../fairytale-data.json";
function Searchbar() {
	const [searchTerm, setSearchTerm] = useState("");

	const onSearch = (searchItem) => {
		setSearchTerm(searchItem);
		//fairytale-data.json
		console.log("search", searchItem);
	};

	return (
		<div className="search-container">
			<div className="search-inner">
				<input className="search-box" type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} placeholder="Search for a topic" />
				<div className="dropdown"></div>
				<button className="search-btn" onClick={() => onSearch(searchTerm)}>
					Search
				</button>

				{data
					.filter((item) => {
						const searchItem = searchTerm.toLowerCase();
						const titles = item.title.toLowerCase();
						return searchItem && titles.includes(searchItem) && titles !== searchItem;
					})
					.slice(0, 10) //Amount of results from the dropdown
					.map((item) => (
						<div onClick={() => onSearch(item.title)} className="dropdown-row" key={item.id}>
							{item.title}
						</div>
					))}
			</div>
		</div>
	);
}
export default Searchbar;
