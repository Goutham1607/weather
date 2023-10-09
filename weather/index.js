var inputvalue = document.querySelector('#cityinput');
var btn = document.querySelector('#add');
var city = document.querySelector('#cityoutput');
var descrip = document.querySelector('#description');
var temp = document.querySelector('#temp');
var wind = document.querySelector('#wind');
var apik = "dca1cfbe36a062f7e1d9a7a4aa88eda3"
function convertion(val) {
    return (val - 273).toFixed(3);
}

btn.addEventListener('click', function () {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + inputvalue.value + '&appid=' + apik)
        .then(res => res.json())
        .then(data => {
            var nameval = data['name'];
            var description = data['weather'][0]['description']; // Fix the variable name
            var temperature = data['main']['temp'];
            var wndspeed = data['wind']['speed'];

            city.innerHTML = `Weather of <span>${nameval}</span>`;
            descrip.innerHTML = `Description: <span>${description}</span>`;
            temp.innerHTML = `Temperature: <span>${convertion(temperature)}°C</span>`; // Use backticks for interpolation
            wind.innerHTML = `Wind Speed: <span>${wndspeed} km/h</span>`;
        })
        .catch(err => alert('You entered the wrong city name'));
});
