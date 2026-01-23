import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ContentBox from "../ContentBox";
import TwoColumnLayout from "../TwoColumnLayout";

const BlogPost = () => {
	const [posts, setPosts] = useState([]);
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
					const splicedItems = data.items.splice(0, 8);
					setPosts(splicedItems);
				} else {
					throw new Error("RSS 피드를 가져올 수 없습니다");
				}
			} catch (err) {
				console.error("블로그 로딩 실패:", err);
				setError(err.message);
			} finally {
				setLoading(false);
			}
		};

		fetchBlogPosts();
	}, [mounted]);

	const stripHtmlTags = (html) => {
		if (typeof window === "undefined") return html;

		const tmp = document.createElement("div");
		tmp.innerHTML = html;
		return tmp.textContent || tmp.innerText || "";
	};

	// 날짜 포맷팅
	const formatDate = (dateString) => {
		return new Date(dateString).toLocaleDateString("ko-KR", {
			year: "numeric",
			month: "long",
			day: "numeric",
		});
	};

	if (!mounted || loading) {
		return <ErrorStyle>블로그 글을 불러오는 중...</ErrorStyle>;
	}

	if (error) {
		return <ErrorStyle>블로그글을 불러오는데 실패했습니다.</ErrorStyle>;
	}
	return (
		<article>
			<ContentBox title="Blog">
				<TwoColumnLayout
					left={
						<p>
							누적 조회수 21만의 블로그를 운영하며 지식과 경험을 꾸준히 공유하고
							있습니다.
						</p>
					}
					right={
						<BlogSection>
							{posts.map((post) => (
								<motion.article
									key={post.guid || post.link}
									initial={{ opacity: 0, y: 50 }}
									whileInView={{ opacity: 1, y: 0 }}
									transition={{ type: "spring", duration: 0.5 }}
									viewport={{ once: true, amount: 0.3 }}
								>
									<h3>
										<a
											href={post.link}
											target="_blank"
											rel="noopener noreferrer"
										>
											{post.title}
										</a>
									</h3>
									<div>
										<p>{stripHtmlTags(post.description).substring(0, 300)}</p>
										<time>{formatDate(post.pubDate)}</time>
									</div>
								</motion.article>
							))}
						</BlogSection>
					}
				/>
			</ContentBox>
		</article>
	);
};

const BlogSection = styled.div`
  a {
    color: #fff;
  }

  article {
    font-size: 2rem;
    > div {
      margin-top: 2rem;
    }
    p {
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
    time,
    p {
      font-size: 1.2rem;
      color: ${({ theme }) => theme.colors.gray};
    }
    ${({ theme }) => theme.device.desktop} {
      font-size: 2.6rem;
      p,
      time {
        font-size: 1.6rem;
      }
    }
  }
`;

const ErrorStyle = styled.div`
  padding: 100px 0;
  font-size: 2rem;
  text-align: center;
`;

export default BlogPost;
