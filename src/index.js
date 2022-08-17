import { fetchWeatherData } from "./fetchapi";

console.log(fetchWeatherData("poland").then(data => {
    console.log(data.weather[0]);
} ));

console.log("hello");