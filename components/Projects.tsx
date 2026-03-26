"use client";

import { motion } from "framer-motion";
import ProjectCard from "@/components/ProjectCard";
import { SectionHeading } from "@/components/SectionHeading";
import Label from "@/components/Label";
import { useInView } from "@/hooks/useInView";
import type { ProjectCardItem } from "@/types";

const PROJECTS: ProjectCardItem[] = [
	{
		id: "1",
		title: "LG Uplus — 서비스 운영",
		image: "/images/project/pr_1.png",
		tags: ["Vue", "Nuxt"],
		large: true,
		metric: "",
	},
	{
		id: "2",
		title: "한양대학교 인터칼리지 - 신규 구축",
		image: "/images/project/pr_2.png",
		tags: ["Next.js", "TanStack Query", "Zustand"],
		large: false,
		metric: "",
	},
	{
		id: "3",
		title: "커머스 플랫폼 · 프로모션 운영 제작",
		image: "/images/project/pr_3.png",
		tags: ["Scroll Animation", "Interactive UI"],
		large: false,
		metric: "",
	},
	{
		id: "4",
		title: "대형 커머스 UI 구축 및 인터랙션 제작",
		image: "/images/project/pr_4.png",
		tags: ["HTML", "CSS", "JS"],
		large: false,
		metric: "",
	},
];

export default function Projects() {
	const { ref, inView } = useInView();

	return (
		<section
			id="projects"
			className="px-6 py-20 border-t border-border lg:px-6 md:py-20 sm:px-5 sm:py-16"
			ref={ref}
		>
			<div className="basic-content">
				<Label>Projects</Label>
				<SectionHeading>
					선별된
					<br />
					<span className="text-muted">주요 프로젝트</span>
				</SectionHeading>

				{/* 그리드: 기본 2열, sm 이하 1열 */}
				<div className="grid md:grid-cols-2 gap-4 grid-cols-1">
					{/* <motion.div
						className="col-span-2 sm:col-span-1"
						initial={{ opacity: 0, y: 32 }}
						animate={inView ? { opacity: 1, y: 0 } : {}}
						transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
					>
						<ProjectCard
							proj={PROJECTS[0]}
							aspectClass="aspect-[16/8] sm:aspect-[4/3]"
						/>
					</motion.div> */}

					{/* 나머지 3개 */}
					{PROJECTS.map((proj, i) => (
						<motion.div
							key={proj.id}
							initial={{ opacity: 0, y: 32 }}
							animate={inView ? { opacity: 1, y: 0 } : {}}
							transition={{
								duration: 0.7,
								delay: 0.08 + i * 0.08,
								ease: [0.16, 1, 0.3, 1],
							}}
						>
							<ProjectCard proj={proj} aspectClass="aspect-[4/3]" />
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
