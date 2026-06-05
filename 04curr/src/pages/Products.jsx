import { motion } from "framer-motion";
import { Search } from "lucide-react";
import { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";

import ProductCard from "../components/ProductCard.jsx";
import { categories } from "../data/categories.js";
import { products } from "../data/products.js";

export default function Products() {
	const [searchParams, setSearchParams] = useSearchParams();
	const initialCategory = searchParams.get("category") || "all";
	const [activeCategory, setActiveCategory] = useState(initialCategory);
	const [query, setQuery] = useState("");

	const filtered = useMemo(() => {
		const q = query.trim().toLowerCase();
		return products.filter(p => {
			const matchesCategory =
				activeCategory === "all" || p.category === activeCategory;
			const matchesQuery =
				!q ||
				p.name.toLowerCase().includes(q) ||
				p.description.toLowerCase().includes(q);
			return matchesCategory && matchesQuery;
		});
	}, [activeCategory, query]);

	function setCategory(next) {
		setActiveCategory(next);
		if (next === "all") {
			searchParams.delete("category");
			setSearchParams(searchParams, { replace: true });
			return;
		}
		setSearchParams({ category: next }, { replace: true });
	}

	return (
		<div className="bg-stone-950">
			<section className="relative overflow-hidden border-b border-white/10">
				<div className="absolute inset-0 bg-[radial-gradient(70%_55%_at_50%_0%,rgba(251,191,36,0.18),transparent_60%)]" />
				<div className="relative mx-auto max-w-6xl px-4 py-14">
					<motion.h1
						initial={{ opacity: 0, y: 10 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.45, ease: "easeOut" }}
						className="text-premium text-4xl text-stone-50"
					>
						Our Products
					</motion.h1>
					<p className="mt-3 max-w-2xl text-sm leading-7 text-stone-200/70">
						Browse sweets, cakes, bakery items, and premium gifting — crafted
						for an elegant experience.
					</p>

					<div className="mt-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
						<div className="flex flex-wrap gap-2">
							<button
								onClick={() => setCategory("all")}
								className={
									activeCategory === "all"
										? "rounded-full bg-amber-300 px-4 py-2 text-xs font-semibold text-stone-950"
										: "rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold text-stone-100 hover:bg-white/10"
								}
							>
								All
							</button>
							{categories.map(c => (
								<button
									key={c.id}
									onClick={() => setCategory(c.id)}
									className={
										activeCategory === c.id
											? "rounded-full bg-amber-300 px-4 py-2 text-xs font-semibold text-stone-950"
											: "rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold text-stone-100 hover:bg-white/10"
									}
								>
									{c.name}
								</button>
							))}
						</div>

						<div className="relative w-full md:max-w-sm">
							<Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-stone-200/60" />
							<input
								value={query}
								onChange={e => setQuery(e.target.value)}
								placeholder="Search products..."
								className="h-11 w-full rounded-xl border border-white/10 bg-white/5 pl-10 pr-4 text-sm text-stone-100 placeholder:text-stone-200/40 focus:outline-none focus:ring-2 focus:ring-amber-300/60"
							/>
						</div>
					</div>
				</div>
			</section>

			<section className="py-14">
				<div className="mx-auto max-w-6xl px-4">
					<div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
						{filtered.map(p => (
							<ProductCard key={p.id} product={p} />
						))}
					</div>

					{filtered.length === 0 ? (
						<div className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-8 text-center">
							<div className="text-premium text-xl text-stone-50">
								No products found
							</div>
							<p className="mt-2 text-sm text-stone-200/70">
								Try a different search term or category.
							</p>
						</div>
					) : null}
				</div>
			</section>
		</div>
	);
}
