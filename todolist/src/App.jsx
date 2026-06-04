import "./App.css";
import Hero from "./components/Hero";

function App() {
  const obj={
    name: "rajat",
    price : 0.5,
  }
	return (
		<div className="bg-amber-500 p-5">
			<h1 className="mb-5 w-150 ml-100 rounded-2xl bg-green-300 p-4 text-3xl text-black">
				MY REACT APP
			</h1>

			<div  className="  flex flex-row justify-between">
				<Hero obj />
				<Hero username="Sakshi" price="-1/12" />
				<Hero username="Neha" price="0" />
			</div>
		</div>
	);
}

export default App;
