// import React from 'react'
import { useEffect, useId, useState } from "react";
import useCurrency from "../hooks/useCurrency";

function Input({
	label,
	amount,
	onAmountChange, //method
	onCurrChange,
	CurrOptions = [], //jsomn data byt default na aaye to khali array h
	selectCurr = "usd",
	amountDisable = false,
	currDisable = false,
	className = "", // user wanna give css from its own
}) {
	const amountInputId = useId() // used for indexing for multiple values bind label and input field
	return (
		<div className={`bg-white p-3 rounded-lg text-sm flex ${className} `}>
			<div className="w-1/2">
				<label htmlFor={amountInputId}  className="text-black/40 mb-2 inline-block">{label}</label>
				<input
				    id={amountInputId}
					className="outline-none w-full bg-transparent py-1.5"
					type="number"
					placeholder="Amount"
					disabled={amountDisable}
					value={amount}
					onChange={e =>
						onAmountChange && onAmountChange(Number(e.target.value))  // str to number
					}
				/>
			</div>
			<div className="w-1/2 flex flex-wrap justify-end text-right">
				<p className="text-black/40 mb-2 w-full">Currency Type</p>
				<select className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
				        value={selectCurr}
						onChange={(e)=> onCurrChange && onCurrChange(e.target.value)} // no need to number
						disabled={currDisable}
				>
					{/* if value nhi deni () agr deni h {} */}
					{/* loops me key ka dhyan rkho , like ids for db */}
					{CurrOptions.map((curr)=> (
						<option key={curr} value={curr}>
                              {curr}
						</option>
					))}
				</select>
			</div>
		</div>
	);
}

export default Input;
// better export index.js
