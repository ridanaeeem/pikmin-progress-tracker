import React from "react";
import Group from "@/components/Group";
export default function Home() {
	return (
		<main className="">
			<div className="">pikmin progress tracker</div>
			<div className="flex flex-col basis-0 items-center;">
				<Group
					category="Restaurant"
					urls={[
						"https://pikmin.wiki.gallery/images/6/69/Decor_Red_Restaurant.png",
						"https://www.pikminwiki.com/images/a/a9/Decor_Yellow_Restaurant.png",
						"https://pikmin.wiki.gallery/images/9/90/Decor_Blue_Restaurant.png",
						"https://pikmin.wiki.gallery/images/c/ce/Decor_White_Restaurant.png",
						"https://pikmin.wiki.gallery/images/thumb/3/31/Decor_Purple_Restaurant.png/102px-Decor_Purple_Restaurant.png",
						"https://pikmin.wiki.gallery/images/thumb/5/51/Decor_Rock_Restaurant.png/155px-Decor_Rock_Restaurant.png",
						"https://pikmin.wiki.gallery/images/thumb/b/b9/Decor_Winged_Restaurant.png/126px-Decor_Winged_Restaurant.png",
						"https://pikmin.wiki.gallery/images/thumb/c/c2/Decor_Red_Chef_Hat_Rare.png/127px-Decor_Red_Chef_Hat_Rare.png",
						"https://pikmin.wiki.gallery/images/thumb/1/12/Decor_Yellow_Chef_Hat_Rare.png/102px-Decor_Yellow_Chef_Hat_Rare.png",
						"https://pikmin.wiki.gallery/images/b/b6/Decor_Blue_Chef_Hat_Rare.png",
					]}></Group>
				<Group
					category="Café"
					urls={[
						"https://pikmin.wiki.gallery/images/f/f4/Decor_Red_Caf%C3%A9.png",
						"https://pikmin.wiki.gallery/images/c/cd/Decor_Yellow_Caf%C3%A9.png",
						"https://pikmin.wiki.gallery/images/6/6f/Decor_Blue_Caf%C3%A9.png",
						"https://pikmin.wiki.gallery/images/2/23/Decor_White_Caf%C3%A9.png",
						"https://pikmin.wiki.gallery/images/e/e9/Decor_Purple_Caf%C3%A9.png",
						"https://pikmin.wiki.gallery/images/c/c6/Decor_Rock_Caf%C3%A9.png",
						"https://pikmin.wiki.gallery/images/c/c7/Decor_Winged_Caf%C3%A9.png",
					]}></Group>
			</div>
		</main>
	);
}
