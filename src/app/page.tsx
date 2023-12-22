import React from "react";
import Group from "@/components/Group";
export default function Home() {
	return (
		<main className="">
			<nav>
				<div id="title" className="">
					<a href="/">PIKMIN PROGRESS TRACKER</a>
				</div>
			</nav>
			<div className="account"></div>
			<div className="flex flex-col basis-0 items-center;">
				<Group
					category="Restaurant"
					description="Chef Hat"
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
					description="Coffee Cup"
					urls={[
						"https://pikmin.wiki.gallery/images/f/f4/Decor_Red_Caf%C3%A9.png",
						"https://pikmin.wiki.gallery/images/c/cd/Decor_Yellow_Caf%C3%A9.png",
						"https://pikmin.wiki.gallery/images/6/6f/Decor_Blue_Caf%C3%A9.png",
						"https://pikmin.wiki.gallery/images/2/23/Decor_White_Caf%C3%A9.png",
						"https://pikmin.wiki.gallery/images/e/e9/Decor_Purple_Caf%C3%A9.png",
						"https://pikmin.wiki.gallery/images/c/c6/Decor_Rock_Caf%C3%A9.png",
						"https://pikmin.wiki.gallery/images/c/c7/Decor_Winged_Caf%C3%A9.png",
					]}></Group>
				<Group
					category="Sweet Shop"
					description="Macaron"
					urls={[
						"https://pikmin.wiki.gallery/images/b/bf/Decor_Red_Sweetshop.png",
						"https://pikmin.wiki.gallery/images/b/bb/Decor_Yellow_Sweetshop.png",
						"https://pikmin.wiki.gallery/images/c/ce/Decor_Blue_Sweetshop.png",
						"https://pikmin.wiki.gallery/images/2/25/Decor_White_Sweetshop.png",
						"https://pikmin.wiki.gallery/images/thumb/c/c8/Decor_Purple_Sweetshop.png/190px-Decor_Purple_Sweetshop.png",
						"https://pikmin.wiki.gallery/images/thumb/e/e1/Decor_Rock_Sweetshop.png/154px-Decor_Rock_Sweetshop.png",
						"https://pikmin.wiki.gallery/images/9/9c/Decor_Winged_Sweetshop.png",
					]}></Group>
				<Group
					category="Sweet Shop"
					description="Donut"
					urls={[
						"https://pikmin.wiki.gallery/images/thumb/b/b4/Decor_Red_Sweetshop_2.png/200px-Decor_Red_Sweetshop_2.png",
						"https://pikmin.wiki.gallery/images/thumb/5/5e/Decor_Yellow_Sweetshop_2.png/200px-Decor_Yellow_Sweetshop_2.png",
						"https://pikmin.wiki.gallery/images/thumb/2/23/Decor_Blue_Sweetshop_2.png/200px-Decor_Blue_Sweetshop_2.png",
						"https://pikmin.wiki.gallery/images/7/7f/Decor_White_Sweetshop_2.png",
						"https://pikmin.wiki.gallery/images/thumb/a/ad/Decor_Purple_Sweetshop_2.png/200px-Decor_Purple_Sweetshop_2.png",
						"https://pikmin.wiki.gallery/images/thumb/5/50/Decor_Rock_Sweetshop_2.png/200px-Decor_Rock_Sweetshop_2.png",
						"https://pikmin.wiki.gallery/images/b/b7/Decor_Winged_Sweetshop_2.png",
					]}></Group>
				<Group
					category="Movie Theater"
					description="Popcorn Snack"
					urls={[
						"https://pikmin.wiki.gallery/images/thumb/7/74/Decor_Red_Movie_Theater.png/160px-Decor_Red_Movie_Theater.png",
						"https://pikmin.wiki.gallery/images/c/c3/Decor_Yellow_Movie_Theater.png",
						"https://pikmin.wiki.gallery/images/a/a9/Decor_Blue_Movie_Theater.png",
						"https://pikmin.wiki.gallery/images/8/82/Decor_White_Movie_Theater.png",
						"https://pikmin.wiki.gallery/images/3/36/Decor_Purple_Movie_Theater.png",
						"https://pikmin.wiki.gallery/images/4/4f/Decor_Rock_Movie_Theater.png",
						"https://pikmin.wiki.gallery/images/0/08/Decor_Winged_Movie_Theater.png",
					]}></Group>
				<Group
					category="Pharmacy"
					description="Toothbrush"
					urls={[
						"https://pikmin.wiki.gallery/images/thumb/d/d3/Decor_Red_Pharmacy.png/200px-Decor_Red_Pharmacy.png",
						"https://pikmin.wiki.gallery/images/thumb/e/eb/Decor_Yellow_Pharmacy.png/200px-Decor_Yellow_Pharmacy.png",
						"https://pikmin.wiki.gallery/images/thumb/4/48/Decor_Blue_Pharmacy.png/200px-Decor_Blue_Pharmacy.png",
						"https://pikmin.wiki.gallery/images/5/5c/Decor_White_Pharmacy.png",
						"https://pikmin.wiki.gallery/images/d/d4/Decor_Purple_Pharmacy.png",
						"https://pikmin.wiki.gallery/images/4/48/Decor_Rock_Pharmacy.png",
						"https://pikmin.wiki.gallery/images/8/85/Decor_Winged_Pharmacy.png",
					]}></Group>
				<Group
					category="Zoo"
					description="Dandelion"
					urls={[
						"https://pikmin.wiki.gallery/images/thumb/d/d9/Decor_Red_Zoo.png/200px-Decor_Red_Zoo.png",
						"https://pikmin.wiki.gallery/images/thumb/4/4f/Decor_Yellow_Zoo.png/200px-Decor_Yellow_Zoo.png",
						"https://pikmin.wiki.gallery/images/thumb/2/27/Decor_Blue_Zoo.png/200px-Decor_Blue_Zoo.png",
						"https://pikmin.wiki.gallery/images/c/ce/Decor_White_Zoo.png",
						"https://pikmin.wiki.gallery/images/1/14/Decor_Purple_Zoo.png",
						"https://pikmin.wiki.gallery/images/b/b5/Decor_Rock_Zoo.png",
						"https://pikmin.wiki.gallery/images/1/14/Decor_Winged_Zoo.png",
					]}></Group>
				<Group
					category="Forest"
					description="Stag Beetle"
					urls={[
						"https://pikmin.wiki.gallery/images/thumb/2/2f/Decor_Red_Forest_1.png/199px-Decor_Red_Forest_1.png",
						"https://pikmin.wiki.gallery/images/thumb/e/e6/Decor_Yellow_Forest_1.png/200px-Decor_Yellow_Forest_1.png",
						"https://pikmin.wiki.gallery/images/8/87/Decor_Blue_Forest_1.png",
						"https://pikmin.wiki.gallery/images/b/b7/Decor_White_Forest_1.png",
						"https://pikmin.wiki.gallery/images/5/54/Decor_Purple_Forest_1.png",
						"https://pikmin.wiki.gallery/images/thumb/e/e7/Decor_Rock_Forest_1.png/170px-Decor_Rock_Forest_1.png",
						"https://pikmin.wiki.gallery/images/1/14/Decor_Winged_Forest_1.png",
					]}></Group>
				<Group
					category="Forest"
					description="Acorn"
					urls={[
						"https://pikmin.wiki.gallery/images/a/aa/Decor_Red_Forest_2.png",
						"https://pikmin.wiki.gallery/images/7/7b/Decor_Yellow_Forest_2.png",
						"https://pikmin.wiki.gallery/images/6/6b/Decor_Blue_Forest_2.png",
						"https://pikmin.wiki.gallery/images/5/56/Decor_White_Forest_2.png",
						"https://pikmin.wiki.gallery/images/2/24/Decor_Purple_Forest_2.png",
						"https://pikmin.wiki.gallery/images/7/7d/Decor_Rock_Forest_2.png",
						"https://pikmin.wiki.gallery/images/5/57/Decor_Winged_Forest_2.png",
					]}></Group>
				<Group
					category="Waterside"
					description="Fishing Lure"
					urls={[
						"https://pikmin.wiki.gallery/images/thumb/0/00/Decor_Red_Waterside.png/200px-Decor_Red_Waterside.png",
						"https://pikmin.wiki.gallery/images/thumb/7/70/Decor_Yellow_Waterside.png/200px-Decor_Yellow_Waterside.png",
						"https://pikmin.wiki.gallery/images/thumb/7/79/Decor_Blue_Waterside.png/200px-Decor_Blue_Waterside.png",
						"https://pikmin.wiki.gallery/images/5/54/Decor_White_Waterside.png",
						"https://pikmin.wiki.gallery/images/2/28/Decor_Purple_Waterside.png",
						"https://pikmin.wiki.gallery/images/8/89/Decor_Rock_Waterside.png",
						"https://pikmin.wiki.gallery/images/1/12/Decor_Winged_Waterside.png",
					]}></Group>
				<Group
					category="Post Office"
					description="Stamp"
					urls={[
						"https://pikmin.wiki.gallery/images/4/48/Decor_Red_Post_Office.png",
						"https://pikmin.wiki.gallery/images/0/08/Decor_Yellow_Post_Office.png",
						"https://pikmin.wiki.gallery/images/7/70/Decor_Blue_Post_Office.png",
						"https://pikmin.wiki.gallery/images/2/23/Decor_White_Post_Office.png",
						"https://pikmin.wiki.gallery/images/7/71/Decor_Purple_Post_Office.png",
						"https://pikmin.wiki.gallery/images/a/a8/Decor_Rock_Post_Office.png",
						"https://pikmin.wiki.gallery/images/2/28/Decor_Winged_Post_Office.png",
					]}></Group>
				<Group
					category="Art Gallery"
					description="Picture Frame"
					urls={[
						"https://pikmin.wiki.gallery/images/8/8f/Decor_Red_Art_Gallery.png",
						"https://pikmin.wiki.gallery/images/2/2d/Decor_Yellow_Art_Gallery.png",
						"https://pikmin.wiki.gallery/images/thumb/1/13/Decor_Blue_Art_Gallery.png/200px-Decor_Blue_Art_Gallery.png",
						"https://pikmin.wiki.gallery/images/f/fa/Decor_White_Art_Gallery.png",
						"https://pikmin.wiki.gallery/images/b/be/Decor_Purple_Art_Gallery.png",
						"https://pikmin.wiki.gallery/images/4/41/Decor_Rock_Art_Gallery.png",
						"https://pikmin.wiki.gallery/images/7/73/Decor_Winged_Art_Gallery.png",
					]}></Group>
				<Group
					category="Airport"
					description="Toy Airplane"
					urls={[
						"https://pikmin.wiki.gallery/images/thumb/3/32/Decor_Red_Airport.png/200px-Decor_Red_Airport.png",
						"https://pikmin.wiki.gallery/images/thumb/b/bf/Decor_Yellow_Airport.png/200px-Decor_Yellow_Airport.png",
						"https://pikmin.wiki.gallery/images/thumb/5/57/Decor_Blue_Airport.png/200px-Decor_Blue_Airport.png",
						"https://pikmin.wiki.gallery/images/thumb/c/c1/Decor_White_Airport.png/200px-Decor_White_Airport.png",
						"https://pikmin.wiki.gallery/images/thumb/6/60/Decor_Purple_Airport.png/200px-Decor_Purple_Airport.png",
						"https://pikmin.wiki.gallery/images/thumb/f/fc/Decor_Rock_Airport.png/200px-Decor_Rock_Airport.png",
						"https://pikmin.wiki.gallery/images/thumb/e/e8/Decor_Winged_Airport.png/200px-Decor_Winged_Airport.png",
					]}></Group>
				<Group
					category="Station"
					description="Paper Train"
					urls={[
						"https://pikmin.wiki.gallery/images/9/91/Decor_Red_Station.png",
						"https://pikmin.wiki.gallery/images/5/57/Decor_Yellow_Station.png",
						"https://pikmin.wiki.gallery/images/c/c5/Decor_Blue_Station.png",
						"https://pikmin.wiki.gallery/images/0/06/Decor_White_Station.png",
						"https://pikmin.wiki.gallery/images/thumb/a/ab/Decor_Purple_Station.png/188px-Decor_Purple_Station.png",
						"https://pikmin.wiki.gallery/images/8/8a/Decor_Rock_Station.png",
						"https://pikmin.wiki.gallery/images/1/1f/Decor_Winged_Station.png",
					]}></Group>
				<Group
					category="Station"
					description="Ticket"
					urls={[
						"https://pikmin.wiki.gallery/images/4/42/Decor_Red_Ticket.png",
						"https://pikmin.wiki.gallery/images/f/fc/Decor_Yellow_Ticket.png",
						"https://pikmin.wiki.gallery/images/7/78/Decor_Blue_Ticket.png",
						"https://pikmin.wiki.gallery/images/b/be/Decor_White_Ticket.png",
						"https://pikmin.wiki.gallery/images/thumb/f/f9/Decor_Purple_Ticket.png/179px-Decor_Purple_Ticket.png",
						"https://pikmin.wiki.gallery/images/thumb/4/42/Decor_Rock_Ticket.png/200px-Decor_Rock_Ticket.png",
						"https://pikmin.wiki.gallery/images/d/dc/Decor_Winged_Ticket.png",
					]}></Group>
				<Group
					category="Beach"
					description="Shell"
					urls={[
						"https://pikmin.wiki.gallery/images/thumb/8/80/Decor_Red_Beach.png/200px-Decor_Red_Beach.png",
						"https://pikmin.wiki.gallery/images/3/38/Decor_Yellow_Beach.png",
						"https://pikmin.wiki.gallery/images/thumb/c/cc/Decor_Blue_Beach.png/200px-Decor_Blue_Beach.png",
						"https://pikmin.wiki.gallery/images/b/be/Decor_White_Beach.png",
						"https://pikmin.wiki.gallery/images/thumb/4/44/Decor_Purple_Beach.png/190px-Decor_Purple_Beach.png",
						"https://pikmin.wiki.gallery/images/thumb/0/0a/Decor_Rock_Beach.png/200px-Decor_Rock_Beach.png",
						"https://pikmin.wiki.gallery/images/9/95/Decor_Winged_Beach.png",
					]}></Group>
				<Group
					category="Burger Place"
					description="Burger"
					urls={[
						"https://pikmin.wiki.gallery/images/1/1d/Decor_Red_Hamburger_Shop.png",
						"https://pikmin.wiki.gallery/images/thumb/7/78/Decor_Yellow_Hamburger_Shop.png/200px-Decor_Yellow_Hamburger_Shop.png",
						"https://pikmin.wiki.gallery/images/thumb/6/6e/Decor_Blue_Hamburger_Shop.png/185px-Decor_Blue_Hamburger_Shop.png",
						"https://pikmin.wiki.gallery/images/9/99/Decor_White_Hamburger_Shop.png",
						"https://pikmin.wiki.gallery/images/thumb/8/89/Decor_Purple_Hamburger_Shop.png/200px-Decor_Purple_Hamburger_Shop.png",
						"https://pikmin.wiki.gallery/images/thumb/9/98/Decor_Rock_Hamburger_Shop.png/200px-Decor_Rock_Hamburger_Shop.png",
						"https://pikmin.wiki.gallery/images/a/a2/Decor_Winged_Hamburger_Shop.png",
					]}></Group>
				<Group
					category="Corner Store"
					description="Bottle Cap"
					urls={[
						"https://pikmin.wiki.gallery/images/3/36/Decor_Red_Mini-mart.png",
						"https://pikmin.wiki.gallery/images/a/af/Decor_Yellow_Mini-mart.png",
						"https://pikmin.wiki.gallery/images/f/f9/Decor_Blue_Mini-mart.png",
						"https://pikmin.wiki.gallery/images/b/bc/Decor_White_Mini-mart.png",
						"https://pikmin.wiki.gallery/images/5/55/Decor_Purple_Mini-mart.png",
						"https://pikmin.wiki.gallery/images/c/c2/Decor_Rock_Mini-mart.png",
						"https://pikmin.wiki.gallery/images/d/d4/Decor_Winged_Mini-mart.png",
					]}></Group>
				<Group
					category="Corner Store"
					description="Snack"
					urls={[
						"https://pikmin.wiki.gallery/images/4/49/Decor_Red_Snack.png",
						"https://pikmin.wiki.gallery/images/0/0a/Decor_Yellow_Snack.png",
						"https://pikmin.wiki.gallery/images/4/4a/Decor_Blue_Snack.png",
						"https://pikmin.wiki.gallery/images/4/4b/Decor_White_Snack.png",
						"https://pikmin.wiki.gallery/images/f/fb/Decor_Purple_Snack.png",
						"https://pikmin.wiki.gallery/images/e/eb/Decor_Rock_Snack.png",
						"https://pikmin.wiki.gallery/images/thumb/1/1f/Decor_Winged_Snack.png/200px-Decor_Winged_Snack.png",
					]}></Group>
				<Group
					category="Supermarket"
					description="Mushroom"
					urls={[
						"https://pikmin.wiki.gallery/images/c/cf/Decor_Red_Supermarket_1.png",
						"https://pikmin.wiki.gallery/images/b/b7/Decor_Yellow_Supermarket_1.png",
						"https://pikmin.wiki.gallery/images/b/be/Decor_Blue_Supermarket_1.png",
						"https://pikmin.wiki.gallery/images/d/da/Decor_White_Supermarket_1.png",
						"https://pikmin.wiki.gallery/images/2/21/Decor_Purple_Supermarket_1.png",
						"https://pikmin.wiki.gallery/images/thumb/4/47/Decor_Rock_Supermarket_1.png/169px-Decor_Rock_Supermarket_1.png",
						"https://pikmin.wiki.gallery/images/0/02/Decor_Winged_Supermarket_1.png",
					]}></Group>
				<Group
					category="Supermarket"
					description="Banana"
					urls={[
						"https://pikmin.wiki.gallery/images/thumb/2/2a/Decor_Red_Supermarket_2.png/200px-Decor_Red_Supermarket_2.png",
						"https://pikmin.wiki.gallery/images/thumb/3/34/Decor_Yellow_Supermarket_2.png/134px-Decor_Yellow_Supermarket_2.png",
						"https://pikmin.wiki.gallery/images/thumb/6/6a/Decor_Blue_Supermarket_2.png/141px-Decor_Blue_Supermarket_2.png",
						"https://pikmin.wiki.gallery/images/b/b9/Decor_White_Supermarket_2.png",
						"https://pikmin.wiki.gallery/images/thumb/c/ce/Decor_Purple_Supermarket_2.png/178px-Decor_Purple_Supermarket_2.png",
						"https://pikmin.wiki.gallery/images/thumb/8/8b/Decor_Rock_Supermarket_2.png/200px-Decor_Rock_Supermarket_2.png",
						"https://pikmin.wiki.gallery/images/3/37/Decor_Winged_Supermarket_2.png",
					]}></Group>
				<Group
					category="Bakery"
					description="Baguette"
					urls={[
						"https://pikmin.wiki.gallery/images/thumb/7/79/Decor_Red_Bakery.png/200px-Decor_Red_Bakery.png",
						"https://pikmin.wiki.gallery/images/thumb/1/1b/Decor_Yellow_Bakery.png/200px-Decor_Yellow_Bakery.png",
						"https://pikmin.wiki.gallery/images/thumb/7/7b/Decor_Blue_Bakery.png/200px-Decor_Blue_Bakery.png",
						"https://pikmin.wiki.gallery/images/thumb/3/3e/Decor_White_Bakery.png/200px-Decor_White_Bakery.png",
						"https://pikmin.wiki.gallery/images/thumb/6/6b/Decor_Purple_Bakery.png/200px-Decor_Purple_Bakery.png",
						"https://pikmin.wiki.gallery/images/thumb/4/4b/Decor_Rock_Bakery.png/200px-Decor_Rock_Bakery.png",
						"https://pikmin.wiki.gallery/images/thumb/f/f9/Decor_Winged_Bakery.png/200px-Decor_Winged_Bakery.png",
					]}></Group>
				<Group
					category="Hair Salon"
					description="Scissors"
					urls={[
						"https://pikmin.wiki.gallery/images/thumb/e/e7/Decor_Red_Hair_Salon.png/200px-Decor_Red_Hair_Salon.png",
						"https://pikmin.wiki.gallery/images/thumb/e/e7/Decor_Yellow_Hair_Salon.png/200px-Decor_Yellow_Hair_Salon.png",
						"https://pikmin.wiki.gallery/images/thumb/7/78/Decor_Blue_Hair_Salon.png/200px-Decor_Blue_Hair_Salon.png",
						"https://pikmin.wiki.gallery/images/3/3d/Decor_White_Hair_Salon.png",
						"https://pikmin.wiki.gallery/images/d/dc/Decor_Purple_Hair_Salon.png",
						"https://pikmin.wiki.gallery/images/7/7a/Decor_Rock_Hair_Salon.png",
						"https://pikmin.wiki.gallery/images/b/b0/Decor_Winged_Hair_Salon.png",
					]}></Group>
				<Group
					category="Clothes Store"
					description="Hair Tie"
					urls={[
						"https://pikmin.wiki.gallery/images/9/9b/Decor_Red_Clothing_Store.png",
						"https://pikmin.wiki.gallery/images/5/52/Decor_Yellow_Clothing_Store.png",
						"https://pikmin.wiki.gallery/images/4/42/Decor_Blue_Clothing_Store.png",
						"https://pikmin.wiki.gallery/images/4/4a/Decor_White_Clothing_Store.png",
						"https://pikmin.wiki.gallery/images/9/92/Decor_Purple_Clothing_Store.png",
						"https://pikmin.wiki.gallery/images/b/b0/Decor_Rock_Clothing_Store.png",
						"https://pikmin.wiki.gallery/images/4/46/Decor_Winged_Clothing_Store.png",
					]}></Group>
				<Group
					category="Park"
					description="Clover"
					urls={[
						"https://pikmin.wiki.gallery/images/1/1c/Decor_Red_Park.png",
						"https://pikmin.wiki.gallery/images/c/c0/Decor_Yellow_Park.png",
						"https://pikmin.wiki.gallery/images/2/27/Decor_Blue_Park.png",
						"https://pikmin.wiki.gallery/images/5/59/Decor_White_Park.png",
						"https://pikmin.wiki.gallery/images/b/b9/Decor_Purple_Park.png",
						"https://pikmin.wiki.gallery/images/2/21/Decor_Rock_Park.png",
						"https://pikmin.wiki.gallery/images/1/11/Decor_Winged_Park.png",
					]}></Group>
				<Group
					category="Park"
					description="Four-Leaf Clover"
					urls={[
						"https://pikmin.wiki.gallery/images/9/9f/Decor_Red_Park_4.png",
						"https://pikmin.wiki.gallery/images/8/8e/Decor_Yellow_Park_4.png",
						"https://pikmin.wiki.gallery/images/4/4b/Decor_Blue_Park_4.png",
						"https://pikmin.wiki.gallery/images/e/e1/Decor_White_Park_4.png",
						"https://pikmin.wiki.gallery/images/thumb/9/91/Decor_Purple_Park_4.png/200px-Decor_Purple_Park_4.png",
						"https://pikmin.wiki.gallery/images/thumb/4/48/Decor_Rock_Park_4.png/200px-Decor_Rock_Park_4.png",
						"https://pikmin.wiki.gallery/images/c/c1/Decor_Winged_Park_4.png",
					]}></Group>
				<Group
					category="Library Or Bookstore"
					description="Tiny Book"
					urls={[
						"https://pikmin.wiki.gallery/images/7/78/Decor_Red_Tiny_Book.png",
						"https://pikmin.wiki.gallery/images/6/6a/Decor_Yellow_Tiny_Book.png",
						"https://pikmin.wiki.gallery/images/f/f0/Decor_Blue_Tiny_Book.png",
						"https://pikmin.wiki.gallery/images/b/bd/Decor_White_Tiny_Book.png",
						"https://pikmin.wiki.gallery/images/thumb/e/ed/Decor_Purple_Tiny_Book.png/185px-Decor_Purple_Tiny_Book.png",
						"https://pikmin.wiki.gallery/images/thumb/4/46/Decor_Rock_Tiny_Book.png/200px-Decor_Rock_Tiny_Book.png",
						"https://pikmin.wiki.gallery/images/thumb/d/d8/Decor_Winged_Tiny_Book.png/191px-Decor_Winged_Tiny_Book.png",
					]}></Group>
				<Group
					category="Roadside"
					description="Green Sticker"
					urls={[
						"https://pikmin.wiki.gallery/images/9/99/Decor_Red_Roadside.png",
						"https://pikmin.wiki.gallery/images/b/bb/Decor_Yellow_Roadside.png",
						"https://pikmin.wiki.gallery/images/c/c9/Decor_Blue_Roadside.png",
						"https://pikmin.wiki.gallery/images/a/a2/Decor_White_Roadside.png",
						"https://pikmin.wiki.gallery/images/thumb/5/56/Decor_Purple_Roadside.png/179px-Decor_Purple_Roadside.png",
						"https://pikmin.wiki.gallery/images/thumb/0/08/Decor_Rock_Roadside_2.png/200px-Decor_Rock_Roadside_2.png",
						"https://pikmin.wiki.gallery/images/c/cf/Decor_Winged_Roadside_2.png",
					]}></Group>
				<Group
					category="Roadside"
					description="Blue Sticker"
					urls={[
						"https://pikmin.wiki.gallery/images/e/e7/Decor_Red_Roadside_2.png",
						"https://pikmin.wiki.gallery/images/3/3e/Decor_Yellow_Roadside_2.png",
						"https://pikmin.wiki.gallery/images/6/6e/Decor_Blue_Roadside_2.png",
						"https://pikmin.wiki.gallery/images/d/df/Decor_White_Roadside_2.png",
						"https://pikmin.wiki.gallery/images/thumb/f/f3/Decor_Purple_Roadside_2.png/179px-Decor_Purple_Roadside_2.png",
						"https://pikmin.wiki.gallery/images/thumb/0/08/Decor_Rock_Roadside_2.png/200px-Decor_Rock_Roadside_2.png",
						"https://pikmin.wiki.gallery/images/c/cf/Decor_Winged_Roadside_2.png",
					]}></Group>
				<Group
					category="Roadside"
					description="Yellow Sticker"
					urls={[
						"https://pikmin.wiki.gallery/images/d/db/Decor_Red_Roadside_3.png",
						"https://pikmin.wiki.gallery/images/c/c8/Decor_Yellow_Roadside_3.png",
						"https://pikmin.wiki.gallery/images/0/02/Decor_Blue_Roadside_3.png",
						"https://pikmin.wiki.gallery/images/1/16/Decor_White_Roadside_3.png",
						"https://pikmin.wiki.gallery/images/thumb/b/b4/Decor_Purple_Roadside_3.png/179px-Decor_Purple_Roadside_3.png",
						"https://pikmin.wiki.gallery/images/thumb/8/80/Decor_Rock_Roadside_3.png/200px-Decor_Rock_Roadside_3.png",
						"https://pikmin.wiki.gallery/images/1/1b/Decor_Winged_Roadside_3.png",
					]}></Group>
				<Group
					category="Roadside"
					description="Winter Sticker"
					urls={[
						"https://pikmin.wiki.gallery/images/b/b8/Decor_Red_Roadside_Winter.png",
						"https://pikmin.wiki.gallery/images/thumb/d/d1/Decor_Yellow_Roadside_Winter.png/200px-Decor_Yellow_Roadside_Winter.png",
						"https://pikmin.wiki.gallery/images/4/4a/Decor_Blue_Roadside_Winter.png",
						"https://pikmin.wiki.gallery/images/2/21/Decor_White_Roadside_Winter.png",
						"https://pikmin.wiki.gallery/images/thumb/2/2c/Decor_Purple_Roadside_Winter.png/179px-Decor_Purple_Roadside_Winter.png",
						"https://pikmin.wiki.gallery/images/thumb/d/d0/Decor_Rock_Roadside_Winter.png/200px-Decor_Rock_Roadside_Winter.png",
						"https://pikmin.wiki.gallery/images/b/b4/Decor_Winged_Roadside_Winter.png",
					]}></Group>
				<Group
					category="Roadside"
					description="Coin"
					urls={[
						"https://pikmin.wiki.gallery/images/2/27/Decor_Red_Roadside_Coin.png",
						"https://pikmin.wiki.gallery/images/d/d3/Decor_Yellow_Roadside_Coin.png",
						"https://pikmin.wiki.gallery/images/f/ff/Decor_Blue_Roadside_Coin.png",
						"https://pikmin.wiki.gallery/images/8/80/Decor_White_Roadside_Coin.png",
						"https://pikmin.wiki.gallery/images/thumb/3/3a/Decor_Purple_Roadside_Coin.png/186px-Decor_Purple_Roadside_Coin.png",
						"https://pikmin.wiki.gallery/images/thumb/f/f3/Decor_Rock_Roadside_Coin.png/200px-Decor_Rock_Roadside_Coin.png",
						"https://pikmin.wiki.gallery/images/3/31/Decor_Winged_Roadside_Coin.png",
					]}></Group>
				<Group
					category="Sushi Restaurant"
					description="Sushi"
					urls={[
						"https://pikmin.wiki.gallery/images/thumb/7/7d/Decor_Red_Sushi.png/200px-Decor_Red_Sushi.png",
						"https://pikmin.wiki.gallery/images/thumb/3/3d/Decor_Yellow_Sushi.png/200px-Decor_Yellow_Sushi.png",
						"https://pikmin.wiki.gallery/images/thumb/7/7b/Decor_Blue_Sushi.png/200px-Decor_Blue_Sushi.png",
						"https://pikmin.wiki.gallery/images/8/80/Decor_White_Sushi.png",
						"https://pikmin.wiki.gallery/images/thumb/e/ee/Decor_Purple_Sushi.png/197px-Decor_Purple_Sushi.png",
						"https://pikmin.wiki.gallery/images/thumb/4/4d/Decor_Rock_Sushi.png/200px-Decor_Rock_Sushi.png",
						"https://pikmin.wiki.gallery/images/thumb/4/42/Decor_Winged_Sushi.png/200px-Decor_Winged_Sushi.png",
					]}></Group>
				<Group
					category="Mountain"
					description="Mountain Pin Badge"
					urls={[
						"https://pikmin.wiki.gallery/images/thumb/0/0a/Decor_Red_Mountain.png/200px-Decor_Red_Mountain.png",
						"https://pikmin.wiki.gallery/images/thumb/2/29/Decor_Yellow_Mountain.png/200px-Decor_Yellow_Mountain.png",
						"https://pikmin.wiki.gallery/images/thumb/2/27/Decor_Blue_Mountain.png/200px-Decor_Blue_Mountain.png",
					]}></Group>
				<Group
					category="Stadium"
					description="Ball Keychain"
					urls={[
						"https://pikmin.wiki.gallery/images/4/46/Decor_Red_Stadium.png",
						"https://pikmin.wiki.gallery/images/6/6e/Decor_Yellow_Stadium.png",
						"https://pikmin.wiki.gallery/images/8/8c/Decor_Blue_Stadium.png",
					]}></Group>
				<Group
					category="Rainy Day"
					description="Leaf Hat"
					urls={[
						"https://pikmin.wiki.gallery/images/6/67/Decor_Blue_Rain_1.png",
						"https://pikmin.wiki.gallery/images/c/cc/Decor_Blue_Rain_2.png",
						"https://pikmin.wiki.gallery/images/1/18/Decor_Blue_Rain_3.png",
					]}></Group>
				<Group
					category="Snowy Day"
					description="Snow"
					urls={[
						"https://pikmin.wiki.gallery/images/a/a8/Decor_Blue_Snow.png",
						"https://pikmin.wiki.gallery/images/8/82/Decor_White_Snow.png",
					]}></Group>
				<Group
					category="Theme Park"
					description="Theme Park Ticket"
					urls={[
						"https://pikmin.wiki.gallery/images/thumb/c/c9/Decor_Red_Theme_Park_1.png/200px-Decor_Red_Theme_Park_1.png",
						"https://pikmin.wiki.gallery/images/thumb/9/99/Decor_Yellow_Theme_Park_1.png/200px-Decor_Yellow_Theme_Park_1.png",
						"https://pikmin.wiki.gallery/images/thumb/8/88/Decor_Blue_Theme_Park_1.png/200px-Decor_Blue_Theme_Park_1.png",
						"https://pikmin.wiki.gallery/images/thumb/7/76/Decor_Red_Theme_Park_2.png/200px-Decor_Red_Theme_Park_2.png",
						"https://pikmin.wiki.gallery/images/thumb/d/d7/Decor_Yellow_Theme_Park_2.png/200px-Decor_Yellow_Theme_Park_2.png",
						"https://pikmin.wiki.gallery/images/thumb/c/cc/Decor_Blue_Theme_Park_2.png/200px-Decor_Blue_Theme_Park_2.png",
					]}></Group>
				<Group
					category="Bus Stop"
					description="Bus Papercraft"
					urls={[
						"https://pikmin.wiki.gallery/images/2/28/Decor_Red_Bus_Stop.png",
						"https://pikmin.wiki.gallery/images/8/80/Decor_Yellow_Bus_Stop.png",
						"https://pikmin.wiki.gallery/images/3/31/Decor_Blue_Bus_Stop.png",
						"https://pikmin.wiki.gallery/images/3/30/Decor_White_Bus_Stop.png",
						"https://pikmin.wiki.gallery/images/thumb/2/2f/Decor_Purple_Bus_Stop.png/169px-Decor_Purple_Bus_Stop.png",
						"https://pikmin.wiki.gallery/images/thumb/a/ad/Decor_Rock_Bus_Stop.png/200px-Decor_Rock_Bus_Stop.png",
						"https://pikmin.wiki.gallery/images/thumb/5/52/Decor_Winged_Bus_Stop.png/182px-Decor_Winged_Bus_Stop.png",
					]}></Group>
				<Group
					category="Italian Restaurant"
					description="Pizza"
					urls={[
						"https://pikmin.wiki.gallery/images/thumb/c/c5/Decor_Red_Italian.png/200px-Decor_Red_Italian.png",
						"https://pikmin.wiki.gallery/images/thumb/0/00/Decor_Yellow_Italian.png/200px-Decor_Yellow_Italian.png",
						"https://pikmin.wiki.gallery/images/thumb/1/1f/Decor_Blue_Italian.png/200px-Decor_Blue_Italian.png",
						"https://pikmin.wiki.gallery/images/thumb/9/9b/Decor_White_Italian.png/200px-Decor_White_Italian.png",
						"https://pikmin.wiki.gallery/images/thumb/0/0c/Decor_Purple_Italian.png/200px-Decor_Purple_Italian.png",
						"https://pikmin.wiki.gallery/images/thumb/0/08/Decor_Rock_Italian.png/200px-Decor_Rock_Italian.png",
						"https://pikmin.wiki.gallery/images/thumb/c/c1/Decor_Winged_Italian.png/175px-Decor_Winged_Italian.png",
					]}></Group>
				<Group
					category="Ramen Restaurant"
					description="Ramen Keychain"
					urls={[
						"https://pikmin.wiki.gallery/images/thumb/a/a3/Decor_Red_Ramen.png/200px-Decor_Red_Ramen.png",
						"https://pikmin.wiki.gallery/images/a/a7/Decor_Yellow_Ramen.png",
						"https://pikmin.wiki.gallery/images/thumb/7/78/Decor_Blue_Ramen.png/200px-Decor_Blue_Ramen.png",
					]}></Group>
				<Group
					category="Bridge"
					description="Bridge Pin Badge"
					urls={[
						"https://pikmin.wiki.gallery/images/thumb/a/ab/Decor_Red_Bridge.png/200px-Decor_Red_Bridge.png",
						"https://pikmin.wiki.gallery/images/thumb/5/52/Decor_Yellow_Bridge.png/200px-Decor_Yellow_Bridge.png",
						"https://pikmin.wiki.gallery/images/thumb/3/37/Decor_Blue_Bridge.png/200px-Decor_Blue_Bridge.png",
					]}></Group>
				<Group
					category="Hotel"
					description="Hotel Amenities"
					urls={[
						"https://pikmin.wiki.gallery/images/thumb/2/2f/Decor_Red_Hotel.png/200px-Decor_Red_Hotel.png",
						"https://pikmin.wiki.gallery/images/thumb/a/a7/Decor_Yellow_Hotel.png/200px-Decor_Yellow_Hotel.png",
						"https://pikmin.wiki.gallery/images/thumb/7/7d/Decor_Blue_Hotel.png/200px-Decor_Blue_Hotel.png",
						"https://pikmin.wiki.gallery/images/0/05/Decor_White_Hotel.png",
						"https://pikmin.wiki.gallery/images/thumb/6/6d/Decor_Purple_Hotel.png/186px-Decor_Purple_Hotel.png",
						"https://pikmin.wiki.gallery/images/thumb/6/66/Decor_Rock_Hotel.png/200px-Decor_Rock_Hotel.png",
						"https://pikmin.wiki.gallery/images/thumb/4/49/Decor_Winged_Hotel.png/200px-Decor_Winged_Hotel.png",
					]}></Group>
				<Group
					category="Makeup Store"
					description="Makeup"
					urls={[
						"https://pikmin.wiki.gallery/images/thumb/2/2d/Decor_Red_Makeup.png/200px-Decor_Red_Makeup.png",
						"https://pikmin.wiki.gallery/images/thumb/e/e2/Decor_Yellow_Makeup.png/200px-Decor_Yellow_Makeup.png",
						"https://pikmin.wiki.gallery/images/4/42/Decor_Blue_Makeup.png",
						"https://pikmin.wiki.gallery/images/4/42/Decor_White_Makeup.png",
						"https://pikmin.wiki.gallery/images/thumb/a/a6/Decor_Purple_Makeup.png/193px-Decor_Purple_Makeup.png",
						"https://pikmin.wiki.gallery/images/thumb/b/bd/Decor_Rock_Makeup.png/200px-Decor_Rock_Makeup.png",
						"https://pikmin.wiki.gallery/images/thumb/7/70/Decor_Winged_Makeup.png/200px-Decor_Winged_Makeup.png",
					]}></Group>
				<Group
					category="Shrines and Temples"
					description="Fortune (Very Lucky)"
					urls={[
						"https://pikmin.wiki.gallery/images/4/4a/Decor_Red_Fortune_1.png",
						"https://pikmin.wiki.gallery/images/8/82/Decor_Yellow_Fortune_1.png",
						"https://pikmin.wiki.gallery/images/9/9b/Decor_Blue_Fortune_1.png",
					]}></Group>
				<Group
					category="Shrines and Temples"
					description="Fortune (Lucky)"
					urls={[
						"https://pikmin.wiki.gallery/images/thumb/8/87/Decor_Red_Fortune_2.png/200px-Decor_Red_Fortune_2.png",
						"https://pikmin.wiki.gallery/images/thumb/f/f1/Decor_Yellow_Fortune_2.png/200px-Decor_Yellow_Fortune_2.png",
						"https://pikmin.wiki.gallery/images/7/71/Decor_Blue_Fortune_2.png",
					]}></Group>
				<Group
					category="Shrines and Temples"
					description="Fortune (Pretty Lucky)"
					urls={[
						"https://pikmin.wiki.gallery/images/thumb/b/ba/Decor_Red_Fortune_3.png/200px-Decor_Red_Fortune_3.png",
						"https://pikmin.wiki.gallery/images/thumb/8/8c/Decor_Yellow_Fortune_3.png/200px-Decor_Yellow_Fortune_3.png",
						"https://pikmin.wiki.gallery/images/e/e6/Decor_Blue_Fortune_3.png",
					]}></Group>
				<Group
					category="Shrines and Temples"
					description="Fortune (A Little Lucky)"
					urls={[
						"https://pikmin.wiki.gallery/images/thumb/7/70/Decor_Red_Fortune_4.png/200px-Decor_Red_Fortune_4.png",
						"https://pikmin.wiki.gallery/images/thumb/1/11/Decor_Yellow_Fortune_4.png/200px-Decor_Yellow_Fortune_4.png",
						"https://pikmin.wiki.gallery/images/b/b7/Decor_Blue_Fortune_4.png",
					]}></Group>
				<Group
					category="Shrines and Temples"
					description="Fortune (Future Luck)"
					urls={[
						"https://pikmin.wiki.gallery/images/thumb/2/2f/Decor_Red_Fortune_5.png/200px-Decor_Red_Fortune_5.png",
						"https://pikmin.wiki.gallery/images/thumb/6/65/Decor_Yellow_Fortune_5.png/200px-Decor_Yellow_Fortune_5.png",
						"https://pikmin.wiki.gallery/images/d/da/Decor_Blue_Fortune_5.png",
					]}></Group>
				<Group
					category="Appliances Store"
					description="Battery (Large & Small)"
					urls={[
						"https://pikmin.wiki.gallery/images/6/63/Decor_Yellow_L_Battery_1.png",
						"https://pikmin.wiki.gallery/images/5/50/Decor_Yellow_L_Battery_2.png",
						"https://pikmin.wiki.gallery/images/4/4e/Decor_Yellow_L_Battery_3.png",
						"https://pikmin.wiki.gallery/images/5/56/Decor_Yellow_S_Battery_1.png",
						"https://pikmin.wiki.gallery/images/7/70/Decor_Yellow_S_Battery_2.png",
						"https://pikmin.wiki.gallery/images/6/65/Decor_Yellow_S_Battery_3.png",
					]}></Group>
				<Group
					category="Appliances Store"
					description="Fairy Lights"
					urls={[
						"https://pikmin.wiki.gallery/images/4/4c/Decor_Yellow_Fairy_Lights_1.png",
						"https://pikmin.wiki.gallery/images/0/04/Decor_Yellow_Fairy_Lights_2.png",
					]}></Group>
				<Group
					category="Special"
					description="Mario Hat"
					urls={["https://pikmin.wiki.gallery/images/5/50/Decor_Special_Mario.png"]}></Group>
				<Group
					category="Special"
					description="Lunar New Year Ornament"
					urls={[
						"https://pikmin.wiki.gallery/images/thumb/1/15/Decor_Red_Special_Lunar_New_Year.png/200px-Decor_Red_Special_Lunar_New_Year.png",
						"https://pikmin.wiki.gallery/images/a/ac/Decor_Yellow_Special_Lunar_New_Year.png",
						"https://pikmin.wiki.gallery/images/thumb/1/16/Decor_Blue_Special_Lunar_New_Year.png/200px-Decor_Blue_Special_Lunar_New_Year.png",
						"https://pikmin.wiki.gallery/images/thumb/5/59/Decor_Red_Special_Lunar_New_Year_2.png/200px-Decor_Red_Special_Lunar_New_Year_2.png",
						"https://pikmin.wiki.gallery/images/5/50/Decor_Yellow_Special_Lunar_New_Year_2.png",
						"https://pikmin.wiki.gallery/images/thumb/0/0f/Decor_Blue_Special_Lunar_New_Year_2.png/200px-Decor_Blue_Special_Lunar_New_Year_2.png",
					]}></Group>
				<Group
					category="Special"
					description="White Chess Piece"
					urls={[
						"https://pikmin.wiki.gallery/images/thumb/e/e9/Decor_Red_Chess_1.png/73px-Decor_Red_Chess_1.png",
						"https://pikmin.wiki.gallery/images/7/76/Decor_Yellow_Chess_1.png",
						"https://pikmin.wiki.gallery/images/thumb/4/47/Decor_Blue_Chess_1.png/77px-Decor_Blue_Chess_1.png",
						"https://pikmin.wiki.gallery/images/5/54/Decor_White_Chess_1.png",
						"https://pikmin.wiki.gallery/images/thumb/f/fd/Decor_Purple_Chess_1.png/171px-Decor_Purple_Chess_1.png",
						"https://pikmin.wiki.gallery/images/thumb/0/0a/Decor_Rock_Chess_1.png/200px-Decor_Rock_Chess_1.png",
						"https://pikmin.wiki.gallery/images/thumb/b/be/Decor_Winged_Chess_1.png/107px-Decor_Winged_Chess_1.png",
					]}></Group>
				<Group
					category="Special"
					description="Black Chess Piece"
					urls={[
						"https://pikmin.wiki.gallery/images/thumb/e/ef/Decor_Red_Chess_2.png/106px-Decor_Red_Chess_2.png",
						"https://pikmin.wiki.gallery/images/thumb/3/3f/Decor_Yellow_Chess_2.png/101px-Decor_Yellow_Chess_2.png",
						"https://pikmin.wiki.gallery/images/thumb/1/18/Decor_Blue_Chess_2.png/124px-Decor_Blue_Chess_2.png",
						"https://pikmin.wiki.gallery/images/4/43/Decor_White_Chess_2.png",
						"https://pikmin.wiki.gallery/images/thumb/a/a3/Decor_Purple_Chess_2.png/87px-Decor_Purple_Chess_2.png",
						"https://pikmin.wiki.gallery/images/thumb/a/ab/Decor_Rock_Chess_2.png/177px-Decor_Rock_Chess_2.png",
						"https://pikmin.wiki.gallery/images/1/17/Decor_Winged_Chess_2.png",
					]}></Group>
				<Group
					category="Special"
					description="Fingerboard"
					urls={[
						"https://pikmin.wiki.gallery/images/thumb/7/7c/Decor_Red_Skateboard.png/200px-Decor_Red_Skateboard.png",
						"https://pikmin.wiki.gallery/images/thumb/3/33/Decor_Yellow_Skateboard.png/200px-Decor_Yellow_Skateboard.png",
						"https://pikmin.wiki.gallery/images/thumb/d/dd/Decor_Blue_Skateboard.png/200px-Decor_Blue_Skateboard.png",
						"https://pikmin.wiki.gallery/images/thumb/a/a2/Decor_White_Skateboard.png/200px-Decor_White_Skateboard.png",
						"https://pikmin.wiki.gallery/images/thumb/0/0d/Decor_Purple_Skateboard.png/200px-Decor_Purple_Skateboard.png",
						"https://pikmin.wiki.gallery/images/thumb/c/c3/Decor_Rock_Skateboard.png/200px-Decor_Rock_Skateboard.png",
						"https://pikmin.wiki.gallery/images/thumb/3/34/Decor_Winged_Skateboard.png/200px-Decor_Winged_Skateboard.png",
					]}></Group>
				<Group
					category="Special"
					description="Flower Card"
					urls={[
						"https://github.com/zviznemte/PikminBloomAssets/blob/main/Sprites/Pikmins/Picture%20Book/Red%20Pikmin/icon_Book_Pik0045_00_0.png?raw=true",
						"https://github.com/zviznemte/PikminBloomAssets/blob/main/Sprites/Pikmins/Picture%20Book/Red%20Pikmin/icon_Book_Pik0045_32_0.png?raw=true",
						"https://github.com/zviznemte/PikminBloomAssets/blob/main/Sprites/Pikmins/Picture%20Book/Red%20Pikmin/icon_Book_Pik0045_28_0.png?raw=true",
						"https://github.com/zviznemte/PikminBloomAssets/blob/main/Sprites/Pikmins/Picture%20Book/Red%20Pikmin/icon_Book_Pik0045_34_0.png?raw=true",
						"https://github.com/zviznemte/PikminBloomAssets/blob/main/Sprites/Pikmins/Picture%20Book/Red%20Pikmin/icon_Book_Pik0045_22_0.png?raw=true",
						"https://github.com/zviznemte/PikminBloomAssets/blob/main/Sprites/Pikmins/Picture%20Book/Red%20Pikmin/icon_Book_Pik0045_03_0.png?raw=true",
						"https://github.com/zviznemte/PikminBloomAssets/blob/main/Sprites/Pikmins/Picture%20Book/Yellow%20Pikmin/icon_Book_Pik0245_40_0.png?raw=true",
						"https://github.com/zviznemte/PikminBloomAssets/blob/main/Sprites/Pikmins/Picture%20Book/Yellow%20Pikmin/icon_Book_Pik0245_08_0.png?raw=true",
						"https://github.com/zviznemte/PikminBloomAssets/blob/main/Sprites/Pikmins/Picture%20Book/Yellow%20Pikmin/icon_Book_Pik0245_14_0.png?raw=true",
						"https://github.com/zviznemte/PikminBloomAssets/blob/main/Sprites/Pikmins/Picture%20Book/Yellow%20Pikmin/icon_Book_Pik0245_37_0.png?raw=true",
						"https://github.com/zviznemte/PikminBloomAssets/blob/main/Sprites/Pikmins/Picture%20Book/Yellow%20Pikmin/icon_Book_Pik0245_47_0.png?raw=true",
						"https://github.com/zviznemte/PikminBloomAssets/blob/main/Sprites/Pikmins/Picture%20Book/Yellow%20Pikmin/icon_Book_Pik0245_18_0.png?raw=true",
						"https://github.com/zviznemte/PikminBloomAssets/blob/main/Sprites/Pikmins/Picture%20Book/Blue%20Pikmin/icon_Book_Pik0145_24_0.png?raw=",
						"https://github.com/zviznemte/PikminBloomAssets/blob/main/Sprites/Pikmins/Picture%20Book/Blue%20Pikmin/icon_Book_Pik0145_06_0.png?raw=",
						"https://github.com/zviznemte/PikminBloomAssets/blob/main/Sprites/Pikmins/Picture%20Book/Blue%20Pikmin/icon_Book_Pik0145_43_0.png?raw=",
						"https://github.com/zviznemte/PikminBloomAssets/blob/main/Sprites/Pikmins/Picture%20Book/Blue%20Pikmin/icon_Book_Pik0145_38_0.png?raw=",
						"https://github.com/zviznemte/PikminBloomAssets/blob/main/Sprites/Pikmins/Picture%20Book/Blue%20Pikmin/icon_Book_Pik0145_30_0.png?raw=",
						"https://github.com/zviznemte/PikminBloomAssets/blob/main/Sprites/Pikmins/Picture%20Book/Blue%20Pikmin/icon_Book_Pik0145_15_0.png?raw=",
						"https://github.com/zviznemte/PikminBloomAssets/blob/main/Sprites/Pikmins/Picture%20Book/Purple%20Pikmin/icon_Book_Pik0445_44_0.png?raw=true",
						"https://github.com/zviznemte/PikminBloomAssets/blob/main/Sprites/Pikmins/Picture%20Book/Purple%20Pikmin/icon_Book_Pik0445_16_0.png?raw=",
						"https://github.com/zviznemte/PikminBloomAssets/blob/main/Sprites/Pikmins/Picture%20Book/Purple%20Pikmin/icon_Book_Pik0445_20_0.png?raw=",
						"https://github.com/zviznemte/PikminBloomAssets/blob/main/Sprites/Pikmins/Picture%20Book/Purple%20Pikmin/icon_Book_Pik0445_05_0.png?raw=",
						"https://github.com/zviznemte/PikminBloomAssets/blob/main/Sprites/Pikmins/Picture%20Book/Purple%20Pikmin/icon_Book_Pik0445_26_0.png?raw=",
						"https://github.com/zviznemte/PikminBloomAssets/blob/main/Sprites/Pikmins/Picture%20Book/Purple%20Pikmin/icon_Book_Pik0445_10_0.png?raw=true",
					]}></Group>
				<Group
					category="Special"
					description="Jack-o'-lantern"
					urls={[
						"https://pikmin.wiki.gallery/images/b/b6/Decor_Red_Halloween.png",
						"https://pikmin.wiki.gallery/images/d/d6/Decor_Yellow_Halloween.png",
						"https://pikmin.wiki.gallery/images/5/57/Decor_Blue_Halloween.png",
						"https://pikmin.wiki.gallery/images/e/e2/Decor_White_Halloween.png",
						"https://pikmin.wiki.gallery/images/thumb/d/d1/Decor_Purple_Halloween.png/151px-Decor_Purple_Halloween.png",
						"https://pikmin.wiki.gallery/images/thumb/1/12/Decor_Rock_Halloween.png/200px-Decor_Rock_Halloween.png",
						"https://pikmin.wiki.gallery/images/a/a7/Decor_Winged_Halloween.png",
					]}></Group>
				<Group
					category="Special"
					description="Halloween Treat"
					urls={[
						"https://pikmin.wiki.gallery/images/4/4f/Decor_Red_Halloween_Treat.png",
						"https://pikmin.wiki.gallery/images/thumb/e/e7/Decor_Yellow_Halloween_Treat.png/200px-Decor_Yellow_Halloween_Treat.png",
						"https://pikmin.wiki.gallery/images/thumb/e/ee/Decor_Blue_Halloween_Treat.png/200px-Decor_Blue_Halloween_Treat.png",
						"https://pikmin.wiki.gallery/images/d/de/Decor_White_Halloween_Treat.png",
						"https://pikmin.wiki.gallery/images/thumb/7/7c/Decor_Purple_Halloween_Treat.png/200px-Decor_Purple_Halloween_Treat.png",
						"https://pikmin.wiki.gallery/images/thumb/3/37/Decor_Rock_Halloween_Treat.png/200px-Decor_Rock_Halloween_Treat.png",
						"https://pikmin.wiki.gallery/images/thumb/4/48/Decor_Winged_Halloween_Treat.png/200px-Decor_Winged_Halloween_Treat.png",
					]}></Group>
				<Group
					category="Special"
					description="First Anniversary Snack"
					urls={[
						"https://pikmin.wiki.gallery/images/thumb/2/2a/Decor_Red_1st_Anniversary.png/150px-Decor_Red_1st_Anniversary.png",
						"https://pikmin.wiki.gallery/images/thumb/5/56/Decor_Yellow_1st_Anniversary.png/150px-Decor_Yellow_1st_Anniversary.png",
						"https://pikmin.wiki.gallery/images/thumb/8/83/Decor_Blue_1st_Anniversary.png/150px-Decor_Blue_1st_Anniversary.png",
						"https://pikmin.wiki.gallery/images/thumb/0/09/Decor_White_1st_Anniversary.png/150px-Decor_White_1st_Anniversary.png",
						"https://pikmin.wiki.gallery/images/thumb/5/5e/Decor_Purple_1st_Anniversary.png/150px-Decor_Purple_1st_Anniversary.png",
						"https://pikmin.wiki.gallery/images/thumb/e/e6/Decor_Rock_1st_Anniversary.png/150px-Decor_Rock_1st_Anniversary.png",
						"https://pikmin.wiki.gallery/images/thumb/2/29/Decor_Winged_1st_Anniversary.png/150px-Decor_Winged_1st_Anniversary.png",
					]}></Group>
				<Group
					category="Special"
					description="Koppaite Space Suit"
					urls={[
						"https://pikmin.wiki.gallery/images/thumb/1/1e/Decor_Red_Koppaite.png/105px-Decor_Red_Koppaite.png",
						"https://pikmin.wiki.gallery/images/thumb/d/d4/Decor_Yellow_Koppaite.png/148px-Decor_Yellow_Koppaite.png",
						"https://pikmin.wiki.gallery/images/thumb/2/2e/Decor_Blue_Koppaite.png/139px-Decor_Blue_Koppaite.png",
					]}></Group>
				<Group
					category="Special"
					description="Mitten"
					urls={[
						"https://pikmin.wiki.gallery/images/thumb/d/da/Decor_Red_Mitten.png/144px-Decor_Red_Mitten.png",
						"https://pikmin.wiki.gallery/images/thumb/7/75/Decor_Yellow_Mitten.png/117px-Decor_Yellow_Mitten.png",
						"https://pikmin.wiki.gallery/images/thumb/3/3f/Decor_Blue_Mitten.png/141px-Decor_Blue_Mitten.png",
						"https://pikmin.wiki.gallery/images/thumb/3/3d/Decor_White_Mitten.png/115px-Decor_White_Mitten.png",
						"https://pikmin.wiki.gallery/images/thumb/4/4c/Decor_Purple_Mitten.png/104px-Decor_Purple_Mitten.png",
						"https://pikmin.wiki.gallery/images/thumb/3/3f/Decor_Rock_Mitten.png/128px-Decor_Rock_Mitten.png",
						"https://pikmin.wiki.gallery/images/thumb/1/10/Decor_Winged_Mitten.png/150px-Decor_Winged_Mitten.png",
					]}></Group>
				<Group
					category="Special"
					description="2023 Glasses"
					urls={[
						"https://pikmin.wiki.gallery/images/thumb/4/42/Decor_Red_2023_Glasses.png/150px-Decor_Red_2023_Glasses.png",
						"https://pikmin.wiki.gallery/images/thumb/0/0e/Decor_Yellow_2023_Glasses.png/150px-Decor_Yellow_2023_Glasses.png",
						"https://pikmin.wiki.gallery/images/thumb/e/e2/Decor_Blue_2023_Glasses.png/150px-Decor_Blue_2023_Glasses.png",
						"https://pikmin.wiki.gallery/images/thumb/a/a9/Decor_White_2023_Glasses.png/150px-Decor_White_2023_Glasses.png",
						"https://pikmin.wiki.gallery/images/thumb/8/8a/Decor_Purple_2023_Glasses.png/150px-Decor_Purple_2023_Glasses.png",
						"https://pikmin.wiki.gallery/images/thumb/7/72/Decor_Rock_2023_Glasses.png/150px-Decor_Rock_2023_Glasses.png",
						"https://pikmin.wiki.gallery/images/thumb/a/ad/Decor_Winged_2023_Glasses.png/150px-Decor_Winged_2023_Glasses.png",
					]}></Group>
				<Group
					category="Special"
					description="Present Sticker"
					urls={[
						"https://pikmin.wiki.gallery/images/thumb/e/ef/Decor_Red_Present_Sticker.png/141px-Decor_Red_Present_Sticker.png",
						"https://pikmin.wiki.gallery/images/thumb/6/66/Decor_Yellow_Present_Sticker.png/150px-Decor_Yellow_Present_Sticker.png",
						"https://pikmin.wiki.gallery/images/thumb/1/18/Decor_Blue_Present_Sticker.png/150px-Decor_Blue_Present_Sticker.png",
						"https://pikmin.wiki.gallery/images/thumb/4/42/Decor_White_Present_Sticker.png/150px-Decor_White_Present_Sticker.png",
						"https://pikmin.wiki.gallery/images/thumb/6/67/Decor_Purple_Present_Sticker.png/150px-Decor_Purple_Present_Sticker.png",
						"https://pikmin.wiki.gallery/images/thumb/c/cb/Decor_Rock_Present_Sticker.png/150px-Decor_Rock_Present_Sticker.png",
						"https://pikmin.wiki.gallery/images/thumb/f/fe/Decor_Winged_Present_Sticker.png/150px-Decor_Winged_Present_Sticker.png",
					]}></Group>
				<Group
					category="Special"
					description="Present Sticker (Gold)"
					urls={[
						"https://pikmin.wiki.gallery/images/thumb/f/f2/Decor_Red_Tour_Sticker.png/141px-Decor_Red_Tour_Sticker.png",
						"https://pikmin.wiki.gallery/images/thumb/5/53/Decor_Yellow_Tour_Sticker.png/150px-Decor_Yellow_Tour_Sticker.png",
						"https://pikmin.wiki.gallery/images/thumb/1/14/Decor_Blue_Tour_Sticker.png/150px-Decor_Blue_Tour_Sticker.png",
						"https://pikmin.wiki.gallery/images/thumb/4/4b/Decor_White_Tour_Sticker.png/150px-Decor_White_Tour_Sticker.png",
					]}></Group>
				<Group
					category="Special"
					description="Easter Egg"
					urls={[
						"https://pikmin.wiki.gallery/images/thumb/5/56/Decor_Red_Easter_Egg.png/131px-Decor_Red_Easter_Egg.png",
						"https://pikmin.wiki.gallery/images/thumb/7/71/Decor_Yellow_Easter_Egg.png/134px-Decor_Yellow_Easter_Egg.png",
						"https://pikmin.wiki.gallery/images/thumb/3/3e/Decor_Blue_Easter_Egg.png/127px-Decor_Blue_Easter_Egg.png",
						"https://pikmin.wiki.gallery/images/a/a6/Decor_White_Easter_Egg.png",
						"https://pikmin.wiki.gallery/images/thumb/2/26/Decor_Purple_Easter_Egg.png/111px-Decor_Purple_Easter_Egg.png",
						"https://pikmin.wiki.gallery/images/thumb/f/f9/Decor_Rock_Easter_Egg.png/139px-Decor_Rock_Easter_Egg.png",
						"https://pikmin.wiki.gallery/images/e/e5/Decor_Winged_Easter_Egg.png",
					]}></Group>
				<Group
					category="Special"
					description="Sneaker Keychain"
					urls={[
						"https://pikmin.wiki.gallery/images/thumb/b/b9/Decor_Red_Sneaker.png/150px-Decor_Red_Sneaker.png",
						"https://pikmin.wiki.gallery/images/thumb/4/44/Decor_Yellow_Sneaker.png/150px-Decor_Yellow_Sneaker.png",
						"https://pikmin.wiki.gallery/images/thumb/2/23/Decor_Blue_Sneaker.png/150px-Decor_Blue_Sneaker.png",
						"https://pikmin.wiki.gallery/images/thumb/e/e7/Decor_White_Sneaker.png/150px-Decor_White_Sneaker.png",
						"https://pikmin.wiki.gallery/images/thumb/0/0d/Decor_Purple_Sneaker.png/133px-Decor_Purple_Sneaker.png",
						"https://pikmin.wiki.gallery/images/thumb/e/e2/Decor_Rock_Sneaker.png/135px-Decor_Rock_Sneaker.png",
						"https://pikmin.wiki.gallery/images/thumb/7/73/Decor_Winged_Sneaker.png/150px-Decor_Winged_Sneaker.png",
					]}></Group>
				<Group
					category="Special"
					description="Pikmin 4 Spaceships"
					urls={[
						"https://pikmin.wiki.gallery/images/thumb/6/6f/Decor_Red_Rocket.png/150px-Decor_Red_Rocket.png",
						"https://pikmin.wiki.gallery/images/thumb/e/eb/Decor_Yellow_Rocket.png/150px-Decor_Yellow_Rocket.png",
						"https://pikmin.wiki.gallery/images/thumb/b/b9/Decor_Blue_Rocket.png/150px-Decor_Blue_Rocket.png",
						"https://pikmin.wiki.gallery/images/thumb/1/1f/Decor_White_Rocket.png/150px-Decor_White_Rocket.png",
						"https://pikmin.wiki.gallery/images/thumb/0/08/Decor_Purple_Rocket.png/150px-Decor_Purple_Rocket.png",
						"https://pikmin.wiki.gallery/images/thumb/9/99/Decor_Rock_Rocket.png/150px-Decor_Rock_Rocket.png",
						"https://pikmin.wiki.gallery/images/thumb/0/0b/Decor_Winged_Rocket.png/150px-Decor_Winged_Rocket.png",
					]}></Group>
				<Group
					category="Special"
					description="Mahjong Tiles"
					urls={[
						"https://pikmin.wiki.gallery/images/thumb/8/89/Decor_Red_Mahjong.png/148px-Decor_Red_Mahjong.png",
						"https://pikmin.wiki.gallery/images/thumb/8/8e/Decor_Yellow_Mahjong.png/150px-Decor_Yellow_Mahjong.png",
						"https://pikmin.wiki.gallery/images/thumb/0/07/Decor_Blue_Mahjong.png/150px-Decor_Blue_Mahjong.png",
						"https://pikmin.wiki.gallery/images/7/7e/Decor_White_Mahjong.png",
						"https://pikmin.wiki.gallery/images/thumb/a/a7/Decor_Purple_Mahjong.png/134px-Decor_Purple_Mahjong.png",
						"https://pikmin.wiki.gallery/images/thumb/d/de/Decor_Rock_Mahjong.png/150px-Decor_Rock_Mahjong.png",
						"https://pikmin.wiki.gallery/images/thumb/a/a6/Decor_Winged_Mahjong.png/150px-Decor_Winged_Mahjong.png",
						"https://pikmin.wiki.gallery/images/thumb/3/32/Decor_Red_Mahjong_2.png/148px-Decor_Red_Mahjong_2.png",
						"https://pikmin.wiki.gallery/images/thumb/a/ac/Decor_Yellow_Mahjong_2.png/150px-Decor_Yellow_Mahjong_2.png",
						"https://pikmin.wiki.gallery/images/thumb/4/45/Decor_Blue_Mahjong_2.png/150px-Decor_Blue_Mahjong_2.png",
						"https://pikmin.wiki.gallery/images/4/40/Decor_White_Mahjong_2.png",
						"https://pikmin.wiki.gallery/images/thumb/7/79/Decor_Purple_Mahjong_2.png/134px-Decor_Purple_Mahjong_2.png",
						"https://pikmin.wiki.gallery/images/thumb/e/ef/Decor_Rock_Mahjong_2.png/150px-Decor_Rock_Mahjong_2.png",
						"https://pikmin.wiki.gallery/images/thumb/1/10/Decor_Winged_Mahjong_2.png/150px-Decor_Winged_Mahjong_2.png",
					]}></Group>
				<Group
					category="Special"
					description="Ice Cream"
					urls={[
						"https://pikmin.wiki.gallery/images/thumb/8/85/Decor_Red_Ice_Cream.png/150px-Decor_Red_Ice_Cream.png",
						"https://pikmin.wiki.gallery/images/thumb/e/e6/Decor_Yellow_Ice_Cream.png/146px-Decor_Yellow_Ice_Cream.png",
						"https://pikmin.wiki.gallery/images/thumb/a/a7/Decor_Blue_Ice_Cream.png/114px-Decor_Blue_Ice_Cream.png",
						"https://pikmin.wiki.gallery/images/thumb/c/cd/Decor_White_Ice_Cream.png/150px-Decor_White_Ice_Cream.png",
						"https://pikmin.wiki.gallery/images/thumb/4/40/Decor_Purple_Ice_Cream.png/140px-Decor_Purple_Ice_Cream.png",
						"https://pikmin.wiki.gallery/images/thumb/f/f7/Decor_Rock_Ice_Cream.png/150px-Decor_Rock_Ice_Cream.png",
						"https://pikmin.wiki.gallery/images/thumb/0/0b/Decor_Winged_Ice_Cream.png/150px-Decor_Winged_Ice_Cream.png",
					]}></Group>
				<Group
					category="Special"
					description="Puzzle: 2021 Fall Memories"
					urls={[
						"https://pikmin.wiki.gallery/images/thumb/c/c1/Decor_Red_Puzzle_1.png/150px-Decor_Red_Puzzle_1.png",
						"https://pikmin.wiki.gallery/images/b/b0/Decor_Yellow_Puzzle_1.png",
						"https://pikmin.wiki.gallery/images/6/6b/Decor_Blue_Puzzle_1.png",
						"https://pikmin.wiki.gallery/images/6/64/Decor_White_Puzzle_1.png",
						"https://pikmin.wiki.gallery/images/thumb/f/f9/Decor_Purple_Puzzle_1.png/144px-Decor_Purple_Puzzle_1.png",
						"https://pikmin.wiki.gallery/images/thumb/0/08/Decor_Rock_Puzzle_1.png/150px-Decor_Rock_Puzzle_1.png",
						"https://pikmin.wiki.gallery/images/8/8d/Decor_Winged_Puzzle_1.png",
					]}></Group>
				<Group
					category="Special"
					description="Puzzle: 2022 Summer Memories"
					urls={[
						"https://pikmin.wiki.gallery/images/thumb/c/c4/Decor_Red_Puzzle_2.png/150px-Decor_Red_Puzzle_2.png",
						"https://pikmin.wiki.gallery/images/thumb/c/c7/Decor_Yellow_Puzzle_2.png/150px-Decor_Yellow_Puzzle_2.png",
						"https://pikmin.wiki.gallery/images/thumb/1/13/Decor_Blue_Puzzle_2.png/150px-Decor_Blue_Puzzle_2.png",
						"https://pikmin.wiki.gallery/images/thumb/6/66/Decor_White_Puzzle_2.png/150px-Decor_White_Puzzle_2.png",
						"https://pikmin.wiki.gallery/images/thumb/7/7b/Decor_Purple_Puzzle_2.png/135px-Decor_Purple_Puzzle_2.png",
						"https://pikmin.wiki.gallery/images/thumb/0/04/Decor_Rock_Puzzle_2.png/150px-Decor_Rock_Puzzle_2.png",
						"https://pikmin.wiki.gallery/images/thumb/6/61/Decor_Winged_Puzzle_2.png/150px-Decor_Winged_Puzzle_2.png",
					]}></Group>
			</div>
		</main>
	);
}
