
async function fetchWeatherData(location) {
    let response = await fetch(   `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=cc4487625a762b0487d81b80ddd64e2b`, {mode: "cors"});
    const fetchData = await response.json();
    return fetchData;
}
export{fetchWeatherData};