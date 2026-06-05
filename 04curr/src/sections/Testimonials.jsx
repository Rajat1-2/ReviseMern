// import { motion } from "framer-motion";

// import ReviewCard from "../components/ReviewCard.jsx";
// import { reviews } from "../data/reviews.js";

// export default function Testimonials() {
// 	return (
// 		<section className="py-16">
// 			<div className="mx-auto max-w-6xl px-4">
// 				<motion.div
// 					initial={{ opacity: 0, y: 10 }}
// 					whileInView={{ opacity: 1, y: 0 }}
// 					viewport={{ once: true, margin: "-60px" }}
// 					transition={{ duration: 0.45, ease: "easeOut" }}
// 				>
// 					<h2 className="text-premium text-3xl text-stone-50">Customer Reviews</h2>
// 					<p className="mt-3 max-w-2xl text-sm leading-7 text-stone-200/70">
// 						What customers say about BISLA'S — taste, quality, freshness, and service.
// 					</p>
// 				</motion.div>

// 				<div className="mt-10 grid gap-5 md:grid-cols-3">
// 					{reviews.map((r) => (
// 						<ReviewCard key={r.id} review={r} />
// 					))}
// 				</div>
// 			</div>
// 		</section>
// 	);
// }
import { motion } from "framer-motion";
import ReviewCard from "../components/ReviewCard.jsx";
import { reviews } from "../data/reviews.js";

export default function Testimonials() {
	return (
		<section className="py-14 sm:py-18">
			<div className="mx-auto max-w-6xl px-4">
				<motion.div
					initial={{ opacity: 0, y: 10 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: "-80px" }}
					transition={{ duration: 0.45, ease: "easeOut" }}
				>
					<div className="text-xs tracking-[0.3em] text-stone-300/70">
						REVIEWS
					</div>
					<h2 className="mt-3 text-premium text-3xl text-amber-100">
						What customers say
					</h2>
					<p className="mt-3 max-w-2xl text-sm leading-relaxed text-stone-200/70">
						Real feedback that keeps us improving — freshness, flavour, and premium
						presentation.
					</p>

					<div className="mt-8 grid gap-6 md:grid-cols-3">
						{reviews.map((r) => (
							<ReviewCard key={r.id} review={r} />
						))}
					</div>
				</motion.div>
			</div>
		</section>
	);
}
