"use client";

import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";
import Gallery from "@/app/new-projects/_components/Gallery";
import Section from "@/app/new-projects/_components/Section";
import { DOT_COLOR, LABEL_COLOR } from "@/app/new-projects/_lib/colorMaps";
import type { ProjectDetailData } from "@/app/new-projects/_types";
import { getNextProject } from "@/app/new-projects/_utils/helper";
import { cn } from "@/lib/cn";

const MotionLink = motion(Link)

export default function ProjectDetail({
	data,
}: {
	data: Array<ProjectDetailData>;
}) {
	const id = useParams().id;
	const project = data.find((project) => project.id === id) ?? data[0];
	const nextProject = getNextProject(data, id as string) ?? {
		title: "",
		href: "",
	};

	return (
		<div className="bg-bg min-h-screen">
			{/* Nav */}
			<nav className="sticky top-0 z-50 h-16 px-6 flex items-center justify-between bg-bg/90 backdrop-blur-xl border-b border-border lg:px-6 sm:px-5">
				<Link
					href="/"
					className="flex items-center gap-2 text-sm text-muted hover:text-fg transition-colors"
				>
					<ArrowLeft size={16} /> 목록으로
				</Link>
				<Link
					href="/"
					className="font-display text-xl italic flex items-center gap-2"
				>
					<img
						src="/images/logo.png"
						alt="이채영 로고"
						className="w-10 h-10 rounded-full"
					/>
				</Link>
				<a
					href="mailto:cycy8527@gmail.com"
					className="text-[0.75rem] font-medium tracking-[0.08em] uppercase px-5 py-2 border-[1.5px] border-fg rounded-full hover:bg-fg hover:text-bg transition-all sm:hidden"
				>
					Contact
				</a>
			</nav>

			{/* Hero */}
			<div className="px-6 pt-10 pb-16 lg:px-6 sm:px-5 sm:pt-14 sm:pb-10">
				<div className="flex items-center gap-2.5 mb-8 text-xs text-muted">
					<span>{project.num}</span>
					<span className="text-border">/</span>
					<span className="font-bold tracking-[0.12em] uppercase">
						{project.category}
					</span>
				</div>

				<motion.h1
					className="font-normal leading-[.96] tracking-[-0.03em] mb-7"
					style={{ fontSize: "clamp(2.8rem, 7vw, 6rem)" }}
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
				>
					{project.title.split("\n").map((line, i, arr) => (
						<span key={i}>
							{line}
							{i < arr.length - 1 && <br />}
						</span>
					))}
				</motion.h1>

				<motion.p
					className="text-base text-[#555] leading-[1.85] mb-9 sm:text-sm"
					initial={{ opacity: 0, y: 16 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.7, delay: 0.1 }}
				>
					{project.subtitle}
				</motion.p>

				<motion.div
					className="flex flex-wrap gap-2"
					initial={{ opacity: 0, y: 12 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.2 }}
				>
					{project.tags.map(({ label, outline }) => (
						<span
							key={label}
							className={cn(
								"text-xs px-4 py-1.5 rounded-full font-medium",
								outline
									? "border-[1.5px] border-border text-muted"
									: "bg-fg text-bg",
							)}
						>
							{label}
						</span>
					))}
				</motion.div>

				{project?.website && (
					<motion.a
						href={project.website}
						initial={{ opacity: 0, y: 12 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.3 }}
						target="_blank"
						className="inline-flex items-center gap-2 mt-4 text-xs font-medium px-4 py-2 rounded-full bg-fg text-bg hover:opacity-80 transition-opacity"
					>
						사이트 보기 <span>↗</span>
					</motion.a>
				)}
			</div>

			{/* Stats — 2열 */}
			<div className="grid grid-cols-2 border-b border-border border-t">
				{project.stats.map(({ label, value, sub }, i) => (
					<div
						key={label}
						className={cn(
							"px-6 py-7 lg:px-6 sm:px-5 sm:py-5",
							i === 0 && "border-r border-border",
						)}
					>
						<div className="text-[0.66rem] tracking-[0.13em] uppercase text-muted mb-2">
							{label}
						</div>
						<div className="font-display text-[1.5rem] leading-none tracking-tight">
							{value}
						</div>
						{sub && <div className="text-xs text-muted mt-1">{sub}</div>}
					</div>
				))}
			</div>

			{/* 갤러리 */}
			<Gallery images={project.images} fallback={project.coverFallback} />

			{/* 본문 */}
			<div
				className="max-w-[760px] mx-auto px-6 pb-24 lg:px-6 sm:px-5 sm:pb-16"
				style={{ paddingTop: "4.5rem" }}
			>
				{/* 개요 */}
				<Section label="프로젝트 개요">
					<p
						className="text-[0.95rem] leading-[1.9] text-[#333] mb-10"
						dangerouslySetInnerHTML={{ __html: project.overview }}
					/>
				</Section>

				<Section label="주요 작업 상세" last={!(!!project?.etc?.length)}>
					<div className="flex flex-col gap-10">
						{project.issueItems.map((issue, i) => (
							<div key={i}>
								<div className="flex gap-3 mb-10 md:mb-4 flex-col items-start flex-col-reverse md:flex-row">
									<div className="flex items-center gap-2">
										<div className="w-8 h-8 rounded-full bg-fg text-accent font-display italic text-sm flex items-center justify-center shrink-0">
											{i + 1}
										</div>
										<h3 className="text-[0.95rem] font-bold leading-snug">
											{issue.title}
										</h3>
									</div>
									{(issue.date || issue.contribution) && (
										<div className="flex gap-1.5 ml-0 text-xs md:ml-2">
											{issue.date && 
												<span className="rounded-lg border border-border px-2 py-1">
													{issue.date}
												</span>
											}
											<span className="rounded-lg border border-border px-2 py-1">
												기여도 {issue.contribution}
											</span>
										</div>
									)}
								</div>

								<div className="flex flex-col gap-3 pl-11">
									{issue.groups.map((group, gi) => (
										<div key={gi}>
											<div
												className={cn(
													"text-[0.68rem] font-bold tracking-[0.1em] uppercase mb-1.5",
													LABEL_COLOR[group.label] ?? "text-muted",
												)}
											>
												{group.label}
											</div>
											<ul className="flex flex-col gap-1.5">
												{group.items.map((item, ii) => (
													<li
														key={ii}
														className="flex items-start gap-2.5 text-[0.9rem] leading-[1.75] text-[#333]"
													>
														<span
															className={cn(
																"w-[5px] h-[5px] rounded-full shrink-0 mt-[9px]",
																DOT_COLOR[group.label] ?? "bg-muted",
															)}
														/>
														{item}
													</li>
												))}
											</ul>
										</div>
									))}
									{issue.website && 
										<a
											href={issue.website}
											target="_blank"
											className="inline-flex border-[1.5px] items-center gap-2 mt-4 text-xs self-start font-medium px-4 py-2 rounded-full border-border text-muted hover:opacity-80 transition-opacity"
										>
											해당 사이트 바로가기 <span>↗</span>
										</a>
									}
								</div>
							</div>
						))}
					</div>
				</Section>

				{/* 기타 경험 */}
				{project.etc &&
					project.etc.length > 0 &&
					project.etc.map((etcItem, i) => (
						<Section
							key={i}
							label={etcItem.label}
							arrange="column"
							last={i === (project.etc?.length ?? 0) - 1}
						>
							<ul className="flex flex-col gap-2.5">
								{etcItem.items.map((item, j) => (
									<li
										key={j}
										className="flex items-start gap-2.5 text-[0.9rem] leading-[1.75] text-[#333]"
									>
										<span className="text-muted shrink-0 mt-0.5 text-sm">
											→
										</span>
										{item}
									</li>
								))}
							</ul>
						</Section>
					))}
			</div>

			{/* 다음 프로젝트 */}

			<Link
				href={nextProject.href}
				className="border-t border-border px-6 py-8 flex items-center justify-between hover:bg-white transition-colors group lg:px-6 sm:px-5 sm:py-6"
			>
				<div>
					<div className="text-[0.66rem] text-muted uppercase tracking-[0.08em] mb-1">
						Next Project
					</div>
					<div className="text-base font-semibold">{nextProject.title}</div>
				</div>
				<ArrowRight
					size={20}
					className="text-muted group-hover:translate-x-1.5 transition-transform"
				/>
			</Link>
		</div>
	);
}

/* ── 헬퍼 ── */
