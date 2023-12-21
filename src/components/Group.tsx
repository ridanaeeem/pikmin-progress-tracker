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
			<Pikmin category={category} url={url} />
		</div>
	));
	return (
		<>
			<div className="groupName">
				{category} - {description}
			</div>
			<div id={category.toLowerCase().replace(/\s+/g, '')} className="group bg-slate-400">
				{pikmins}
			</div>
		</>
	);
}
