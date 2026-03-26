import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import type { ProjectCardItem } from "@/types";

export default function ProjectCard({
	proj,
	aspectClass,
}: {
	proj: ProjectCardItem;
	aspectClass: string;
}) {
	return (
		<Link
			href={`/new-projects/${proj.id}`}
			className={`group relative block w-full rounded-[20px] overflow-hidden bg-border ${aspectClass}`}
		>
			{/* eslint-disable-next-line @next/next/no-img-element */}
			<img
				src={proj.image}
				alt={proj.title}
				className="absolute inset-0 w-full h-full object-contain transition-transform duration-[600ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.05]"
			/>
			<div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />

			{/* 우상단 화살표 */}
			<div className="absolute top-5 right-5 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200">
				<ArrowUpRight size={22} className="text-white" />
			</div>

			{/* 호버 시 성과 뱃지 */}
			{/* <div className="absolute top-5 left-5 text-[0.68rem] font-semibold px-2.5 py-1 rounded-full bg-accent text-fg opacity-0 group-hover:opacity-100 transition-opacity duration-200">
				{proj.metric}
			</div> */}

			{/* 하단 정보 */}
			<div className="absolute bottom-0 inset-x-0 p-4 sm:p-5">
				<h3 className="text-base font-semibold text-white mb-2 leading-tight">
					{proj.title}
				</h3>
				<div className="flex gap-1.5 flex-wrap">
					{proj.tags.map((tag) => (
						<span
							key={tag}
							className="text-[0.68rem] px-2.5 py-0.5 rounded-full bg-white/15 text-white/80 backdrop-blur-sm"
						>
							{tag}
						</span>
					))}
				</div>
			</div>
		</Link>
	);
}
