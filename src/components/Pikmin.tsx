"use client";

import React, { useState } from "react";

export default function Pikmin({ category, url }: { category: string; url: string }) {
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

	let rare = false;
	if (url.includes("Rare")) {
		rare = true;
	}

	const [hasPikmin, setHasPikmin] = useState(false);
	const [filter, setFilter] = useState("filter grayscale-100 brightness-0 opacity-40");

	const handleClick = () => {
		// change status of hasPikmin
		setHasPikmin(!hasPikmin);
		// update filter accordingly
		if (!hasPikmin) {
			setFilter("");
		} else {
			setFilter("filter grayscale-100 brightness-0 opacity-40");
		}
	};

	return (
		<div id={type} className={rare ? "rare" : ""} onClick={handleClick}>
			{rare ? <div id="star">☆</div> : null}
			<img src={url} alt={type + " " + category + " pikmin"} className={filter} />
		</div>
	);
}
