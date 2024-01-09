const wheather = document.querySelector("#wheather span:first-child");
const city = document.querySelector("#wheather span:last-child");
const API_KEY = "d34d087a3d940553ccf48d82debf69f4";



function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            city.innerText = data.name;
            wheather.innerText = data.weather[0].main;
        });
}

function onGeoError(){
    alert("Can't find you. No wheather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
