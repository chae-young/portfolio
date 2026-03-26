function ErrorInline() {
	return (
		<div className="col-span-full py-12 px-6 text-center border border-dashed border-[#E0DDD6] rounded-2xl flex flex-col items-center gap-4">
			<div className="w-12 h-12 rounded-full bg-[#fff3f3] flex items-center justify-center text-xl">
				✕
			</div>
			<div>
				<div className="text-sm font-semibold mb-1.5">
					포스트를 불러오지 못했어요
				</div>
				<div className="text-xs text-[#888] mb-5">
					RSS 피드 연결에 실패했습니다
				</div>
				<div className="flex gap-2 justify-center">
					<button className="text-xs font-semibold px-5 py-2 rounded-full bg-[#111] text-white border-none cursor-pointer">
						다시 시도
					</button>
					<a
						href="https://chaeyoung2.tistory.com"
						className="text-xs font-medium px-5 py-2 rounded-full bg-transparent text-[#888] border border-[#E0DDD6] no-underline"
					>
						블로그 직접 방문
					</a>
				</div>
			</div>
		</div>
	);
}
