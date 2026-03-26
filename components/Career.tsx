"use client";

import * as Accordion from "@radix-ui/react-accordion";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import Label from "@/components/Label";
import { useInView } from "@/hooks/useInView";
import { cn } from "@/lib/cn";

const CAREERS = [
	{
		value: "dfluid",
		period: "2024.05 — 재직중",
		company: "(주)디플루이드",
		desc: "프론트엔드 전문 에이전시",
		projects: [
			{
				title: "LG Uplus 서비스 운영",
				tech: ["Vue", "Nuxt"],
				bullets: [
					"UI 개편(팝업 → Select Box)에 따른 API 응답 구조 변경 대응, 기존 수정·삭제 로직을 재사용 가능하도록 유지하면서 신규 UI 구조로 마이그레이션",
					"가입 플로우 내 2~3개 컴포넌트에 분산된 ValidationObserver 호출 로직을 ref기반 공통 함수로 통합 → 가입 완료 시점의 유효성 검사를 한곳에서 제어, 이후 validation 추가 및 수정시 변경 지점 1곳으로 축소",
					"신규 부가 서비스 가입 플로우 전반을 검토하여 예외 케이스를 사전 발견 → 기획서 수정 및 API 스펙 재설계 제안 → 출시 전 오류 사전 차단",
				],
			},
			{
				title: "한양대학교 인터칼리지 구축",
				tech: ["Next.js", "TanStack Query", "Zustand"],
				bullets: [
					"3인 팀 리딩 및 Jira 기반 스프린트 관리, openapi-typescript 팀 도입 시 가이드 작성 및 온보딩 주도",
					"사용자 화면 렌더링보다 통계성 API가 먼저 호출되는 구조를 분석, requestIdleCallback 기반 후순위 처리로 전환 → LCP 54% 개선",
					"반복되는 UI 컴포넌트를 합성 컴포넌트 패턴으로 추상화하고, 5~6개 페이지에 공통 적용되는 레이아웃을 Slot 패턴으로 구조화 → 중복 컴포넌트 제거 및 레이아웃 확장성 증가",
					"외부 라이브러리 전체 import로 인한 빌드 용량 초과 이슈를 Tree Shaking 적용으로 해결 → 빌드 용량 75% 감소",
					"Client Component로 전환하는 과정에서 모든 상태가 쿠키에 저장되던 구조를 개선, 인증 스토어와 일반 스토어를 분리하여 불필요한 쿠키 전송 제거 → 팀 전체에 개선 사항 공유 및 적용",
					"외부 인증 시스템 연동(SSO 통합 로그인, PASS 본인인증) 구현",
				],
			},
			{
				title: "LG CNS 아테네 ABT 시스템 - 앱 기반 서비스의 웹 반응형 전환",
				tech: ["Vue", "Nuxt", "TailwindCSS"],
				bullets: [
					"기존 앱 전용 UI 약 20~30개 화면을 PC·모바일 2 breakpoint 반응형으로 단독 전환, 1개월 내 완료",
				],
			},
			{
				title: "구강암 예방 헬스케어 앱 개선",
				tech: ["React", "TypeScript", "Zustand"],
				bullets: [
					"런칭 전 내부 기능 테스트 및 코드 분석을 통해 10건 이상 이슈 사전 발견 및 수정 → 안정적 런칭 기여",
					"API 중복 호출 이슈 분석, 단일 요청으로 통합 → 페이지 로딩 최적화",
				],
			},
		],
	},
	{
		value: "wconcept",
		period: "2022.02 — 2023.08",
		company: "(주)더블유컨셉코리아",
		desc: "누적 가입자 수백만명의 패션 플랫폼",
		projects: [
			{
				title: "대규모 프로모션 UI 구축 및 운영",
				tech: ["HTML", "CSS", "JavaScript"],
				bullets: [
					"인터랙션 모션 템플릿 제작 및 팀 내 공유 → 디자이너 요청 시 즉시 적용 가능한 재사용 모션 구축, 프로모션 제작 속도 개선",
				],
			},
		],
	},
	{
		value: "styleship",
		period: "2018.02 — 2021.02",
		company: "(주)스타일쉽",
		desc: "24년 업력의 브랜드 커머스 전문 에이전시",
		projects: [
			{
				title:
					"FILA, 라이카, 골든구스 등 20여 개 브랜드 커머스 구축 및 유지보수",
				tech: ["HTML", "CSS", "JavaScript"],
				bullets: [
					"FILA, 골든구스 등 대형 브랜드 커머스 UI 구축 경험을 바탕으로 BEM 기반 애니메이션 모듈 설계, 확장 가능한 UI 시스템 구축",
				],
			},
		],
	},
];

export default function Career() {
	const { ref, inView } = useInView();

	return (
		<section
			id="career"
			className="px-6 py-20 border-t border-border lg:px-6 md:py-20 sm:px-5 sm:py-16"
			ref={ref}
		>
			<div className="basic-content">
				<Label>Career</Label>
				<SectionHeading>
					다양한 프로젝트를 통해
					<br />
					<span className="text-muted">쌓아온 경험들</span>
				</SectionHeading>

				<Accordion.Root
					type="single"
					defaultValue="dfluid"
					collapsible
					className="flex flex-col gap-2"
				>
					{CAREERS.map((career, i) => (
						<motion.div
							key={career.value}
							initial={{ opacity: 0, y: 20 }}
							animate={inView ? { opacity: 1, y: 0 } : {}}
							transition={{
								duration: 0.6,
								delay: i * 0.1,
								ease: [0.16, 1, 0.3, 1],
							}}
						>
							<Accordion.Item
								value={career.value}
								className={cn(
									"border border-border rounded-[16px] overflow-hidden",
									"transition-colors duration-300",
									"data-[state=open]:border-fg data-[state=open]:bg-card",
								)}
							>
								<Accordion.Header>
									<Accordion.Trigger className="w-full group cursor-pointer">
										<div className="flex md:items-center flex-col md:flex-row gap-2 sm:gap-4 px-4 py-4 sm:px-5 sm:py-5">
											{/* 기간 — sm 이하 숨김 */}
											<span className="text-xs text-muted tracking-wide w-36 shrink-0 text-left">
												{career.period}
											</span>
											<div className="text-left flex-1 min-w-0 flex items-center justify-between">
												<div className="">
													<div className="text-base font-semibold tracking-tight truncate">
														{career.company}
													</div>
													<div className="text-xs text-muted mt-0.5">
														{career.desc}
													</div>
												</div>
												<ChevronDown
													size={18}
													className="text-muted shrink-0 transition-transform duration-300 group-data-[state=open]:rotate-180"
												/>
											</div>
										</div>
									</Accordion.Trigger>
								</Accordion.Header>

								<Accordion.Content
									className={cn(
										"overflow-hidden",
										"data-[state=open]:animate-[accordion-down_0.35s_ease_forwards] data-[state=open]:block",
										"data-[state=closed]:animate-[accordion-up_0.35s_ease_forwards] data-[state=closed]:max-h-0 data-[state=closed]:opacity-0",
									)}
								>
									<div className="px-4 py-6 flex flex-col gap-3 sm:px-5 sm:py-5">
										{career.projects.map((proj) => (
											<div
												key={proj.title}
												className="bg-bg rounded-[12px] py-5 px-4 sm:py-4"
											>
												<div className="flex items-start justify-between flex-wrap gap-3 mb-3">
													<h4 className="text-sm font-semibold leading-snug">
														{proj.title}
													</h4>
													<div className="flex flex-wrap gap-1.5">
														{proj.tech.map((t) => (
															<span
																key={t}
																className="text-[0.68rem] px-2 py-0.5 rounded-full bg-card border border-border text-muted"
															>
																{t}
															</span>
														))}
													</div>
												</div>
												<ul className="flex flex-col gap-2">
													{proj.bullets.map((b) => (
														<li
															key={b}
															className="text-[0.82rem] text-[#555] leading-relaxed pl-4 relative before:content-['→'] before:absolute before:left-0 before:text-muted before:text-xs"
														>
															{b}
														</li>
													))}
												</ul>
											</div>
										))}
									</div>
								</Accordion.Content>
							</Accordion.Item>
						</motion.div>
					))}
				</Accordion.Root>
			</div>
		</section>
	);
}
