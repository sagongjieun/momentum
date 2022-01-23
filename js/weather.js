const API_KEY = "00518db96366360f0ac727b49d600cd9";

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    //https://api.openweathermap.org/data/2.5/weather?lat=35.8087558&lon=128.5165132&appid=00518db96366360f0ac727b49d600cd9&units=metric
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            const weather = document.querySelector("#weather span:first-child");
            const city = document.querySelector("#weather span:last-child");

            city.innerText = data.name;
            weather.innerText = `${data.weather[0].main} ${data.main.temp} ℃`;
        });
}

function onGeoError() {
    alert("Cant find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);