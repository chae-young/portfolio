"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { SectionHeading } from "@/components/SectionHeading";
import SkeletonCard from "@/components/SkeletonCard";
import Label from "@/components/Label";
import { useInView } from "@/hooks/useInView";

interface Post {
	title: string;
	pubDate: string;
	link: string;
	guid: string;
	author: string;
	thumbnail: string;
	description: string;
	content: string;
	enclosure: Record<string, unknown>;
	categories: string[];
}

export default function Blog() {
	const { ref, inView } = useInView();
	const [posts, setPosts] = useState<Post[]>([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	const [mounted, setMounted] = useState(false);
	const BLOG_NAME = "chaeyoung2";
	const POST_COUNT = 5;

	// 클라이언트에서만 실행되도록
	useEffect(() => {
		setMounted(true);
	}, []);

	useEffect(() => {
		if (!mounted) return;

		const fetchBlogPosts = async () => {
			try {
				setLoading(true);
				setError(null);

				const rssUrl = `https://${BLOG_NAME}.tistory.com/rss`;
				const apiUrl = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(
					rssUrl,
				)}`;

				const response = await fetch(apiUrl);

				if (!response.ok) {
					throw new Error("네트워크 응답이 올바르지 않습니다");
				}

				const data = await response.json();

				if (data.status === "ok") {
					const splicedItems = data.items.splice(0, 4);
					setPosts(splicedItems);
				} else {
					throw new Error("RSS 피드를 가져올 수 없습니다");
				}
			} catch (err: any) {
				console.error("블로그 로딩 실패:", err);
				setError(err.message);
			} finally {
				setLoading(false);
			}
		};

		fetchBlogPosts();
	}, [mounted]);

	const stripHtmlTags = (html: string) => {
		if (typeof window === "undefined") return html;

		const tmp = document.createElement("div");
		tmp.innerHTML = html;
		return tmp.textContent || tmp.innerText || "";
	};

	// 날짜 포맷팅
	const formatDate = (dateString: string) => {
		return new Date(dateString).toLocaleDateString("ko-KR", {
			year: "numeric",
			month: "long",
			day: "numeric",
		});
	};

	if (error) {
		return <ErrorInline />;
	}

	return (
		<section
			id="blog"
			className="px-6 py-20 border-t border-border lg:px-6 md:py-20 sm:px-5 sm:py-16"
			ref={ref}
		>
			<div className="basic-content">
				{/* 헤더 행 */}
				<div className="flex items-end justify-between gap-6 flex-wrap sm:mb-10">
					<div>
						<Label>Blog</Label>
						<SectionHeading>
							기록하며
							<br />
							<span className="text-muted">성장합니다</span>
						</SectionHeading>
					</div>
				</div>
				<div className="grid gap-4 lg:grid-cols-2 sm:grid-cols-1">
					{!mounted || loading
						? Array.from({ length: POST_COUNT - 1 }).map((_, i) => (
								<SkeletonCard key={i} />
							))
						: posts.map((post, i) => (
								<motion.a
									key={post.title}
									href={post.link}
									target="_blank"
									rel="noopener noreferrer"
									className="flex flex-col group block bg-card border border-border rounded-[20px] overflow-hidden hover:border-fg hover:-translate-y-1 transition-all duration-300"
									initial={{ opacity: 0, y: 24 }}
									animate={inView ? { opacity: 1, y: 0 } : {}}
									transition={{
										duration: 0.6,
										delay: i * 0.1,
										ease: [0.16, 1, 0.3, 1],
									}}
								>
									{/* 썸네일 */}
									{post.thumbnail ? (
										<img
											src={post.thumbnail}
											alt={post.title}
											className="w-full object-cover h-[240px] shrink-0"
										/>
									) : (
										<div className="aspect-[16/9] bg-gradient-to-br from-[#f0ede6] to-[#e5e1d8] flex items-center justify-center text-4xl"></div>
									)}

									{/* 본문 */}
									<div className="p-6 sm:p-5 flex flex-col flex-1">
										<div className="text-[0.68rem] font-semibold tracking-[0.1em] uppercase text-muted mb-2.5">
											{post.categories[0]} / {post.categories[1]}
										</div>
										<h3 className="text-sm font-semibold leading-[1.45] tracking-tight mb-2.5 line-clamp-2">
											{post.title}
										</h3>
										<p className="text-xs text-muted leading-relaxed line-clamp-2 mb-4">
											{formatDate(post.pubDate)}
										</p>
										<div className="flex items-center justify-between">
											{/* 'date' 필드는 post에 존재하지 않을 수 있으므로 제거 또는 수정 필요 */}
											{/* <span className="text-xs text-muted">{post.date}</span> */}
											<span />
											<span className="text-xs font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
												읽기 <ArrowRight size={12} />
											</span>
										</div>
									</div>
								</motion.a>
							))}
				</div>

				{/* 더보기 버튼 */}
				<div className="mt-10 text-center">
					<a
						href="https://chaeyoung2.tistory.com/"
						target="_blank"
						rel="noopener noreferrer"
						className="inline-flex items-center gap-2 text-sm font-medium px-7 py-3 border-[1.5px] border-border rounded-full text-muted hover:border-fg hover:text-fg transition-all"
					>
						티스토리에서 더 보기 <ArrowRight size={15} />
					</a>
				</div>
			</div>
		</section>
	);
}
