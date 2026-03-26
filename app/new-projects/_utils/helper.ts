import type { Route } from "next";
import type { ProjectDetailData } from "@/app/new-projects/_types";

export const getNextProject = (
	projects: Array<ProjectDetailData>,
	currentId: string,
) => {
	const currentIndex = projects.findIndex((p) => p.id === currentId);
	if (currentIndex === -1) return null;
	const nextIndex = (currentIndex + 1) % projects.length;
	const next = projects[nextIndex];
	console.log(next)
	return {
		title: next.title,
		href: `/new-projects/${next.id}` as Route,
	};
};
