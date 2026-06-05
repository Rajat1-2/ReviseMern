import { useEffect, useMemo, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, Phone, X } from "lucide-react";

import Button from "./Button.jsx";
import { openWhatsApp } from "../utils/whatsapp.js";

const PHONE = "9896661080";

export default function Navbar() {
	const [open, setOpen] = useState(false);

	const navItems = useMemo(
		() => [
			{ to: "/", label: "Home" },
			{ to: "/products", label: "Products" },
			{ to: "/gallery", label: "Gallery" },
			{ to: "/about", label: "About" },
			{ to: "/contact", label: "Contact" },
		],
		[]
	);

	useEffect(() => {
		if (!open) return;
		const onKeyDown = e => {
			if (e.key === "Escape") setOpen(false);
		};
		window.addEventListener("keydown", onKeyDown);
		return () => window.removeEventListener("keydown", onKeyDown);
	}, [open]);

	const linkBase =
		"text-sm font-medium tracking-wide transition-colors hover:text-amber-200";
	const linkActive = "text-amber-200";
	const linkInactive = "text-stone-200/80";

	function handleWhatsApp() {
		openWhatsApp({
			phone: PHONE,
			message: "Hello BISLA'S, I want to place an order.",
		});
	}

	return (
		<header className="fixed inset-x-0 top-0 z-50">
			<div className="bg-stone-950/70 backdrop-blur supports-[backdrop-filter]:bg-stone-950/55 border-b border-white/10">
				<div className="mx-auto max-w-6xl px-4">
					<div className="flex h-16 items-center justify-between">
						<Link to="/" className="flex items-center gap-3">
							<div className="h-10 w-10 rounded-xl bg-linear-to-br from-amber-200 via-amber-300 to-amber-500" />
							<div className="leading-tight">
								<div className="text-sm text-amber-200/90 tracking-[0.25em]">
									BISLA'S
								</div>
								<div className="text-xs text-stone-200/80 tracking-wide">
									SWEETS & BAKERY
								</div>
							</div>
						</Link>

						<nav className="hidden md:flex items-center gap-7">
							{navItems.map(item => (
								<NavLink
									key={item.to}
									to={item.to}
									className={({ isActive }) =>
										`${linkBase} ${isActive ? linkActive : linkInactive}`
									}
									end={item.to === "/"}
								>
									{item.label}
								</NavLink>
							))}
						</nav>

						<div className="hidden md:flex items-center gap-3">
							<a
								href={`tel:${PHONE}`}
								className="hidden lg:inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-stone-100/90 hover:bg-white/10"
							>
								<Phone className="h-4 w-4 text-amber-200" />
								{PHONE}
							</a>
							<Button variant="primary" onClick={handleWhatsApp}>
								Order on WhatsApp
							</Button>
						</div>

						<button
							onClick={() => setOpen(v => !v)}
							className="md:hidden inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 p-2 text-stone-100/90"
							aria-label={open ? "Close menu" : "Open menu"}
						>
							{open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
						</button>
					</div>
				</div>

				{open ? (
					<div className="md:hidden border-t border-white/10">
						<div className="mx-auto max-w-6xl px-4 py-4">
							<div className="flex flex-col gap-2">
								{navItems.map(item => (
									<NavLink
										key={item.to}
										to={item.to}
										onClick={() => setOpen(false)}
										className={({ isActive }) =>
											`rounded-xl px-4 py-3 ${
												isActive
													? "bg-white/5 text-amber-200"
													: "text-stone-100/90 hover:bg-white/5"
											}`
										}
										end={item.to === "/"}
									>
										{item.label}
									</NavLink>
								))}
							</div>

							<div className="mt-4 flex flex-col gap-3">
								<a
									href={`tel:${PHONE}`}
									className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm text-stone-100/90"
								>
									<Phone className="h-4 w-4 text-amber-200" />
									Call {PHONE}
								</a>
								<Button variant="primary" onClick={handleWhatsApp}>
									Order on WhatsApp
								</Button>
							</div>
						</div>
					</div>
				) : null}
			</div>
		</header>
	);
}
