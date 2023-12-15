"use client";

import React, { useState, useEffect } from "react";

export default function Pikmin({ category, url }: { category: string; url: string }) {
	// determine the type of pikmin from the link 
	let type: string = "";

	if (url.includes("Red")) {
		type = "red";
	} else if (url.includes("Yellow")) {
		type = "yellow";
	} else if (url.includes("Blue")) {
		type = "blue";
	} else if (url.includes("White")) {
		type = "white";
	} else if (url.includes("Purple")) {
		type = "purple";
	} else if (url.includes("Rock")) {
		type = "rock";
	} else if (url.includes("Winged")) {
		type = "winged";
	}

	// determine whether or not it is rare from the link 
	let rare = false;
	if (url.includes("Rare")) {
		rare = true;
	}

	// assign a name to the pikmin based on its attributes 
	const pikminName = type + category + (rare ? "Rare" : "Normal");

	// check in local storage if the user has a pikmin already, default to false if not 
	const [hasPikmin, setHasPikmin] = useState(() => {
		const storedValue = localStorage.getItem(pikminName);
		return storedValue ? JSON.parse(storedValue) : false;
	});

	// by default, the user doesn't have the pikmin so put a filter hiding it 
	const [filter, setFilter] = useState("filter grayscale-100 brightness-0 opacity-40");

	// if the user clicks a pikmin, change the status of the having that pikmin
	const handleClick = () => {
		setHasPikmin(!hasPikmin);
	};

	useEffect(() => {
		// update local storage whenever hasPikmin changes
		localStorage.setItem(pikminName, JSON.stringify(hasPikmin));
		// update filter as well
		setFilter(hasPikmin ? "" : "filter grayscale-100 brightness-0 opacity-40");
	}, [hasPikmin, pikminName]);

	return (
		<div id={type} className={rare ? "rare" : ""} onClick={handleClick}>
			{/* if the pikmin is rare, add a star that will fill if the user has that pikmin */}
			{rare ? hasPikmin ? <div id="star">★</div> : <div id="star">☆</div> : null}
			<img src={url} alt={type + " " + category + " pikmin"} className={filter} />
		</div>
	);
}
