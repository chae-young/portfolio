export default function ImageFallback({ label }: { label: string }) {
	return (
		<div className="w-full h-full bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460] flex items-center justify-center">
			<span
				className="font-display italic text-white/10 select-none"
				style={{ fontSize: "clamp(2rem,5vw,4rem)" }}
			>
				{label}
			</span>
		</div>
	);
}
