// import { motion } from "framer-motion";
// import CategoryCard from "../components/CategoryCard.jsx";
// import { categories } from "../data/categories.js";

// export default function Categories() {
// 	return (
// 		<section className="py-16">
// 			<div className="mx-auto max-w-6xl px-4">
// 				<motion.div
// 					initial={{ opacity: 0, y: 10 }}
// 					whileInView={{ opacity: 1, y: 0 }}
// 					viewport={{ once: true, margin: "-60px" }}
// 					transition={{ duration: 0.45, ease: "easeOut" }}
// 				>
// 					<h2 className="text-premium text-3xl text-stone-50">Categories</h2>
// 					<p className="mt-3 max-w-2xl text-sm leading-7 text-stone-200/70">
// 						Explore BISLA'S signature collection — crafted to feel premium, taste
// 						authentic, and look elegant.
// 					</p>
// 				</motion.div>

// 				<div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
// 					{categories.map((cat) => (
// 						<CategoryCard key={cat.id} category={cat} />
// 					))}
// 				</div>
// 			</div>
// 		</section>
// 	);
// }
import { motion } from "framer-motion";
import CategoryCard from "../components/CategoryCard.jsx";
import { categories } from "../data/categories.js";

export default function Categories() {
	return (
		<section className="py-14 sm:py-18">
			<div className="mx-auto max-w-6xl px-4">
				<motion.div
					initial={{ opacity: 0, y: 10 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: "-80px" }}
					transition={{ duration: 0.45, ease: "easeOut" }}
				>
					<div className="flex items-end justify-between gap-6">
						<div>
							<div className="text-xs tracking-[0.3em] text-stone-300/70">
								CATEGORIES
							</div>
							<h2 className="mt-3 text-premium text-3xl text-amber-100">
								Explore our premium range
							</h2>
						</div>
					</div>

					<div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
						{categories.map((c) => (
							<CategoryCard key={c.id} category={c} />
						))}
					</div>
				</motion.div>
			</div>
		</section>
	);
}
