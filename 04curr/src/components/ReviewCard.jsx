import { motion } from "framer-motion";
import { Star } from "lucide-react";

export default function ReviewCard({ review }) {
	return (
		<motion.div
			whileHover={{ y: -4 }}
			transition={{ duration: 0.25, ease: "easeOut" }}
			className="rounded-2xl border border-white/10 bg-white/5 p-6"
		>
			<div className="flex items-center justify-between gap-3">
				<div className="text-premium text-lg text-amber-100">{review.name}</div>
				<div className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-stone-950/40 px-3 py-1 text-xs text-stone-100">
					<Star className="h-4 w-4 text-amber-300" />
					{review.rating}
				</div>
			</div>
			<p className="mt-4 text-sm leading-relaxed text-stone-200/70">
				{review.text}
			</p>
		</motion.div>
	);
}
