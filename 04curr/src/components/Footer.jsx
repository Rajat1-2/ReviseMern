import { Link } from "react-router-dom";
import { MapPin, Phone } from "lucide-react";

const PHONE = "98966 61080";
const ADDRESS =
	"Huda Complex, SCO 200, Block A, Sector 10, Urban Estate, Jind, Haryana 126102";

export default function Footer() {
	return (
		<footer className="border-t border-white/10 bg-stone-950">
			<div className="mx-auto max-w-6xl px-4 py-12">
				<div className="grid gap-10 md:grid-cols-3">
					<div>
						<div className="text-premium text-2xl tracking-tight text-amber-100">
							BISLA'S
							<span className="text-stone-100"> SWEETS & BAKERY</span>
						</div>
						<p className="mt-3 text-sm leading-relaxed text-stone-200/70">
							A premium destination for mithai, cakes, and fresh bakery delights
							— crafted with tradition, quality, and elegance.
						</p>
					</div>

					<div>
						<div className="text-sm font-semibold text-stone-100">
							Quick Links
						</div>
						<div className="mt-4 grid gap-2 text-sm">
							<Link
								className="text-stone-200/70 hover:text-amber-200"
								to="/products"
							>
								Products
							</Link>
							<Link
								className="text-stone-200/70 hover:text-amber-200"
								to="/gallery"
							>
								Gallery
							</Link>
							<Link
								className="text-stone-200/70 hover:text-amber-200"
								to="/about"
							>
								About
							</Link>
							<Link
								className="text-stone-200/70 hover:text-amber-200"
								to="/contact"
							>
								Contact
							</Link>
						</div>
					</div>

					<div>
						<div className="text-sm font-semibold text-stone-100">Contact</div>
						<div className="mt-4 space-y-3 text-sm text-stone-200/70">
							<div className="flex items-start gap-3">
								<MapPin className="mt-0.5 h-4 w-4 text-amber-200" />
								<span>{ADDRESS}</span>
							</div>
							<div className="flex items-center gap-3">
								<Phone className="h-4 w-4 text-amber-200" />
								<a className="hover:text-amber-200" href="tel:9896661080">
									{PHONE}
								</a>
							</div>
						</div>
					</div>
				</div>

				<div className="mt-10 flex flex-col gap-2 border-t border-white/10 pt-6 text-xs text-stone-200/60 md:flex-row md:items-center md:justify-between">
					<div>
						© {new Date().getFullYear()} BISLA'S SWEETS & BAKERY. All rights
						reserved.
					</div>
					<div className="tracking-wide">
						Premium sweets • Premium bakes • Custom cakes
					</div>
				</div>
			</div>
		</footer>
	);
}
