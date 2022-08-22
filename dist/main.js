/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fetchWeatherData": () => (/* binding */ fetchWeatherData)
/* harmony export */ });

async function fetchWeatherData(location) {
    let response = await fetch(   `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=cc4487625a762b0487d81b80ddd64e2b`, {mode: "cors"});
    const fetchData = await response.json();
    return fetchData;
}


/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _fetchapi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);




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
    console.log((0,_fetchapi__WEBPACK_IMPORTED_MODULE_0__.fetchWeatherData)(location).then(data => {
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

}

const updateImg = (data) =>{
    const container = document.getElementById("cont");
    let weather = data.weather[0].main;

    if(weather === "Rain" || weather === "Drizzle"){
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
})();

/******/ })()
;