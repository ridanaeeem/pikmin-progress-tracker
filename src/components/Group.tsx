import React from "react";
import Pikmin from "@/components/Pikmin";

export default function Group({
	category,
	description,
	urls,
}: {
	category: string;
	description: string;
	urls: string[];
}) {
	const pikmins = urls.map((url) => (
		<div key={url} className="pikmin">
			<Pikmin category={category} description={description} url={url} />
		</div>
	));
	return (
		<>
			<div id={category.toLowerCase().replace(/\s+/g, "")} className="groupName">
				<div id={description.toLowerCase().replace(/\s+/g, "")}></div>
				{category} - {description}
			</div>
			<div className="group bg-starting">{pikmins}</div>
		</>
	);
}
