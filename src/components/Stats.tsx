import React from "react";

const GroupBreakdown = ({ stats }: { stats: Map<string, number> }) => {
	// Since this will only be called when statsOk is true, we can safely process the stats
	const entriesArray = Array.from(stats.entries());
	console.log(stats);

	return (
		<div>
			{entriesArray.map(
				([key, value]) =>
					value !== 0 && (
						<div key={key}>
							{key}: {value}
						</div>
					)
			)}
		</div>
	);
};

export default function Stats({ stats, statsOk }: { stats: Map<string, number>; statsOk: boolean }) {
	return (
		<div id="stats" className="text-center p-10 text-xl">
			{statsOk ? <GroupBreakdown stats={stats} /> : "stats loading"}
		</div>
	);
}
