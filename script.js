function convert() {
	let temperature = document.getElementById("temperature").value;
	let unit = document.getElementById("unit").value;
	let result;

	if (unit === "celsius") {
		result = (temperature * 1.8) + 32;
		result = Math.round(result * 10) / 10; // round to 1 decimal place
		result = "Temperature in Fahrenheit="+result + "°F";
	} else if (unit === "fahrenheit") {
		result = (temperature - 32) / 1.8;
		result = Math.round(result * 10) / 10; // round to 1 decimal place
		result ="Temperature in Celsius="+ result + "°C";
	}

	document.getElementById("result").innerHTML = result;
}
