import { fetchWeatherData } from "./fetchapi";



console.log("hello");

const search = document.getElementById("search");
const place = document.querySelector(".place");

search.addEventListener("keypress", (e) => {
    if(e.key === 'Enter'){
        getdata(search.value);
    }
})

const getdata = (location) => {
    console.log(fetchWeatherData(location).then(data => {
        if(data.cod == 404){
            place.innerText = "Invalid City";
        }else{
            displayweather(data);
        }
    } ));
}

const displayweather = (data) =>{
    place.innerText = data.name;
    console.log(data.name);
    console.log(data.main.temp);
    console.log(data.main.feels_like);
    console.log(data.main.humidity);
    console.log(data.weather.description);
    console.log(data.weather[0].main);
}