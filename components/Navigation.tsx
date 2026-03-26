"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { cn } from "@/lib/cn";

const NAV_ITEMS = [
	{ label: "About", href: "#about" },
	{ label: "Skill", href: "#skill" },
	{ label: "Career", href: "#career" },
	{ label: "Projects", href: "#projects" },
	{ label: "Blog", href: "#blog" },
];

function scrollToSection(href: string) {
	document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
}

export default function Navigation() {
	const [scrolled, setScrolled] = useState(false);
	const [mobileOpen, setMobileOpen] = useState(false);

	useEffect(() => {
		const handler = () => setScrolled(window.scrollY > 20);
		window.addEventListener("scroll", handler, { passive: true });
		return () => window.removeEventListener("scroll", handler);
	}, []);

	useEffect(() => {
		document.body.style.overflow = mobileOpen ? "hidden" : "";
		return () => {
			document.body.style.overflow = "";
		};
	}, [mobileOpen]);

	return (
		<>
			<motion.nav
				initial={{ y: -20, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
				className={cn(
					"fixed top-0 inset-x-0 z-50 h-16 px-6 ",
					"transition-all duration-300 lg:px-6 sm:px-5",
					scrolled && "bg-bg/90 backdrop-blur-xl border-b border-border",
				)}
			>
				<div className="basic-content flex items-center justify-between h-full">
					<Link
						href="/"
						className="flex items-center gap-2 font-display text-xl italic tracking-tight shrink-0"
					>
						<img src="/images/logo.png" alt="logo" width={50} height={50} />
					</Link>

					{/* Desktop nav — 768px 이상에서 표시 */}
					<div className="hidden md:flex items-center gap-8">
						{NAV_ITEMS.map(({ label, href }) => (
							<button
								key={label}
								onClick={() => scrollToSection(href)}
								className="text-xs tracking-[0.07em] uppercase text-muted hover:text-fg transition-colors"
							>
								{label}
							</button>
						))}
					</div>

					{/* 모바일 햄버거 — 768px 미만에서 표시 */}
					<button
						className="flex md:hidden items-center justify-center w-9 h-9"
						onClick={() => setMobileOpen((v) => !v)}
						aria-label="메뉴"
					>
						{mobileOpen ? <X size={22} /> : <Menu size={22} />}
					</button>
				</div>
			</motion.nav>

			{/* 모바일 풀스크린 메뉴 */}
			<AnimatePresence>
				{mobileOpen && (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 0.22 }}
						className="fixed inset-0 z-40 bg-bg flex flex-col items-center justify-center gap-8 md:hidden"
					>
						{NAV_ITEMS.map(({ label, href }, i) => (
							<motion.button
								key={label}
								onClick={() => {
									scrollToSection(href);
									setMobileOpen(false);
								}}
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								exit={{ opacity: 0 }}
								transition={{ delay: i * 0.06, duration: 0.3 }}
								className="font-display text-5xl font-normal italic"
							>
								{label}
							</motion.button>
						))}
						<motion.a
							href="mailto:cycy8527@gmail.com"
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ delay: 0.38 }}
							className="mt-2 text-sm font-medium px-6 py-3 border-[1.5px] border-fg rounded-full"
						>
							Contact
						</motion.a>
					</motion.div>
				)}
			</AnimatePresence>
		</>
	);
}
