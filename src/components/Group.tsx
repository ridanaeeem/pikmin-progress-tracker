import React from "react";
import Pikmin from "@/components/Pikmin";

export default function Group({ category, urls }: { category: string; urls: string[] }) {
	const pikmins = urls.map((url) => (
		<div key={url} className="pikmin">
			<Pikmin category={category} url={url} />
		</div>
	));
	return (
		<>
			<div>{category}</div>
			<div className="group ">{pikmins}</div>
		</>
	);
}
