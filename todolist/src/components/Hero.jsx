import React from "react";

function Hero(props) {
	return (
		<div className="w-48 h-64 flex flex-col rounded-xl bg-black overflow-hidden">
			<div className="h-36">
				<img
					src="https://cdn.vox-cdn.com/thumbor/ZkmdkuJUTLgJh96_FWQ5zweGGxo=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/23084330/bored_ape_nft_accidental_.jpg"
					alt="test"
					className="w-full h-full object-cover object-center"
				/>
			</div>

			<div className="flex flex-col p-3 text-white">
				<div className="flex justify-between">
					<h1 className="font-bold text-sm">{props.username}</h1>
					<h1 className="text-sm">{props.price}</h1>
				</div>

				<div className="flex justify-between text-sm">
					<p>#345</p>
					<p>0.01</p>
				</div>
			</div>
		</div>
	);
}

export default Hero;
