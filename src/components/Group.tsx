"use client";
import React, { useState, useEffect, Suspense } from "react";
import Pikmin from "@/components/Pikmin";
import TempPikmin from "@/components/TempPikmin";

export default function Group({
	category,
	description,
	urls,
}: {
	category: string;
	description: string;
	urls: string[];
}) {
	// assign a name to the pikmin group based on its attributes
	let groupName = "count" + category.replace(/\s+/g, "") + description.replace(/\s+/g, "");

	// hydrated is true when the local storage has been checked
	const [hydrated, setHydrated] = useState(false);
	// keeps track of how many pikmin the user has in the group
	const [groupCount, setGroupCount] = useState(0);

	// when the component mounts, check local storage for the group count and set variables accordingly
	useEffect(() => {
		if (typeof window !== "undefined") {
			const storedValue = localStorage.getItem(groupName);
			setGroupCount(storedValue ? parseInt(storedValue) : 0);
			setHydrated(true);
		}
	}, [groupName]);

	const pikmins = urls.map((url) => (
		<div key={url} className="pikmin">
			<Pikmin
				category={category}
				description={description}
				url={url}
				groupName={groupName}
				groupCount={groupCount}
				setGroupCount={setGroupCount}
			/>
		</div>
	));

	const tempPikmins = urls.map((url) => (
		<div key={url} className="pikmin">
			<TempPikmin category={category} description={description} url={url} />
		</div>
	));
	return (
		<>
			<div id={category.toLowerCase().replace(/\s+/g, "")} className="groupName">
				<div id={description.toLowerCase().replace(/\s+/g, "")}></div>
				{category} - {description}
			</div>
			{/* <Suspense fallback={<div>LOAD</div>}> */}
			{hydrated ? (
				<div>
					<div className="groupName">
						{groupCount} / {urls.length}
					</div>
					<div className="group bg-starting">{pikmins}</div>
				</div>
			) : (
				<div>
					<div className="groupName">... / {urls.length}</div>
					<div className="group bg-starting">{tempPikmins}</div>
				</div>
			)}
			{/* </Suspense> */}
		</>
	);
}
