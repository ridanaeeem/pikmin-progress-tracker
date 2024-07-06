import React from "react";
import Link from "next/link";
import Clear from "@/components/Clear";
import IconDisplay from "./IconDisplay";
import SpecialDisplay from "./SpecialDisplay";

const LinkWrapper = ({ href, text }: { href: string; text: string }) => {
	return (
		<Link href={href} className="flex-1 m-1 rounded-full bg-black text-white flex justify-center items-center">
			{text}
		</Link>
	);
};

export default function NavMenu({ showMenu, setShowMenu }: { showMenu: string; setShowMenu: any }) {
	const handleLinkClick = (event: any) => {
		if (event.target.tagName === "A" || event.target.tagName === "IMG") {
			if (showMenu === "visible") {
				setShowMenu("hidden");
			} else {
				setShowMenu("visible");
			}
		}
	};

	return (
		<div className="menuDisplay" onClick={handleLinkClick}>
			<div className="flex flex-start">
				<LinkWrapper href="#title" text="Back to top" />
				<LinkWrapper href="#stats" text="Stats" />
				<LinkWrapper href="#about" text="About" />
				<Clear />
			</div>
			<IconDisplay />
			<SpecialDisplay />
		</div>
	);
}
