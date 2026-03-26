"use client";

import { motion } from "framer-motion";
import { Mail, BookOpen, Github } from "lucide-react";
import Link from "next/link";
import { useInView } from "@/hooks/useInView";

const SOCIALS = [
	{ icon: Mail, label: "Email", href: "mailto:cycy8527@gmail.com" },
	{ icon: BookOpen, label: "Blog", href: "https://chaeyoung2.tistory.com/" },
	{ icon: Github, label: "GitHub", href: "https://github.com/chae-young" },
];

export default function Contact() {
	const { ref, inView } = useInView();
	const letters = "Mail me".split("");
	return (
		<>
			<section
				id="contact"
				className="px-6 py-20 border-t border-border lg:px-6 md:py-20 sm:px-5 sm:py-16"
				ref={ref}
			>
				<div className="basic-content max-w-3xl">
					<span className="inline-block text-[0.68rem] tracking-[0.14em] uppercase text-muted px-3 py-1.5 border border-border rounded-full mb-6">
						Contact
					</span>

					<motion.div
						className="font-normal leading-[0.95] tracking-[-0.03em] mb-12"
						style={{ fontSize: "clamp(3rem, 8vw, 7rem)" }}
						initial={{ opacity: 0, y: 28 }}
						animate={inView ? { opacity: 1, y: 0 } : {}}
						transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
					>
						궁금한게 생기면,
						<br />
						<span className="text-muted">언제든 메일주세요.</span>
						<br />
						<motion.a
							href="mailto:cycy8527@gmail.com"
							className="relative inline-flex gap-[1px]"
							style={{ display: "inline-flex" }}
						>
							{letters.map((char, i) => (
								<motion.span
									key={i}
									className="inline-block"
									inherit={false}
									initial={false}
									whileHover={{
										y: -8,
										color: "var(--accent)",
										transition: {
											type: "spring",
											stiffness: 600,
											damping: 10,
											delay: i * 0.03,
										},
									}}
								>
									{char === " " ? "\u00A0" : char}
								</motion.span>
							))}
						</motion.a>
					</motion.div>

					<motion.div
						className="flex flex-wrap gap-3"
						initial={{ opacity: 0, y: 16 }}
						animate={inView ? { opacity: 1, y: 0 } : {}}
						transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
					>
						{SOCIALS.map(({ icon: Icon, label, href }) => (
							<a
								key={label}
								href={href}
								target="_blank"
								rel="noopener noreferrer"
								className="inline-flex items-center gap-2 text-sm font-medium px-5 py-2.5 border-[1.5px] border-border rounded-full text-muted hover:border-fg hover:bg-fg hover:text-bg transition-all"
							>
								<Icon size={15} />
								{label}
							</a>
						))}
					</motion.div>
				</div>
			</section>

			<footer className="px-10 py-8 border-t border-border flex items-center justify-between gap-4 lg:px-6 sm:px-5 sm:flex-col sm:items-start sm:gap-2 sm:py-6">
				<p className="text-xs text-muted tracking-wide">
					© 2026 이채영. Made with ♥
				</p>
				<span className="text-xs text-muted">
					Frontend Developer · Namyangju, KR
				</span>
			</footer>
		</>
	);
}
