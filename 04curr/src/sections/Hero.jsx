import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

import Button from "../components/Button.jsx";
import { openWhatsApp } from "../utils/whatsapp.js";

const PHONE = "9896661080";

export default function Hero() {
	return (
		<section className="relative overflow-hidden">
			<div
				className="relative min-h-[78vh] w-full bg-[url('/images/hero.svg')] bg-cover bg-center"
				role="img"
				aria-label="Premium sweets and bakery"
			>
				<div className="absolute inset-0 bg-linear-to-b from-stone-950/75 via-stone-950/55 to-stone-950" />
				<div className="absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_10%,rgba(251,191,36,0.22),transparent_60%)]" />

				<div className="relative mx-auto flex min-h-[78vh] max-w-6xl items-center px-4 py-20">
					<div className="max-w-2xl">
						<motion.div
							initial={{ opacity: 0, y: 10 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, ease: "easeOut" }}
							className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-stone-100/85"
						>
							<Sparkles className="h-4 w-4 text-amber-300" />
							Luxury sweets • premium bakery • custom cakes
						</motion.div>

						<motion.h1
							initial={{ opacity: 0, y: 14 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.65, ease: "easeOut", delay: 0.05 }}
							className="text-premium mt-6 text-4xl leading-[1.05] text-stone-50 sm:text-5xl"
						>
							Experience the Sweetness of Tradition
						</motion.h1>

						<motion.p
							initial={{ opacity: 0, y: 14 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.65, ease: "easeOut", delay: 0.12 }}
							className="mt-5 text-sm leading-7 text-stone-200/75 sm:text-base"
						>
							From premium mithai to celebration cakes — BISLA'S SWEETS & BAKERY
							brings a modern, elegant experience with authentic Indian flavours.
						</motion.p>

						<motion.div
							initial={{ opacity: 0, y: 14 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.65, ease: "easeOut", delay: 0.18 }}
							className="mt-8 flex flex-col gap-3 sm:flex-row"
						>
							<Button as={Link} to="/products" variant="primary">
								Explore Products <ArrowRight className="h-4 w-4" />
							</Button>
							<Button
								variant="outline"
								onClick={() =>
									openWhatsApp({
										phone: PHONE,
										message:
											"Hello BISLA'S, I want to place an order. Please share your catalog.",
									})
								}
							>
								Order on WhatsApp
							</Button>
						</motion.div>

						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ duration: 0.8, delay: 0.25 }}
							className="mt-10 grid max-w-xl grid-cols-2 gap-3 sm:grid-cols-4"
						>
							{[
								{ label: "Fresh", value: "Daily" },
								{ label: "Orders", value: "Custom" },
								{ label: "Gifting", value: "Premium" },
								{ label: "Taste", value: "Authentic" },
							].map((item) => (
								<div
									key={item.label}
									className="rounded-2xl border border-white/10 bg-white/5 p-4"
								>
									<div className="text-sm font-semibold text-amber-200">
										{item.value}
									</div>
									<div className="mt-1 text-xs text-stone-200/70">
										{item.label}
									</div>
								</div>
							))}
						</motion.div>
					</div>
				</div>
			</div>
		</section>
	);
}
// import { motion } from "framer-motion";
// import { ArrowRight, Sparkles } from "lucide-react";
// import { Link } from "react-router-dom";

// import Button from "../components/Button.jsx";
// import { openWhatsApp } from "../utils/whatsapp.js";

// const PHONE = "9896661080";

// export default function Hero() {
// 	return (
// 		<section className="relative overflow-hidden">
// 			<div className="absolute inset-0">
// 				<div className="absolute inset-0 bg-[url('/images/hero.svg')] bg-cover bg-center" />
// 				<div className="absolute inset-0 bg-linear-to-b from-stone-950/35 via-stone-950/80 to-stone-950" />
// 			</div>

// 			<div className="relative mx-auto max-w-6xl px-4 py-18 sm:py-22 lg:py-26">
// 				<motion.div
// 					initial={{ opacity: 0, y: 14 }}
// 					animate={{ opacity: 1, y: 0 }}
// 					transition={{ duration: 0.6, ease: "easeOut" }}
// 					className="max-w-2xl"
// 				>
// 					<div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-stone-200/80">
// 						<Sparkles className="h-4 w-4 text-amber-300" />
// 						Luxury sweets • Premium bakes • Custom cakes
// 					</div>

// 					<h1 className="mt-6 text-premium text-4xl leading-tight text-amber-100 sm:text-5xl">
// 						Experience the Sweetness of Tradition
// 					</h1>
// 					<p className="mt-5 text-base leading-relaxed text-stone-200/75 sm:text-lg">
// 						BISLA'S SWEETS & BAKERY brings premium mithai, celebration cakes and
// 						fresh bakery delights — crafted to impress, made to gift.
// 					</p>

// 					<div className="mt-8 flex flex-col gap-3 sm:flex-row">
// 						<Button as={Link} to="/products" variant="primary" className="sm:w-auto">
// 							Explore Products <ArrowRight className="h-4 w-4" />
// 						</Button>
// 						<Button
// 							variant="outline"
// 							onClick={() =>
// 								openWhatsApp({
// 									phone: PHONE,
// 									message:
// 										"Hello BISLA'S, I want to order. Please share options and prices.",
// 								})
// 							}
// 						>
// 							Order on WhatsApp
// 						</Button>
// 					</div>

// 					<div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
// 						{[
// 							{ label: "Fresh Daily", value: "Baked" },
// 							{ label: "Premium", value: "Quality" },
// 							{ label: "Custom", value: "Cakes" },
// 							{ label: "Wedding", value: "Orders" },
// 						].map((item) => (
// 							<div
// 								key={item.label}
// 								className="rounded-2xl border border-white/10 bg-white/5 p-4"
// 							>
// 								<div className="text-premium text-lg text-amber-100">
// 									{item.value}
// 								</div>
// 								<div className="mt-1 text-xs text-stone-200/70">{item.label}</div>
// 							</div>
// 						))}
// 					</div>
// 				</motion.div>
// 			</div>
// 		</section>
// 	);
// }
