import { cn } from "@/lib/cn";

export default function Section({
	label,
	children,
	last,
	arrange,
}: {
	label: string;
	children: React.ReactNode;
	last?: boolean;
	arrange?: "column" | "row";
}) {
	console.log('last', last)
	return (
		<div
			className={cn(
				arrange === "column" && "mb-16 pb-16 border-b",
				last ? "mb-0 pb-0 border-b-0" : "mb-16 pb-16 border-b",
			)}
		>
			<div className="text-[0.66rem] font-bold tracking-[0.14em] uppercase text-muted mb-6">
				{label}
			</div>
			{children}
		</div>
	);
}
