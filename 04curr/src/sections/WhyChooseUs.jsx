// import { motion } from "framer-motion";
// import { BadgeCheck, Cake, Leaf, Sparkles } from "lucide-react";

// const items = [
// 	{
// 		title: "Fresh Ingredients",
// 		description: "Carefully selected ingredients for a clean, premium taste.",
// 		Icon: Leaf,
// 	},
// 	{
// 		title: "Premium Quality",
// 		description: "Beautiful finishes, balanced flavours, and consistent quality.",
// 		Icon: BadgeCheck,
// 	},
// 	{
// 		title: "Custom Cakes",
// 		description: "Personalised designs for birthdays, anniversaries, and milestones.",
// 		Icon: Cake,
// 	},
// 	{
// 		title: "Wedding Orders",
// 		description: "Elegant bulk orders and gifting — crafted to impress.",
// 		Icon: Sparkles,
// 	},
// ];

export default function WhyChooseUs() {
	return (
		<section className="py-16">
			<div className="mx-auto max-w-6xl px-4">
				<motion.div
					initial={{ opacity: 0, y: 10 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: "-60px" }}
					transition={{ duration: 0.45, ease: "easeOut" }}
				>
					<h2 className="text-premium text-3xl text-stone-50">Why Choose Us</h2>
					<p className="mt-3 max-w-2xl text-sm leading-7 text-stone-200/70">
						A premium experience — from taste to packaging — crafted for trust and repeat
						orders.
					</p>
				</motion.div>

				<div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
					{items.map(({ title, description, Icon }) => (
						<motion.div
							key={title}
							whileHover={{ y: -4 }}
							transition={{ duration: 0.2, ease: "easeOut" }}
							className="rounded-2xl border border-white/10 bg-white/5 p-6"
						>
							<div className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-stone-950/40">
								<Icon className="h-5 w-5 text-amber-300" />
							</div>
							<div className="mt-4 text-premium text-lg text-amber-100">
								{title}
							</div>
							<p className="mt-2 text-sm leading-6 text-stone-200/70">
								{description}
							</p>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
import { motion } from "framer-motion";
import { BadgeCheck, Cake, Leaf, Sparkles } from "lucide-react";

const items = [
	{
		title: "Fresh Ingredients",
		text: "Made fresh with carefully sourced ingredients and clean flavours.",
		Icon: Leaf,
	},
	{
		title: "Premium Quality",
		text: "A premium finish in taste, texture, and presentation — every time.",
		Icon: BadgeCheck,
	},
	{
		title: "Custom Cakes",
		text: "Personalised designs for birthdays, anniversaries and events.",
		Icon: Cake,
	},
	{
		title: "Wedding Orders",
		text: "Elegant gifting and bulk orders with premium packaging.",
		Icon: Sparkles,
	},
];

// export default function WhyChooseUs() {
// 	return (
// 		<section className="py-14 sm:py-18">
// 			<div className="mx-auto max-w-6xl px-4">
// 				<motion.div
// 					initial={{ opacity: 0, y: 10 }}
// 					whileInView={{ opacity: 1, y: 0 }}
// 					viewport={{ once: true, margin: "-80px" }}
// 					transition={{ duration: 0.45, ease: "easeOut" }}
// 				>
// 					<div className="text-xs tracking-[0.3em] text-stone-300/70">WHY US</div>
// 					<h2 className="mt-3 text-premium text-3xl text-amber-100">
// 						Crafted to feel premium
// 					</h2>
// 					<p className="mt-3 max-w-2xl text-sm leading-relaxed text-stone-200/70">
// 						From traditional mithai to celebration cakes — we keep quality, freshness,
// 						and premium presentation at the center.
// 					</p>

// 					<div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
// 						{items.map(({ title, text, Icon }) => (
// 							<motion.div
// 								key={title}
// 								whileHover={{ y: -4 }}
// 								transition={{ duration: 0.25, ease: "easeOut" }}
// 								className="rounded-2xl border border-white/10 bg-white/5 p-6"
// 							>
// 								<div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-amber-300/15 text-amber-200 ring-1 ring-amber-300/25">
// 									<Icon className="h-5 w-5" />
// 								</div>
// 								<div className="mt-4 text-premium text-lg text-amber-100">
// 									{title}
// 								</div>
// 								<p className="mt-2 text-sm leading-relaxed text-stone-200/70">
// 									{text}
// 								</p>
// 							</motion.div>
// 						))}
// 					</div>
// 				</motion.div>
// 			</div>
// 		</section>
// 	);
// }
