import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
	title: "이채영 | Frontend Developer",
	description: "UI/UX 이해도가 높은 프론트엔드 개발자 이채영의 포트폴리오",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="ko">
			<head>
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link
					rel="preconnect"
					href="https://fonts.gstatic.com"
					crossOrigin="anonymous"
				/>
				<link
					href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&display=swap"
					rel="stylesheet"
				/>
				<link
					href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable.min.css"
					rel="stylesheet"
				/>
			</head>
			<body>{children}</body>
		</html>
	);
}
