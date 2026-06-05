import { motion } from "framer-motion";
import { MapPin, Navigation } from "lucide-react";

const ADDRESS =
	"Huda Complex, SCO 200, Block A, Sector 10, Urban Estate, Jind, Haryana 126102";

export default function Location() {
	const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(
		ADDRESS
	)}&output=embed`;

	return (
		<section className="py-16">
			<div className="mx-auto max-w-6xl px-4">
				<motion.div
					initial={{
						opacity: 0,
						y: 10,
					}}
					whileInView={{
						opacity: 1,
						y: 0,
					}}
					viewport={{
						once: true,
					}}
					transition={{
						duration: 0.45,
						ease: "easeOut",
					}}
				>
					<p
						className="
          text-xs 
          tracking-[0.3em]
          text-stone-300/70
          "
					>
						LOCATION
					</p>

					<h2
						className="
          mt-3 
          text-premium 
          text-3xl 
          text-amber-100
          "
					>
						Visit BISLA'S
					</h2>

					<p
						className="
          mt-3 
          max-w-2xl 
          text-sm 
          leading-relaxed
          text-stone-200/70
          "
					>
						Visit BISLA'S SWEETS & BAKERY in Jind — fresh sweets, cakes and
						celebration orders.
					</p>
				</motion.div>

				<div
					className="
        mt-10
        grid
        gap-6
        lg:grid-cols-5
        "
				>
					<div
						className="
          rounded-2xl
          border
          border-white/10
          bg-white/5
          p-6
          lg:col-span-2
          "
					>
						<div className="flex gap-3">
							<div
								className="
              flex 
              h-11 
              w-11 
              items-center 
              justify-center 
              rounded-xl 
              bg-amber-300/15
              text-amber-200
              "
							>
								<MapPin className="h-5 w-5" />
							</div>

							<div>
								<h3
									className="
                font-semibold
                text-white
                "
								>
									Address
								</h3>

								<p
									className="
                mt-2 
                text-sm 
                leading-6 
                text-stone-300
                "
								>
									{ADDRESS}
								</p>
							</div>
						</div>

						<a
							href={
								"https://www.google.com/maps/search/?api=1&query=" +
								encodeURIComponent(ADDRESS)
							}
							target="_blank"
							rel="noreferrer"
							className="
              mt-6
              inline-flex
              items-center
              gap-2
              rounded-xl
              border
              border-amber-300/40
              px-5
              py-3
              text-sm
              text-white
              hover:bg-white/10
              "
						>
							<Navigation
								className="
              h-4 
              w-4 
              text-amber-300
              "
							/>
							Get Directions
						</a>
					</div>

					<div
						className="
          overflow-hidden
          rounded-2xl
          border
          border-white/10
          bg-white/5
          lg:col-span-3
          "
					>
						<iframe
							title="BISLA'S SWEETS Location"
							src={mapSrc}
							className="
              h-[360px]
              w-full
              "
							loading="lazy"
						/>
					</div>
				</div>
			</div>
		</section>
	);
}
