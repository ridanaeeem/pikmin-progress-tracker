"use client";
import React, { useState } from "react";
import NavMenu from "@/components/NavMenu";
import AllPikmin from "@/components/AllPikmin";
import About from "@/components/About";

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
				<div id="menu" className="cursor-pointer" onClick={handleClick}>
					≡
				</div>
				<div className={showMenu}>
					<NavMenu showMenu={showMenu} setShowMenu={setShowMenu} />
				</div>
				<div id="title" className="font-rodin font-bold text-5xl">
					<a href="/">PIKMIN PROGRESS TRACKER</a>
				</div>
			</nav>
			<div className="account"></div>
			<AllPikmin />
			<About />
		</main>
	);
}
