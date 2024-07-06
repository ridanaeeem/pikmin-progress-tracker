import Link from "next/link";
import { redirect } from "next/navigation";
import React from "react";

export default function Clear() {
	return (
		<Link
			href="/"
			className="flex-1 m-1 rounded-full bg-black text-white flex justify-center items-center"
			onClick={() => {
				if (window.confirm("Are you sure you want to clear all of your locally saved progress?")) {
					localStorage.clear();
					redirect("/");
				}
			}}>
			Clear
		</Link>
	);
}
