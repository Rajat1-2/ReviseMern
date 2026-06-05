import { AnimatePresence, motion } from "framer-motion";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import WhatsAppButton from "./components/WhatsAppButton.jsx";

import Home from "./pages/Home.jsx";
import Products from "./pages/Products.jsx";
import ProductDetails from "./pages/ProductDetails.jsx";
import Gallery from "./pages/Gallery.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";

function Page({ children }) {
	return (
		<motion.div
			initial={{ opacity: 0, y: 10 }}
			animate={{ opacity: 1, y: 0 }}
			exit={{ opacity: 0, y: -10 }}
			transition={{ duration: 0.35, ease: "easeOut" }}
		>
			{children}
		</motion.div>
	);
}

function AnimatedRoutes() {
	const location = useLocation();

	return (
		<AnimatePresence mode="wait">
			<Routes location={location} key={location.pathname}>
				<Route
					path="/"
					element={
						<Page>
							<Home />
						</Page>
					}
				/>
				<Route
					path="/products"
					element={
						<Page>
							<Products />
						</Page>
					}
				/>
				<Route
					path="/products/:id"
					element={
						<Page>
							<ProductDetails />
						</Page>
					}
				/>
				<Route
					path="/gallery"
					element={
						<Page>
							<Gallery />
						</Page>
					}
				/>
				<Route
					path="/about"
					element={
						<Page>
							<About />
						</Page>
					}
				/>
				<Route
					path="/contact"
					element={
						<Page>
							<Contact />
						</Page>
					}
				/>
			</Routes>
		</AnimatePresence>
	);
}

function AppShell() {
	return (
		<div className="min-h-dvh bg-stone-950">
			<Navbar />
			<main className="pt-16">
				<AnimatedRoutes />
			</main>
			<Footer />
			<WhatsAppButton />
		</div>
	);
}

export default function App() {
	return (
		<BrowserRouter>
			<AppShell />
		</BrowserRouter>
	);
}
