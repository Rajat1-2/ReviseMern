import { motion } from "framer-motion";
import { MapPin, Phone } from "lucide-react";

const ADDRESS =
	"Huda Complex, SCO 200, Block A, Sector 10, Urban Estate, Jind, Haryana 126102";

const PHONE = "98966 61080";

export default function Contact() {
	const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(
		ADDRESS
	)}&output=embed`;

	return (
		<div className="bg-stone-950 min-h-screen">
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
						className="text-premium text-4xl text-stone-50"
					>
						Contact
					</motion.h1>

					<p className="mt-3 max-w-2xl text-sm leading-7 text-stone-200/70">
						Reach BISLA'S SWEETS & BAKERY for custom orders, gifting and bulk
						bookings.
					</p>
				</div>
			</section>

			<section className="py-14">
				<div className="mx-auto max-w-6xl px-4">
					<div className="grid gap-6 lg:grid-cols-5">
						<div className="space-y-5 lg:col-span-2">
							<div className="rounded-2xl border border-white/10 bg-white/5 p-6">
								<div className="flex gap-3">
									<MapPin className="h-6 w-6 text-amber-300" />

									<div>
										<h3 className="font-semibold text-white">Address</h3>

										<p className="mt-2 text-sm text-stone-300">{ADDRESS}</p>
									</div>
								</div>
							</div>

							<div className="rounded-2xl border border-white/10 bg-white/5 p-6">
								<div className="flex gap-3 items-center">
									<Phone className="h-6 w-6 text-amber-300" />

									<div>
										<h3 className="font-semibold text-white">Phone</h3>

										<a
											href="tel:9896661080"
											className="text-stone-300 hover:text-amber-300"
										>
											{PHONE}
										</a>
									</div>
								</div>
							</div>
						</div>

						<div className="overflow-hidden rounded-2xl border border-white/10 lg:col-span-3">
							<iframe
								title="BISLA'S SWEETS & BAKERY Map"
								src={mapSrc}
								className="h-[420px] w-full"
								loading="lazy"
							/>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
