"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/cn";

const defaultStyle = {
	fontSize: "clamp(1.8rem, 3.5vw, 3rem)",
};

const defaultTransition = {
	duration: 0.7,
	ease: [0.16, 1, 0.3, 1] as const,
};

type SectionHeadingProps = {
	children: React.ReactNode;
	/** motion 애니메이션 사용 여부 */
	animate?: boolean;
	/** animate가 true일 때, inView 상태 (부모에서 useInView 등으로 전달) */
	inView?: boolean;
	className?: string;
	style?: React.CSSProperties;
};

export function SectionHeading({
	children,
	animate = false,
	inView = true,
	className,
	style,
}: SectionHeadingProps) {
	const mergedStyle = { ...defaultStyle, ...style };
	const mergedClassName = cn(
		"font-normal leading-[1.1] mb-10 sm:mb-20",
		className,
	);

	if (animate) {
		return (
			<motion.h2
				className={mergedClassName}
				style={mergedStyle}
				initial={{ opacity: 0, y: 24 }}
				animate={inView ? { opacity: 1, y: 0 } : {}}
				transition={defaultTransition}
			>
				{children}
			</motion.h2>
		);
	}

	return (
		<h2 className={mergedClassName} style={mergedStyle}>
			{children}
		</h2>
	);
}
