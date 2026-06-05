import { motion } from "framer-motion";

const gallery = [
	{
		title: "Shop Interior",
		items: [
			{
				src: "/images/gallery/interior.svg",
				alt: "Premium shop interior",
			},
			{
				src: "/images/gallery/interior.svg",
				alt: "Interior seating",
			},
			{
				src: "/images/gallery/interior.svg",
				alt: "Counter display",
			},
		],
	},

	{
		title: "Sweets",
		items: [
			{
				src: "/images/gallery/sweets.svg",
				alt: "Traditional sweets",
			},
			{
				src: "/images/gallery/sweets.svg",
				alt: "Gift boxes",
			},
			{
				src: "/images/gallery/sweets.svg",
				alt: "Assorted mithai",
			},
		],
	},

	{
		title: "Cakes",
		items: [
			{
				src: "/images/gallery/cakes.svg",
				alt: "Premium cakes",
			},
			{
				src: "/images/gallery/cakes.svg",
				alt: "Custom celebration cakes",
			},
			{
				src: "/images/gallery/cakes.svg",
				alt: "Cake counter",
			},
		],
	},

	{
		title: "Events",
		items: [
			{
				src: "/images/gallery/events.svg",
				alt: "Wedding orders",
			},
			{
				src: "/images/gallery/events.svg",
				alt: "Celebrations",
			},
			{
				src: "/images/gallery/events.svg",
				alt: "Corporate gifting",
			},
		],
	},
];

export default function Gallery() {
	return (
		<div className="min-h-screen bg-stone-950">
			<section className="relative overflow-hidden border-b border-white/10">
				<div className="absolute inset-0 bg-[radial-gradient(70%_55%_at_50%_0%,rgba(251,191,36,0.18),transparent_60%)]" />

				<div className="relative mx-auto max-w-6xl px-4 py-14">
					<motion.h1
						initial={{
							opacity: 0,
							y: 10,
						}}
						animate={{
							opacity: 1,
							y: 0,
						}}
						transition={{
							duration: 0.45,
						}}
						className="text-premium text-4xl text-amber-100"
					>
						Gallery
					</motion.h1>

					<p className="mt-3 max-w-2xl text-sm text-stone-300">
						A premium glimpse into our interiors, sweets, cakes and celebration
						moments.
					</p>
				</div>
			</section>

			<section className="mx-auto max-w-6xl px-4 py-14">
				<div className="space-y-12">
					{gallery.map(section => (
						<motion.div
							key={section.title}
							initial={{
								opacity: 0,
								y: 20,
							}}
							whileInView={{
								opacity: 1,
								y: 0,
							}}
							viewport={{
								once: true,
							}}
						>
							<h2 className="text-premium text-2xl text-amber-100">
								{section.title}
							</h2>

							<div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
								{section.items.map((img, index) => (
									<motion.div
										key={index}
										whileHover={{
											y: -5,
										}}
										className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5"
									>
										<div className="relative aspect-[4/3] overflow-hidden">
											<img
												src={img.src}
												alt={img.alt}
												className="
                          h-full 
                          w-full 
                          object-cover
                          transition
                          duration-500
                          group-hover:scale-105
                          "
												loading="lazy"
											/>

											<div
												className="
                        absolute 
                        inset-0 
                        bg-gradient-to-t 
                        from-stone-950/70 
                        to-transparent
                        "
											/>
										</div>
									</motion.div>
								))}
							</div>
						</motion.div>
					))}
				</div>
			</section>
		</div>
	);
}
