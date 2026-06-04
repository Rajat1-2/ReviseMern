import { useEffect, useState } from "react";

function useCurrency(currency) {
	// can directly fetch api but i want ki jb bhi koi use kre tb api call kro
    const[data,setdata]=useState({});
	useEffect(() => {
		fetch(
			`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json `
		)
			.then(res => res.json())
			.then(res => setdata(res[currency]));
        console.log(data);
	}, [currency]);

    // return kya kre data, setdata ya arr of both 
    return  data;
}

export default useCurrency; 
