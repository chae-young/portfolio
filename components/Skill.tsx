"use client";

import { motion } from "framer-motion";
import Label from "@/components/Label";
import { useInView } from "@/hooks/useInView";
import { cn } from "@/lib/cn";

const SKILLS = [
	{
		icon: "",
		title: "Frontend Development",
		items: [
			{ label: "React", hi: true },
			{ label: "Next.js", hi: true },
			{ label: "JavaScript", hi: true },
			{ label: "TypeScript", hi: true },
			{ label: "HTML", hi: true },
			{ label: "CSS", hi: true },
			// { label: "Vue.js", hi: false },
			// { label: "Nuxt", hi: false },
			{ label: "Zustand", hi: false },
			{ label: "TanStack Query", hi: false },
		],
	},
	{
		icon: "",
		title: "Styling & UI",
		items: [
			{ label: "Tailwind CSS", hi: true },
			{ label: "Styled-Components", hi: true },
			{ label: "SCSS", hi: false },
			{ label: "Radix UI", hi: false },
			{ label: "Shadcn UI", hi: false },
		],
	},
	{
		icon: "",
		title: "Tools & Workflow",
		items: [
			{ label: "Figma", hi: true },
			{ label: "Git", hi: false },
			{ label: "Jira", hi: false },
			{ label: "Claude Code", hi: false },
			{ label: "Cursor", hi: false },
		],
	},
];

export default function Skill() {
	const { ref, inView } = useInView();

	return (
		<section
			id="skill"
			className="px-6 py-20 border-t border-border lg:px-6 md:py-20 sm:px-5 sm:py-16"
			ref={ref}
		>
			<div className="basic-content">
				<Label>Skills</Label>
				<h2
					className="font-normal mb-14 sm:mb-10"
					style={{ fontSize: "clamp(1.8rem, 3.5vw, 3rem)", lineHeight: 1.1 }}
				>
					탄탄하게 쌓아온
					<br />
					<span className="text-muted">기술 스택</span>
				</h2>

				{/* 카드 그리드 — 모바일에서는 세로 스택 */}
				<div className="grid md:grid-cols-3 gap-px bg-border rounded-[20px] overflow-hidden grid-cols-1">
					{SKILLS.map((skill, i) => (
						<motion.div
							key={skill.title}
							className="bg-card px-8 py-9 hover:bg-bg transition-colors duration-200 sm:px-6 sm:py-7"
							initial={{ opacity: 0, y: 24 }}
							animate={inView ? { opacity: 1, y: 0 } : {}}
							transition={{
								duration: 0.6,
								delay: i * 0.1,
								ease: [0.16, 1, 0.3, 1],
							}}
						>
							<h3 className="text-[0.75rem] font-semibold tracking-[0.1em] uppercase mb-5 text-fg">
								{skill.title}
							</h3>
							<div className="flex flex-wrap gap-2">
								{skill.items.map(({ label, hi }) => (
									<span
										key={label}
										className={cn(
											"text-xs px-3 py-1 rounded-full border transition-colors",
											hi
												? "bg-accent border-accent text-fg font-semibold"
												: "bg-bg border-border text-fg",
										)}
									>
										{label}
									</span>
								))}
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
