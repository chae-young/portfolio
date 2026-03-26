"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/SectionHeading";
import Label from "@/components/Label";
import { useInView } from "@/hooks/useInView";

export default function About() {
	const { ref, inView } = useInView();

	return (
		<section
			id="about"
			className="px-6 py-20 border-t border-border lg:px-6 md:py-20 sm:px-5 sm:py-16"
		>
			<div className="basic-content grid gap-20 items-start lg:gap-12 md:grid-cols-[1fr_40%]">
				{/* 텍스트 영역 */}
				<div ref={ref}>
					<Label>About Me</Label>

					<SectionHeading animate inView={inView} className="mb-7">
						안녕하세요,
						<br />
						UI 구현 경험을 바탕으로<br />
						<span className="text-muted">기술적 UX를 설계하는</span>
						<br />
						프론트엔드 개발자입니다.
					</SectionHeading>
					{[
						"약 2년간 프론트엔드 개발을 경험하며 React/TypeScript와 Vue를 사용해왔고, 그 이전에는 4년 이상 UI 구현을 담당했습니다.",
						"단순히 디자인을 구현하는 데 그치지 않고, 사용자 인터랙션과 흐름을 고려해 더 자연스러운 경험을 만드는 데 집중합니다.",
						"또한 반복되는 UI 패턴을 구조화하고, 브라우저 동작 원리를 기반으로 성능과 사용자 경험을 함께 개선하는 데 강점이 있습니다",
						"배운 내용을 정리하고 공유하는 걸 좋아해서 꾸준히 기록하고 있고, 그게 다른 사람에게 도움이 될 때 가장 보람을 느낍니다.",
					].map((text, i) => (
						<motion.p
							key={i}
							className="text-sm leading-[1.85] text-[#444] mb-4"
							initial={{ opacity: 0, y: 20 }}
							animate={inView ? { opacity: 1, y: 0 } : {}}
							transition={{
								duration: 0.7,
								delay: 0.1 + i * 0.08,
								ease: [0.16, 1, 0.3, 1],
							}}
						>
							{text}
						</motion.p>
					))}

					<motion.a
						href="https://tsrvalbpgnmahobyqzrc.supabase.co/storage/v1/object/public/public-pdf/porofile.pdf"
						target="_blank"
						rel="noopener noreferrer"
						className="inline-flex items-center gap-2 mt-8 text-sm font-medium px-6 py-3 rounded-full bg-fg text-bg hover:opacity-80 transition-opacity"
						initial={{ opacity: 0, y: 20 }}
						animate={inView ? { opacity: 1, y: 0 } : {}}
						transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
					>
						프로필 보기 <span>↗</span>
					</motion.a>
				</div>

				{/* 프로필 이미지 */}
				<motion.div
					className="relative rounded-[20px] overflow-hidden bg-border group"
					style={{ aspectRatio: "4/5" }}
					initial={{ opacity: 0, scale: 0.97 }}
					animate={inView ? { opacity: 1, scale: 1 } : {}}
					transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
				>
					{/* eslint-disable-next-line @next/next/no-img-element */}
					<img
						src="/images/about/me2.jpg"
						alt="이채영"
						className="w-full h-full object-cover transition-transform duration-[600ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
					/>
					{/* <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/50 to-transparent text-white text-xs tracking-wide">
            텍스트 미정
          </div> */}
				</motion.div>
			</div>
		</section>
	);
}
