import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function CategoryCard({ category }) {
	return (
		<motion.div
			whileHover={{ y: -4 }}
			transition={{ duration: 0.25, ease: "easeOut" }}
			className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5"
		>
			<Link to={`/products?category=${category.id}`} className="block">
				<div className="relative">
					<img
						src={category.image}
						alt={category.name}
						className="h-44 w-full object-cover"
						loading="lazy"
					/>
					<div className="pointer-events-none absolute inset-0 bg-linear-to-t from-stone-950/80 via-stone-950/15 to-transparent" />
				</div>
				<div className="p-5">
					<div className="text-premium text-lg text-amber-100">
						{category.name}
					</div>
					<p className="mt-2 text-sm leading-relaxed text-stone-200/70">
						{category.description}
					</p>
					<div className="mt-4 text-sm font-semibold text-amber-200">
						Explore →
					</div>
				</div>
			</Link>
		</motion.div>
	);
}
