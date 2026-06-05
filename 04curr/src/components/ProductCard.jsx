import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { Link } from "react-router-dom";

import Button from "./Button.jsx";

function formatINR(value) {
	try {
		return new Intl.NumberFormat("en-IN", {
			style: "currency",
			currency: "INR",
			maximumFractionDigits: 0,
		}).format(value);
	} catch {
		return `₹${value}`;
	}
}

export default function ProductCard({ product }) {
	return (
		<motion.div
			whileHover={{ y: -4 }}
			transition={{ duration: 0.25, ease: "easeOut" }}
			className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5"
		>
			<div className="relative">
				<img
					src={product.image}
					alt={product.name}
					className="h-52 w-full object-cover"
					loading="lazy"
				/>
				<div className="pointer-events-none absolute inset-0 bg-linear-to-t from-stone-950/70 via-transparent to-transparent opacity-80" />
			</div>

			<div className="p-5">
				<div className="flex items-start justify-between gap-3">
					<div>
						<div className="text-premium text-lg text-amber-100">
							{product.name}
						</div>
						<div className="mt-1 flex items-center gap-2 text-xs text-stone-200/60">
							<span className="inline-flex items-center gap-1">
								<Star className="h-4 w-4 text-amber-300" />
								{product.rating}
							</span>
							<span className="h-1 w-1 rounded-full bg-stone-200/30" />
							<span className="capitalize">{product.category}</span>
						</div>
					</div>
					<div className="text-sm font-semibold text-stone-100">
						{formatINR(product.price)}
					</div>
				</div>

				<p className="mt-3 line-clamp-2 text-sm leading-relaxed text-stone-200/70">
					{product.description}
				</p>

				<div className="mt-5">
					<Button
						as={Link}
						to={`/products/${product.id}`}
						variant="outline"
						className="w-full"
					>
						View Details
					</Button>
				</div>
			</div>
		</motion.div>
	);
}
