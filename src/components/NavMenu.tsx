import React from "react";

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
			<div className="flex">
				<a className="top h-100" href="/">
					Back to top
				</a>
				<a className="top h-100" href="#stats">
					Stats
				</a>
				<a className="top h-100" href="#about">
					About
				</a>
			</div>
			<div id="iconDisplay">
				<a href="#restaurant">
					<img
						src="https://pikmin.wiki.gallery/images/thumb/1/13/Restaurant_icon.png/48px-Restaurant_icon.png"
						alt="restaurant"
					/>
				</a>
				<a href="#café">
					<img
						src="https://pikmin.wiki.gallery/images/thumb/5/59/Caf%C3%A9_icon.png/48px-Caf%C3%A9_icon.png"
						alt="café"
					/>
				</a>
				<a href="#sweetshop">
					<img
						src="https://pikmin.wiki.gallery/images/thumb/3/37/Sweetshop_icon.png/48px-Sweetshop_icon.png"
						alt="sweet shop"
					/>
				</a>
				<a href="#movietheater">
					<img
						src="https://pikmin.wiki.gallery/images/thumb/9/9d/Movie_Theater_icon.png/48px-Movie_Theater_icon.png"
						alt="movie theater"
					/>
				</a>
				<a href="#pharmacy">
					<img
						src="https://pikmin.wiki.gallery/images/thumb/7/79/Pharmacy_icon.png/48px-Pharmacy_icon.png"
						alt="pharmacy"
					/>
				</a>
				<a href="#zoo">
					<img src="https://pikmin.wiki.gallery/images/thumb/5/5e/Zoo_icon.png/48px-Zoo_icon.png" alt="zoo" />
				</a>
				<a href="#forest">
					<img
						src="https://pikmin.wiki.gallery/images/thumb/2/20/Forest_icon.png/48px-Forest_icon.png"
						alt="forest"
					/>
				</a>
				<a href="#waterside">
					<img
						src="https://pikmin.wiki.gallery/images/thumb/3/3e/Waterside_icon.png/48px-Waterside_icon.png"
						alt="waterside"
					/>
				</a>
				<a href="#postoffice">
					<img
						src="https://pikmin.wiki.gallery/images/thumb/7/7e/Post_Office_icon.png/48px-Post_Office_icon.png"
						alt="post office"
					/>
				</a>
				<a href="#artgallery">
					<img
						src="https://pikmin.wiki.gallery/images/thumb/d/de/Art_Gallery_icon.png/48px-Art_Gallery_icon.png"
						alt="art gallery"
					/>
				</a>
				<a href="#airport">
					<img
						src="https://pikmin.wiki.gallery/images/thumb/8/81/Airport_icon.png/48px-Airport_icon.png"
						alt="airport"
					/>
				</a>
				<a href="#station">
					<img
						src="https://pikmin.wiki.gallery/images/thumb/9/9a/Station_icon.png/48px-Station_icon.png"
						alt="station"
					/>
				</a>
				<a href="#beach">
					<img
						src="https://pikmin.wiki.gallery/images/thumb/5/55/Beach_icon.png/48px-Beach_icon.png"
						alt="beach"
					/>
				</a>
				<a href="#burgerplace">
					<img
						src="https://pikmin.wiki.gallery/images/thumb/8/83/Burger_Place_icon.png/48px-Burger_Place_icon.png"
						alt="burger place"
					/>
				</a>
				<a href="#cornerstore">
					<img
						src="https://pikmin.wiki.gallery/images/thumb/1/15/Mini-mart_icon.png/48px-Mini-mart_icon.png"
						alt="corner store"
					/>
				</a>
				<a href="#supermarket">
					<img
						src="https://pikmin.wiki.gallery/images/thumb/6/61/Supermarket_icon.png/48px-Supermarket_icon.png"
						alt="supermarket"
					/>
				</a>
				<a href="#bakery">
					<img
						src="https://pikmin.wiki.gallery/images/thumb/a/ac/Bakery_icon.png/48px-Bakery_icon.png"
						alt="bakery"
					/>
				</a>
				<a href="#hairsalon">
					<img
						src="https://pikmin.wiki.gallery/images/thumb/b/b7/Hair_Salon_icon.png/48px-Hair_Salon_icon.png"
						alt="hair salon"
					/>
				</a>
				<a href="#clothesstore">
					<img
						src="https://pikmin.wiki.gallery/images/thumb/2/2e/Clothes_Store_icon.png/48px-Clothes_Store_icon.png"
						alt="clothes store"
					/>
				</a>
				<a href="#park">
					<img
						src="https://pikmin.wiki.gallery/images/thumb/0/0d/Park_icon.png/48px-Park_icon.png"
						alt="park"
					/>
				</a>
				<a href="#libraryorbookstore">
					<img
						src="https://pikmin.wiki.gallery/images/thumb/1/1f/Library_icon.png/48px-Library_icon.png"
						alt="libraryorbookstore"></img>
				</a>
				<a href="#roadside">
					<img
						src="https://pikmin.wiki.gallery/images/thumb/2/25/Roadside_icon.png/48px-Roadside_icon.png"
						alt="roadside"
					/>
				</a>
				<a href="#sushirestaurant">
					<img
						src="https://pikmin.wiki.gallery/images/thumb/7/77/Sushi_Restaurant_icon.png/48px-Sushi_Restaurant_icon.png"
						alt="sushi restaurant"
					/>
				</a>
				<a href="#mountain">
					<img
						src="https://pikmin.wiki.gallery/images/thumb/1/19/Mountain_icon.png/48px-Mountain_icon.png"
						alt="mountain"
					/>
				</a>
				<a href="#stadium">
					<img
						src="https://pikmin.wiki.gallery/images/thumb/c/cc/Stadium_icon.png/48px-Stadium_icon.png"
						alt="stadium"
					/>
				</a>
				<a href="#rainyday"></a>
				<a href="#snowyday"></a>
				<a href="#themepark">
					<img
						src="https://www.pikminwiki.com/images/thumb/9/90/ThemePark_icon.png/35px-ThemePark_icon.png"
						alt="theme park"
					/>
				</a>
				<a href="#busstop">
					<img
						src="https://www.pikminwiki.com/images/thumb/8/8e/Bus_Stop_icon.png/48px-Bus_Stop_icon.png"
						alt="bus stop"
					/>
				</a>
				<a href="#italianrestaurant">
					<img
						src="https://www.pikminwiki.com/images/thumb/d/d5/Italian_Restaurant_icon.png/35px-Italian_Restaurant_icon.png"
						alt="italian restaurant"
					/>
				</a>
				<a href="#ramenrestaurant">
					<img
						src="https://www.pikminwiki.com/images/thumb/3/3d/Ramen_Restaurant_icon.png/48px-Ramen_Restaurant_icon.png"
						alt="ramen restaurant"
					/>
				</a>
				<a href="#bridge">
					<img
						src="https://www.pikminwiki.com/images/thumb/4/4e/Bridge_icon.png/48px-Bridge_icon.png"
						alt="bridge"
					/>
				</a>
				<a href="#hotel">
					<img
						src="https://www.pikminwiki.com/images/thumb/2/2d/Hotel_icon.png/48px-Hotel_icon.png"
						alt="hotel"
					/>
				</a>
				<a href="#makeupstore">
					<img
						src="https://www.pikminwiki.com/images/thumb/5/50/Makeup_icon.png/48px-Makeup_icon.png"
						alt="makeup store"
					/>
				</a>
				{/* <a href="#shrinesandtemples">
				<img
					src="https://www.pikminwiki.com/images/thumb/3/3d/Shrine_icon.png/48px-Shrine_icon.png"
					alt="shrines and temples"
				/>
                </a>
                <a href="#appliancesstore">
                    <img
                        src="https://www.pikminwiki.com/images/thumb/6/67/Appliances_Store_icon.png/27px-Appliances_Store_icon.png"
                        alt="appliances store"
                        className="whiteIcon"
                    />
                </a> */}
				<a href="#special">
					<img
						src="https://www.pikminwiki.com/images/thumb/0/01/Special_icon.png/48px-Special_icon.png"
						alt="special"
					/>
				</a>
			</div>
			<div id="specialDisplay">
				<a href="#mariohat">Mario Hat</a>
				<a href="#lunarnewyearornament">Lunar New Year Ornament</a>
				<a href="#whitechesspiece">Chess Piece</a>
				<a href="#fingerboard">Fingerboard</a>
				<a href="#flowercard">Flower Card</a>
				<a href="#jack-o'-lantern">Jack-o'-lantern</a>
				<a href="#halloweentreat">Halloween Treat</a>
				<a href="#firstanniversarysnack">First Anniversary Snack</a>
				<a href="#koppaitespacesuit">Koppaite Space Suit</a>
				<a href="#mitten">Mitten</a>
				<a href="#2023glasses">2023 Glasses</a>
				<a href="#presentsticker">Present Sticker</a>
				<a href="#easteregg">Easter Egg</a>
				<a href="#sneakerkeychain">Sneaker Keychain</a>
				<a href="#pikmin4spaceships">Pikmin 4 Spaceships</a>
				<a href="#mahjongtiles">Mahjong Tiles</a>
				<a href="#icecream">Ice Cream</a>
				<a href="#puzzle:2021fallmemories">Puzzle: 2021 Fall Memories</a>
				<a href="#puzzle:2022summermemories">Puzzle: 2022 Summer Memories</a>
			</div>
		</div>
	);
}
