import Hero from "../sections/Hero.jsx";
import Categories from "../sections/Categories.jsx";
import FeaturedProducts from "../sections/FeaturedProducts.jsx";
import WhyChooseUs from "../sections/WhyChooseUs.jsx";
import Testimonials from "../sections/Testimonials.jsx";
import Location from "../sections/Location.jsx";

export default function Home() {
	return (
		<>
			<Hero />
			<Categories />
			<FeaturedProducts />
			<WhyChooseUs />
			<Testimonials />
			<Location />
		</>
	);
}
