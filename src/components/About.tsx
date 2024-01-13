import React from "react";
import Link from "next/link";

export default function About() {
	return (
		<div id="about">
			<div className="text-center p-10 text-xl">
				Use this website to track your{" "}
				<Link href="https://pikminbloom.com/" className="underline">
					Pikmin Bloom
				</Link>{" "}
				decor pikmin collection progress! Simply click the pikmin you would like to mark as collected and view
				some of your stats after! Please note, this website is not made for commercial purposes, and all images
				used orignate from Pikmin Bloom and are not owned by me. Pikmin and icon images were found on{" "}
				<Link href="https://www.pikminwiki.com/Decor_Pikmin" className="underline">
					Pikipedia
				</Link>{" "}
				and this{" "}
				<Link href="https://github.com/zviznemte/PikminBloomAssets" className="underline">
					repository
				</Link>
				. This website is not affiliated with Nintendo nor Niantic, and all credits for the original images and
				icons go to them. See the GitHub repository for this website{" "}
				<Link href="https://github.com/ridanaeeem/pikmin-progress-tracker" className="underline">
					here
				</Link>
				.
			</div>
		</div>
	);
}
