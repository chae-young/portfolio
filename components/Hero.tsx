"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const lineVariants = {
	hidden: { y: "110%" },
	show: (i: number) => ({
		y: 0,
		transition: {
			duration: 0.85,
			delay: 0.15 + i * 0.1,
			ease: [0.16, 1, 0.3, 1],
		},
	}),
};

export default function Hero() {
	const [mounted, setMounted] = useState(false);
	useEffect(() => setMounted(true), []);

	return (
		<section className="relative min-h-svh flex flex-col justify-end px-6 pb-16 overflow-hidden lg:px-6 sm:px-5 sm:pb-12">
			{/* <motion.div
        className="absolute top-24 right-10 flex flex-col items-end gap-2.5 lg:right-6 sm:right-5 sm:top-20"
        initial={{ opacity: 0, x: 16 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1, duration: 0.6 }}
      >
        <span className="flex items-center gap-2 text-[0.68rem] tracking-[0.05em] uppercase text-muted">
          <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse-dot" />
          재직 중 · 구직 중
        </span>
        <span className="text-[0.68rem] tracking-[0.12em] uppercase text-muted">Since 2018</span>
      </motion.div> */}

			<div className="basic-content relative z-10">
				{["Frontend", "Developer"].map((word, i) => (
					<div key={word} className="overflow-hidden">
						<motion.h1
							custom={i}
							variants={lineVariants}
							initial="hidden"
							animate={mounted ? "show" : "hidden"}
							className="font-display font-normal leading-[0.92] tracking-[-0.03em]"
							style={{ fontSize: "clamp(3.8rem, 10vw, 10rem)" }}
						>
							{word}
							{i === 1 && (
								<motion.span
									className="inline-block w-3 h-3 rounded-full bg-accent ml-3 mb-2 align-bottom sm:w-2.5 sm:h-2.5"
									initial={{ scale: 0 }}
									animate={{ scale: 1 }}
									transition={{
										delay: 0.95,
										type: "spring",
										stiffness: 300,
										damping: 18,
									}}
								/>
							)}
						</motion.h1>
					</div>
				))}

				{/* 서브 정보 행 */}
				<motion.div
					className="flex items-end justify-between gap-10 mt-8 pt-6 sm:flex-col sm:items-start sm:gap-5 sm:mt-6 sm:pt-5"
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.75, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
				>
					<p className="text-sm text-muted leading-[1.8] max-w-sm sm:max-w-full">
						UI 구현 경험을 바탕으로 기술적 UX를 설계하는 프론트엔드 개발자 이채영입니다. <br />
						사용자 인터랙션과 흐름을 고려한 UI를 통해 더 나은 사용자 경험을 만드는 데 집중합니다.
					</p>

					{/* <div className="flex gap-8 shrink-0 sm:gap-6 sm:w-full sm:justify-start">
            {[
              { num: "7+", label: "Years Exp." },
              { num: "20+", label: "Projects" },
              { num: "3", label: "Companies" },
            ].map(({ num, label }) => (
              <div key={label} className="text-right sm:text-left">
                <div className="font-display text-[2rem] leading-none tracking-[-0.02em] sm:text-[1.6rem]">
                  {num}
                </div>
                <div className="text-[0.65rem] tracking-[0.08em] uppercase text-muted mt-1">
                  {label}
                </div>
              </div>
            ))}
          </div> */}
				</motion.div>
			</div>
		</section>
	);
}
