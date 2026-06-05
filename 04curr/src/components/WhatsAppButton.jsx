import { MessageCircle } from "lucide-react";

import { openWhatsApp } from "../utils/whatsapp.js";

const PHONE = "9896661080";

export default function WhatsAppButton() {
	return (
		<button
			onClick={() =>
				openWhatsApp({
					phone: PHONE,
					message: "Hello BISLA'S, I want to place an order.",
				})
			}
			className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full bg-linear-to-r from-amber-200 via-amber-300 to-amber-500 px-4 py-3 text-sm font-semibold text-stone-950 shadow-premium hover:from-amber-100 hover:to-amber-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300/60 focus-visible:ring-offset-2 focus-visible:ring-offset-stone-950"
			aria-label="Order on WhatsApp"
		>
			<MessageCircle className="h-5 w-5" />
			<span className="hidden sm:inline">WhatsApp</span>
		</button>
	);
}
