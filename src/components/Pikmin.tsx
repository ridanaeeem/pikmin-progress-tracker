"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

export default function Pikmin({ category, description, url }: { category: string; description: string; url: string }) {
	// determine the type of pikmin from the link
	let type: string = "";

	if (url.includes("Red")) {
		type = "red";
	} else if (url.includes("Yellow")) {
		type = "yellow";
	} else if (url.includes("Blue") || url.includes("Mario")) {
		type = "blue";
	} else if (url.includes("White")) {
		type = "white";
	} else if (url.includes("Purple")) {
		type = "purple";
	} else if (url.includes("Rock") && !url.includes("Winged")) {
		type = "rock";
	} else if (url.includes("Winged")) {
		type = "winged";
	}

	// determine whether or not it is rare from the link
	const rare = url.includes("Rare");

	// assign a name to the pikmin based on its attributes
	const pikminName = type + category + description.slice(0, 5) + (rare ? "Rare" : "Normal");

	// check in local storage if the user has a pikmin already, default to false if not
	const [hasPikmin, setHasPikmin] = useState(() => {
		if (typeof window !== "undefined") {
			const storedValue = localStorage.getItem(pikminName);
			return storedValue ? JSON.parse(storedValue) : false;
		}
	});

	// by default, the user doesn't have the pikmin so put a filter hiding it
	const [filter, setFilter] = useState("filter grayscale-100 brightness-0 opacity-40");

	// if the user clicks a pikmin, change the status of the having that pikmin
	const handleClick = () => {
		setHasPikmin(!hasPikmin);
	};

	useEffect(() => {
		// update local storage whenever hasPikmin changes
		if (typeof window !== "undefined") {
			localStorage.setItem(pikminName, JSON.stringify(hasPikmin));
			// update filter as well
			setFilter(hasPikmin ? "filter drop-shadow-pikminShadow" : "filter grayscale-100 brightness-0 opacity-40");
		}
	}, [hasPikmin, pikminName]);

	// drop-shadow-[-2px_0]
	return (
		<div id={type} className={rare.toString() ?? ""} onClick={handleClick}>
			{/* if the pikmin is rare, add a star that will fill if the user has that pikmin */}
			{rare ? hasPikmin ? <div id="star">★</div> : <div id="star">☆</div> : null}
			<Image src={url} alt={type + " " + category + " pikmin"} className={filter} width={2000} height={2000} />
		</div>
	);
}
