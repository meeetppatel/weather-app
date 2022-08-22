import { fetchWeatherData } from "./fetchapi";



console.log("hello");

const search = document.getElementById("search");
const place = document.querySelector(".place");

search.addEventListener("keypress", (e) => {
    if(e.key === 'Enter'){
        getdata(search.value);
        search.value ="";
    }
})

const getdata = (location) => {
    console.log(fetchWeatherData(location).then(data => {
        if(data.cod == 404){
            place.innerText = "Invalid City";
        }else{
            displayweather(data);
            updateImg(data);
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

    let temp = document.querySelector(".temp");
    let weatherdet = document.querySelector(".weatherdetails");
    let feelslike = document.querySelector(".feels");
    let humidity = document.querySelector(".humidity");
    let visibility = document.querySelector(".visibility");
    let wind = document.querySelector(".wind");

    temp.textContent = `${Math.round(data.main.temp-273.15)} °C`;
    weatherdet.textContent=`${data.weather[0].main}`;
    feelslike.textContent= `Feels Like : ${Math.round(data.main.feels_like - 273.15)} °C`;
    humidity.textContent=`Humidity : ${data.main.humidity} %`;
    visibility.textContent=`Visibility : ${data.visibility / 1000} Km`;
    wind.textContent=`Wind Speed : ${Math.round((data.wind.speed * 60 * 60) / 1000)} Km/h`;
}

const updateImg = (data) =>{
    const container = document.getElementById("cont");
    let weather = data.weather[0].main;

    if(weather === "Rain" || weather === "Drizzle" || weather === "Thunderstorm"){
        container.classList.add("rain");
        container.classList.remove("clear");
        container.classList.remove("haze");
        container.classList.remove("clouds");
    }else if( weather === "Clouds"){
        container.classList.add("clouds");
        container.classList.remove("clear");
        container.classList.remove("rain");
        container.classList.remove("haze");
    }else if( weather === "Haze"){
        container.classList.add("haze");
        container.classList.remove("clear");
        container.classList.remove("rain");
        container.classList.remove("clouds");
    }else{
        container.classList.add("clear");
        container.classList.remove("haze");
        container.classList.remove("rain");
        container.classList.remove("clouds");
    }
}