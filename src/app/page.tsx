"use client";
import React, { useState } from "react";
import NavMenu from "@/components/NavMenu";
import AllPikmin from "@/components/AllPikmin";
import About from "@/components/About";
import Stats from "@/components/Stats";

export default function Home() {
	const [showMenu, setShowMenu] = useState("hidden");

	const handleClick = () => {
		if (showMenu === "visible") {
			setShowMenu("hidden");
		} else {
			setShowMenu("visible");
		}
	};

	return (
		<main className="">
			<nav>
				<div id="menu" onClick={handleClick}>
					≡
				</div>
				<div className={showMenu}>
					<NavMenu showMenu={showMenu} setShowMenu={setShowMenu} />
				</div>
				<div id="title" className="">
					<a href="/">PIKMIN PROGRESS TRACKER</a>
				</div>
			</nav>
			<div className="account"></div>
			<AllPikmin />
			<Stats />
			<About />
		</main>
	);
}
