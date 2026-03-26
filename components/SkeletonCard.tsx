export default function SkeletonCard() {
	return (
		<div className="bg-white border border-[#999] rounded-2xl overflow-hidden">
			<div className="aspect-video animate-shimmer bg-gradient-to-r from-[#999] via-[#e8e4dc] to-[#fff] bg-[length:200%_100%]" />
			<div className="p-6 pb-5">
				<div className="h-2.5 w-[35%] rounded-full animate-shimmer bg-gradient-to-r from-[#999 via-[#e8e4dc] to-[#fff] bg-[length:200%_100%] mb-3.5" />
				<div className="h-3.5 w-[90%] rounded-full animate-shimmer bg-gradient-to-r from-[#999] via-[#e8e4dc] to-[#fff] bg-[length:200%_100%] mb-2" />
				<div className="h-3.5 w-[60%] rounded-full animate-shimmer bg-gradient-to-r from-[#999] via-[#e8e4dc] to-[#fff] bg-[length:200%_100%] mb-5" />
				<div className="h-2.5 w-[25%] rounded-full animate-shimmer bg-gradient-to-r from-[#999] via-[#e8e4dc] to-[#fff] bg-[length:200%_100%]" />
			</div>
		</div>
	);
}
