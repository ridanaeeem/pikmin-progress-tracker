import React from "react";
import Link from "next/link";

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
			</div>
			<div id="iconDisplay">
				<Link href="#restaurant">
					<img
						src="https://pikmin.wiki.gallery/images/thumb/1/13/Restaurant_icon.png/48px-Restaurant_icon.png"
						alt="restaurant"
					/>
				</Link>
				<Link href="#café">
					<img
						src="https://pikmin.wiki.gallery/images/thumb/5/59/Caf%C3%A9_icon.png/48px-Caf%C3%A9_icon.png"
						alt="café"
					/>
				</Link>
				<Link href="#sweetshop">
					<img
						src="https://pikmin.wiki.gallery/images/thumb/3/37/Sweetshop_icon.png/48px-Sweetshop_icon.png"
						alt="sweet shop"
					/>
				</Link>
				<Link href="#movietheater">
					<img
						src="https://pikmin.wiki.gallery/images/thumb/9/9d/Movie_Theater_icon.png/48px-Movie_Theater_icon.png"
						alt="movie theater"
					/>
				</Link>
				<Link href="#pharmacy">
					<img
						src="https://pikmin.wiki.gallery/images/thumb/7/79/Pharmacy_icon.png/48px-Pharmacy_icon.png"
						alt="pharmacy"
					/>
				</Link>
				<Link href="#zoo">
					<img src="https://pikmin.wiki.gallery/images/thumb/5/5e/Zoo_icon.png/48px-Zoo_icon.png" alt="zoo" />
				</Link>
				<Link href="#forest">
					<img
						src="https://pikmin.wiki.gallery/images/thumb/2/20/Forest_icon.png/48px-Forest_icon.png"
						alt="forest"
					/>
				</Link>
				<Link href="#waterside">
					<img
						src="https://pikmin.wiki.gallery/images/thumb/3/3e/Waterside_icon.png/48px-Waterside_icon.png"
						alt="waterside"
					/>
				</Link>
				<Link href="#postoffice">
					<img
						src="https://pikmin.wiki.gallery/images/thumb/7/7e/Post_Office_icon.png/48px-Post_Office_icon.png"
						alt="post office"
					/>
				</Link>
				<Link href="#artgallery">
					<img
						src="https://pikmin.wiki.gallery/images/thumb/d/de/Art_Gallery_icon.png/48px-Art_Gallery_icon.png"
						alt="art gallery"
					/>
				</Link>
				<Link href="#airport">
					<img
						src="https://pikmin.wiki.gallery/images/thumb/8/81/Airport_icon.png/48px-Airport_icon.png"
						alt="airport"
					/>
				</Link>
				<Link href="#station">
					<img
						src="https://pikmin.wiki.gallery/images/thumb/9/9a/Station_icon.png/48px-Station_icon.png"
						alt="station"
					/>
				</Link>
				<Link href="#beach">
					<img
						src="https://pikmin.wiki.gallery/images/thumb/5/55/Beach_icon.png/48px-Beach_icon.png"
						alt="beach"
					/>
				</Link>
				<Link href="#burgerplace">
					<img
						src="https://pikmin.wiki.gallery/images/thumb/8/83/Burger_Place_icon.png/48px-Burger_Place_icon.png"
						alt="burger place"
					/>
				</Link>
				<Link href="#cornerstore">
					<img
						src="https://pikmin.wiki.gallery/images/thumb/1/15/Mini-mart_icon.png/48px-Mini-mart_icon.png"
						alt="corner store"
					/>
				</Link>
				<Link href="#supermarket">
					<img
						src="https://pikmin.wiki.gallery/images/thumb/6/61/Supermarket_icon.png/48px-Supermarket_icon.png"
						alt="supermarket"
					/>
				</Link>
				<Link href="#bakery">
					<img
						src="https://pikmin.wiki.gallery/images/thumb/a/ac/Bakery_icon.png/48px-Bakery_icon.png"
						alt="bakery"
					/>
				</Link>
				<Link href="#hairsalon">
					<img
						src="https://pikmin.wiki.gallery/images/thumb/b/b7/Hair_Salon_icon.png/48px-Hair_Salon_icon.png"
						alt="hair salon"
					/>
				</Link>
				<Link href="#clothesstore">
					<img
						src="https://pikmin.wiki.gallery/images/thumb/2/2e/Clothes_Store_icon.png/48px-Clothes_Store_icon.png"
						alt="clothes store"
					/>
				</Link>
				<Link href="#park">
					<img
						src="https://pikmin.wiki.gallery/images/thumb/0/0d/Park_icon.png/48px-Park_icon.png"
						alt="park"
					/>
				</Link>
				<Link href="#libraryorbookstore">
					<img
						src="https://pikmin.wiki.gallery/images/thumb/1/1f/Library_icon.png/48px-Library_icon.png"
						alt="libraryorbookstore"></img>
				</Link>
				<Link href="#roadside">
					<img
						src="https://pikmin.wiki.gallery/images/thumb/2/25/Roadside_icon.png/48px-Roadside_icon.png"
						alt="roadside"
					/>
				</Link>
				<Link href="#sushirestaurant">
					<img
						src="https://pikmin.wiki.gallery/images/thumb/7/77/Sushi_Restaurant_icon.png/48px-Sushi_Restaurant_icon.png"
						alt="sushi restaurant"
					/>
				</Link>
				<Link href="#mountain">
					<img
						src="https://pikmin.wiki.gallery/images/thumb/1/19/Mountain_icon.png/48px-Mountain_icon.png"
						alt="mountain"
					/>
				</Link>
				<Link href="#stadium">
					<img
						src="https://pikmin.wiki.gallery/images/thumb/c/cc/Stadium_icon.png/48px-Stadium_icon.png"
						alt="stadium"
					/>
				</Link>
				<Link href="#rainyday"></Link>
				<Link href="#snowyday"></Link>
				<Link href="#themepark">
					<img
						src="https://www.pikminwiki.com/images/thumb/9/90/ThemePark_icon.png/35px-ThemePark_icon.png"
						alt="theme park"
					/>
				</Link>
				<Link href="#busstop">
					<img
						src="https://www.pikminwiki.com/images/thumb/8/8e/Bus_Stop_icon.png/48px-Bus_Stop_icon.png"
						alt="bus stop"
					/>
				</Link>
				<Link href="#italianrestaurant">
					<img
						src="https://www.pikminwiki.com/images/thumb/d/d5/Italian_Restaurant_icon.png/35px-Italian_Restaurant_icon.png"
						alt="italian restaurant"
					/>
				</Link>
				<Link href="#ramenrestaurant">
					<img
						src="https://www.pikminwiki.com/images/thumb/3/3d/Ramen_Restaurant_icon.png/48px-Ramen_Restaurant_icon.png"
						alt="ramen restaurant"
					/>
				</Link>
				<Link href="#bridge">
					<img
						src="https://www.pikminwiki.com/images/thumb/4/4e/Bridge_icon.png/48px-Bridge_icon.png"
						alt="bridge"
					/>
				</Link>
				<Link href="#hotel">
					<img
						src="https://www.pikminwiki.com/images/thumb/2/2d/Hotel_icon.png/48px-Hotel_icon.png"
						alt="hotel"
					/>
				</Link>
				<Link href="#makeupstore">
					<img
						src="https://www.pikminwiki.com/images/thumb/5/50/Makeup_icon.png/48px-Makeup_icon.png"
						alt="makeup store"
					/>
				</Link>
				{/* <Link href="#shrinesandtemples">
				<img
					src="https://www.pikminwiki.com/images/thumb/3/3d/Shrine_icon.png/48px-Shrine_icon.png"
					alt="shrines and temples"
				/>
                </Link>
                <Link href="#appliancesstore">
                    <img
                        src="https://www.pikminwiki.com/images/thumb/6/67/Appliances_Store_icon.png/27px-Appliances_Store_icon.png"
                        alt="appliances store"
                        className="whiteIcon"
                    />
                </Link> */}
				<Link href="#special">
					<img
						src="https://www.pikminwiki.com/images/thumb/0/01/Special_icon.png/48px-Special_icon.png"
						alt="special"
					/>
				</Link>
			</div>
			<div id="specialDisplay">
				<Link href="#mariohat">Mario Hat</Link>
				<Link href="#lunarnewyearornament">Lunar New Year Ornament</Link>
				<Link href="#whitechesspiece">Chess Piece</Link>
				<Link href="#fingerboard">Fingerboard</Link>
				<Link href="#flowercard">Flower Card</Link>
				<Link href="#jack-o-lantern">Jack-o-lantern</Link>
				<Link href="#halloweentreat">Halloween Treat</Link>
				<Link href="#firstanniversarysnack">First Anniversary Snack</Link>
				<Link href="#koppaitespacesuit">Koppaite Space Suit</Link>
				<Link href="#mitten">Mitten</Link>
				<Link href="#2023glasses">2023 Glasses</Link>
				<Link href="#presentsticker">Present Sticker</Link>
				<Link href="#easteregg">Easter Egg</Link>
				<Link href="#sneakerkeychain">Sneaker Keychain</Link>
				<Link href="#pikmin4spaceships">Pikmin 4 Spaceships</Link>
				<Link href="#mahjongtiles">Mahjong Tiles</Link>
				<Link href="#icecream">Ice Cream</Link>
				<Link href="#puzzle:2021fallmemories">Puzzle: 2021 Fall Memories</Link>
				<Link href="#puzzle:2022summermemories">Puzzle: 2022 Summer Memories</Link>
			</div>
		</div>
	);
}
