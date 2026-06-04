import { useState } from "react";
import Hero from "./assets/hero";

function App() {
	const [count, setCount] = useState(0);

	const increase = () => {
		setCount(count + 1);
	};

	const decrease = () => {
		setCount(count - 1);
	};

	const reset = () => {
		setCount(0);
	};

	return (
		<div className="flex h-screen flex-col items-center justify-center bg-blue-950">
			<h1 className="mb-8 text-5xl font-bold text-blue-500">Counter App 🚀</h1>

			<h2 className="mb-8 text-6xl font-bold text-white">{count}</h2>

			<div className="flex gap-5">
				<button
					onClick={increase}
					className="rounded-xl bg-green-500 px-6 py-3 text-xl font-bold text-white"
				>
					+
				</button>

				<button
					onClick={reset}
					className="rounded-xl bg-gray-500 px-6 py-3 text-xl font-bold text-white"
				>
					Reset
				</button>

				<button
					onClick={decrease}
					className="rounded-xl bg-red-500 px-6 py-3 text-xl font-bold text-white"
				>
					-
				</button>
			</div>

		</div>
	);
}

export default App;
