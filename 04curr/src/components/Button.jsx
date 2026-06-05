import { motion } from "framer-motion";

export default function Button({
	as: As = "button",
	variant = "primary",
	className = "",
	children,
	...props
}) {
	const base =
		"inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300/60 focus-visible:ring-offset-2 focus-visible:ring-offset-stone-950 disabled:opacity-60 disabled:pointer-events-none";

	const variants = {
		primary:
			"bg-linear-to-r from-amber-200 via-amber-300 to-amber-500 text-stone-950 hover:from-amber-100 hover:to-amber-400",
		outline:
			"border border-amber-300/50 bg-stone-950/40 text-amber-100 hover:bg-stone-900/60",
		ghost:
			"bg-transparent text-stone-100 hover:bg-stone-900/50 border border-white/10",
	};

	return (
		<motion.div whileHover={{ y: -1 }} whileTap={{ scale: 0.98 }}>
			<As
				className={`${base} ${variants[variant] ?? variants.primary} ${className}`}
				{...props}
			>
				{children}
			</As>
		</motion.div>
	);
}
