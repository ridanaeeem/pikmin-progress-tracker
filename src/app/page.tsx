"use client";
import React, { useState } from "react";
import NavMenu from "@/components/NavMenu";
import AllPikmin from "@/components/AllPikmin";
import About from "@/components/About";
import Stats from "@/components/Stats";

export default function Home() {
	const [showMenu, setShowMenu] = useState("hidden");
	const [showStats, setShowStats] = useState("hidden");

	const handleClick = () => {
		if (showMenu === "visible") {
			setShowMenu("hidden");
		} else {
			setShowMenu("visible");
		}
	};

	const [stats, setStats] = useState(new Map<string, number>());
	const [statsOk, setStatsOk] = useState(false);

	return (
		<main className="">
			<nav>
				<div id="menu" className="cursor-pointer" onClick={handleClick}>
					≡
				</div>
				<div className={showMenu}>
					<NavMenu
						showMenu={showMenu}
						setShowMenu={setShowMenu}
						showStats={showStats}
						setShowStats={setShowStats}
					/>
				</div>
				<div id="title" className="font-rodin font-bold text-5xl">
					<a href="/">PIKMIN PROGRESS TRACKER</a>
				</div>
			</nav>
			<div className="account"></div>
			<AllPikmin stats={stats} statsOk={statsOk} setStatsOk={setStatsOk} />
			<About />
			<div className={showStats}>
				<Stats stats={stats} statsOk={statsOk} />
			</div>
		</main>
	);
}
