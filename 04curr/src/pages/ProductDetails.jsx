import { ArrowLeft, Star } from "lucide-react";
import { Link, useParams } from "react-router-dom";

import Button from "../components/Button.jsx";
import { products } from "../data/products.js";
import { openWhatsApp } from "../utils/whatsapp.js";

const PHONE = "9896661080";

function formatINR(value) {
	try {
		return new Intl.NumberFormat("en-IN", {
			style: "currency",
			currency: "INR",
			maximumFractionDigits: 0,
		}).format(value);
	} catch {
		return `₹${value}`;
	}
}

export default function ProductDetails() {
	const { id } = useParams();

	const product = products.find(p => String(p.id) === String(id));

	if (!product) {
		return (
			<div className="mx-auto max-w-6xl px-4 py-12">
				<div className="rounded-3xl border border-white/10 bg-white/5 p-8">
					<h1 className="text-premium text-2xl text-amber-100">
						Product not found
					</h1>

					<p className="mt-3 text-sm text-stone-200/70">
						Please go back to products catalog.
					</p>

					<div className="mt-6">
						<Button as={Link} to="/products" variant="outline">
							Back to Products
						</Button>
					</div>
				</div>
			</div>
		);
	}

	return (
		<div className="mx-auto max-w-6xl px-4 py-10 sm:py-14">
			<Link
				to="/products"
				className="
      inline-flex 
      items-center 
      gap-2 
      text-sm 
      text-stone-300
      hover:text-amber-200
      "
			>
				<ArrowLeft className="h-4 w-4" />
				Back to Products
			</Link>

			<div className="mt-6 grid gap-8 lg:grid-cols-2">
				<div
					className="
        overflow-hidden 
        rounded-3xl 
        border 
        border-white/10
        bg-white/5
        "
				>
					<img
						src={product.image}
						alt={product.name}
						className="
          h-full 
          w-full 
          object-cover
          "
					/>
				</div>

				<div
					className="
        rounded-3xl 
        border 
        border-white/10 
        bg-white/5 
        p-8
        "
				>
					<p
						className="
          text-xs 
          tracking-[0.3em]
          text-stone-300/70
          "
					>
						{product.category.toUpperCase()}
					</p>

					<h1
						className="
          mt-3 
          text-premium 
          text-4xl 
          text-amber-100
          "
					>
						{product.name}
					</h1>

					<div className="mt-5 flex gap-4 items-center">
						<span
							className="
            text-2xl 
            font-semibold 
            text-white
            "
						>
							{formatINR(product.price)}
						</span>

						<span
							className="
            flex 
            items-center 
            gap-2
            rounded-full
            border
            border-white/10
            px-4
            py-2
            text-white
            "
						>
							<Star className="h-4 w-4 text-amber-300" />

							{Number(product.rating).toFixed(1)}
						</span>
					</div>

					<p
						className="
          mt-6 
          leading-relaxed
          text-stone-300
          "
					>
						{product.description}
					</p>

					<div className="mt-8 flex flex-col gap-3 sm:flex-row">
						<Button
							variant="primary"
							onClick={() =>
								openWhatsApp({
									phone: PHONE,

									message: `Hello BISLA'S,\nI want to order ${product.name}`,
								})
							}
						>
							Order Now on WhatsApp
						</Button>

						<Button as={Link} to="/products" variant="outline">
							Browse More
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
}
