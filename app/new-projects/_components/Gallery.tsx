import { useState } from "react";
import Fallback from "@/app/new-projects/_components/ImageFallBack";
import type { GalleryImage } from "@/app/new-projects/_types";
import { cn } from "@/lib/cn";

export default function Gallery({
	images,
	fallback,
}: {
	images?: GalleryImage[];
	fallback?: string;
}) {
	const [errors, setErrors] = useState<Record<number, boolean>>({});
	const len = images?.length ?? 0;
	console.log(len, "len");
	const Img = ({ img, idx }: { img: GalleryImage; idx: number }) =>
		errors[idx] ? (
			<Fallback label={fallback ?? img.alt ?? ""} />
		) : (
			<img
				src={img.src}
				alt={img.alt ?? ""}
				className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(.16,1,.3,1)] group-hover:scale-[1.04]"
				onError={() => setErrors((p) => ({ ...p, [idx]: true }))}
			/>
		);

	// 0장 — 플레이스홀더 와이드
	if (len === 0)
		return (
			<div
				className="w-full border-b border-border"
				style={{ aspectRatio: "16/7" }}
			>
				<Fallback label={fallback ?? ""} />
			</div>
		);

	// 1장 — 와이드
	if (len === 1)
		return (
			<div
				className="w-full border-b border-border overflow-hidden group"
				style={{ aspectRatio: "16/7" }}
			>
				<Img img={images![0]} idx={0} />
			</div>
		);

	// 2장 — 50/50
	if (len === 2)
		return (
			<div className="grid grid-cols-2 border-b border-border">
				{images!.map((img, i) => (
					<div
						key={i}
						className={cn(
							"overflow-hidden group",
							i === 0 && "border-r border-border sm:border-r-0 sm:border-b",
						)}
						style={{ aspectRatio: "4/3" }}
					>
						<Img img={img} idx={i} />
					</div>
				))}
			</div>
		);

	// 3장 — 왼쪽 크게 + 오른쪽 2개 세로
	if (len === 3)
		return (
			<div
				className="border-b border-border sm:grid-cols-1"
				style={{
					display: "grid",
					gridTemplateColumns: "2fr 1fr",
					gridTemplateRows: "1fr 1fr",
					minHeight: 360,
					maxHeight: 480,
				}}
			>
				<div
					className="overflow-hidden group border-r border-border"
					style={{ gridRow: "1 / 3" }}
				>
					<Img img={images![0]} idx={0} />
				</div>
				<div className="overflow-hidden group border-b border-border">
					<Img img={images![1]} idx={1} />
				</div>
				<div className="overflow-hidden group">
					<Img img={images![2]} idx={2} />
				</div>
			</div>
		);

	// 4장 — 2×2
	return (
		<div className="grid grid-cols-2 border-b border-border">
			{images!.map((img, i) => (
				<div
					key={i}
					className={cn("overflow-hidden group", {
						"border-r border-border sm:border-r-0": i % 2 === 0,
						"border-b border-border": i < 2,
					})}
					style={{ aspectRatio: "16/10" }}
				>
					<Img img={img} idx={i} />
				</div>
			))}
		</div>
	);
}
