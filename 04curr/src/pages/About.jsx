import { motion } from "framer-motion";
import { BadgeCheck, HeartHandshake, Sparkles } from "lucide-react";

export default function About() {
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
						About BISLA'S SWEETS & BAKERY
					</motion.h1>
					<p className="mt-3 max-w-2xl text-sm leading-7 text-stone-200/70">
						A premium sweets and bakery shop built on tradition, quality, and
						customer trust.
					</p>
				</div>
			</section>

			<section className="py-14">
				<div className="mx-auto max-w-6xl px-4">
					<div className="grid gap-8 lg:grid-cols-2">
						<div className="rounded-2xl border border-white/10 bg-white/5 p-8">
							<div className="text-premium text-2xl text-amber-100">
								Our Story
							</div>
							<p className="mt-4 text-sm leading-7 text-stone-200/70">
								BISLA'S SWEETS & BAKERY celebrates the art of Indian mithai and
								the craft of modern baking. We blend time-tested recipes with
								premium ingredients and clean presentation — so every order
								feels special.
							</p>
							<p className="mt-4 text-sm leading-7 text-stone-200/70">
								From festive gifting to custom cakes, our focus is simple:
								consistent quality, fresh preparation, and a premium experience
								that customers trust.
							</p>
						</div>

						<div className="grid gap-5 sm:grid-cols-2">
							{[
								{
									title: "Tradition",
									desc: "Authentic flavours inspired by classic recipes.",
									Icon: Sparkles,
								},
								{
									title: "Quality",
									desc: "Premium ingredients with clean, elegant finishing.",
									Icon: BadgeCheck,
								},
								{
									title: "Customer Trust",
									desc: "On-time service and consistent taste people return for.",
									Icon: HeartHandshake,
								},
								{
									title: "Celebrations",
									desc: "Custom cakes and gifting designed to impress.",
									Icon: Sparkles,
								},
							].map(({ title, desc, Icon }) => (
								<motion.div
									key={title}
									whileHover={{ y: -4 }}
									transition={{ duration: 0.25, ease: "easeOut" }}
									className="rounded-2xl border border-white/10 bg-white/5 p-6"
								>
									<div className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-stone-950/40">
										<Icon className="h-5 w-5 text-amber-300" />
									</div>
									<div className="mt-4 text-premium text-lg text-amber-100">
										{title}
									</div>
									<p className="mt-2 text-sm leading-6 text-stone-200/70">
										{desc}
									</p>
								</motion.div>
							))}
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
