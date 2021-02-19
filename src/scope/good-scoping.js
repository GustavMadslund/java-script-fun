const logVisibleLightWaves = () => {
	let lightWaves = 'Moonlight';
	let region = 'The Arctic';
	if (region === 'The Arctic') {
		let lightWaves = 'Northern Lights'; //Bad practice to reuse variable name
		console.log(lightWaves);
	}
	
	console.log(lightWaves);
}

logVisibleLightWaves();