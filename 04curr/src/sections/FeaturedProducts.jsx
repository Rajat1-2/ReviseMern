import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import Button from "../components/Button.jsx";
import ProductCard from "../components/ProductCard.jsx";
import { products } from "../data/products.js";

export default function FeaturedProducts() {
	const featured = [...products]
		.sort((a, b) => Number(b.rating) - Number(a.rating))
		.slice(0, 6);

	return (
		<section className="py-14 sm:py-18">
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
					<div
						className="
          flex 
          flex-col 
          gap-4 
          sm:flex-row 
          sm:items-end 
          sm:justify-between
          "
					>
						<div>
							<p
								className="
              text-xs 
              tracking-[0.3em]
              text-stone-300/70
              "
							>
								BEST SELLING
							</p>

							<h2
								className="
              mt-3 
              text-premium 
              text-3xl 
              text-amber-100
              "
							>
								Loved by customers
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
								Signature sweets and premium bakes — crafted for gifting and
								celebrations.
							</p>
						</div>

						<Button as={Link} to="/products" variant="outline">
							View All
						</Button>
					</div>

					<div
						className="
          mt-8 
          grid 
          gap-6 
          sm:grid-cols-2 
          lg:grid-cols-3
          "
					>
						{featured.map(product => (
							<ProductCard key={product.id} product={product} />
						))}
					</div>
				</motion.div>
			</div>
		</section>
	);
}
