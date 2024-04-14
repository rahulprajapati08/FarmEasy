
const apikey = "4abe3d88c9621b63b61042cb36b7bf87";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?lat=28.421054851738628&lon=77.52676056054328&units=metric";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const input = document.getElementById("search-crop");
const inputcity = document.querySelector('.search input')
const cbtn = document.querySelector(".search  button")


document.addEventListener("DOMContentLoaded", () => {
    // Automatically get user's location
    navigator.geolocation.getCurrentPosition(gotlocation, failedtoget);
});

function gotlocation(position) {
    checkweather(position.coords.latitude, position.coords.longitude);
}

function failedtoget() {
    console.log("There is some issue with getting the location.");
}

async function checkweather(lat, long) {
    const response = await fetch(apiUrl + `&appid=${apikey}`);
    var data = await response.json();
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity ;
    document.querySelector(".wind").innerHTML = data.wind.speed ;
    document.querySelector(".max").innerHTML = Math.round(data.main.temp_max);
    document.querySelector(".min").innerHTML = Math.round(data.main.temp_min);
    const weathericon = document.querySelector(".weather-icon");
    var croplist = document.querySelector(".crops");
    var cropdes = document.querySelector(".crop-des");
    function resetCropDes() {
        // Clear the content of cropdes
        document.querySelector(".crop-des").innerHTML = "";
    }
    
    getWeathericon(data);
    // var searchlist = document.querySelector(".search-list");
    var temp = Math.round(data.main.temp);
    if (temp >= 15 && temp <= 35) {
        var itemsToAdd = ["Corn(Maize)"];
        itemsToAdd.forEach(function (itemText) {
            // Create a new list item
            var listItem = document.createElement("Button");
            var cropinfo = document.createElement("p");
            
            listItem.textContent = itemText;

            // Append the new list item to the UL
            croplist.appendChild(listItem);
            cropdes.appendChild(cropinfo);

            listItem.addEventListener("click", function () {
                // Corrected the comparison string
                if (listItem.textContent === "Corn(Maize)") {
                    resetCropDes();
                    document.querySelector(".right").style.display = "flex";
                    var paragraph = document.createElement("p");
                    var cropimg = document.createElement("img");
                    var cropheading = document.createElement("h1");
                    cropimg.src="img/crops/corn.png";
                    cropheading.textContent = "Corn(Maize";
                    paragraph.textContent = "Warm temperatures (60-95°F or 15-35°C), well-drained soil and adequate moisture.";
                    cropdes.appendChild(cropimg);
                    cropdes.appendChild(cropheading);
                    cropdes.appendChild(paragraph);
                }
            });
        });
    }
    if (temp >= 21 && temp <= 29) {
        var itemsToAdd = ["Tomatoes", "Peppers", "Beans"];
        itemsToAdd.forEach(function (itemText) {
            // Create a new list item
            var listItem = document.createElement("Button");
            listItem.textContent = itemText;

            // Append the new list item to the UL
            croplist.appendChild(listItem);

            listItem.addEventListener("click", function () {
                // Corrected the comparison string
                if (listItem.textContent === "Tomatoes") {
                    resetCropDes();
                    document.querySelector(".right").style.display = "flex";
                    var paragraph = document.createElement("p");
                    var cropimg = document.createElement("img");
                    var cropheading = document.createElement("h1");
                    cropimg.src="img/crops/tomato.png";
                    cropheading.textContent = "Tomatoes";
                    paragraph.textContent = "Full sun, warm temperatures (70-85°F or 21-29°C), well-drained, fertile soil";
                    cropdes.appendChild(cropimg);
                    cropdes.appendChild(cropheading);
                    cropdes.appendChild(paragraph);
                }
                else if (listItem.textContent === "Peppers") {
                    resetCropDes();
                    document.querySelector(".right").style.display = "flex";
                    var paragraph = document.createElement("p");
                    var cropimg = document.createElement("img");
                    var cropheading = document.createElement("h1");
                    cropimg.src="img/crops/pepppers.png";
                    cropheading.textContent = "Peppers";
                    paragraph.textContent = "Warm temperatures (70-85°F or 21-29°C), full sun well-drained soil with adequate moisture and nutrients.";
                    cropdes.appendChild(cropimg);
                    cropdes.appendChild(cropheading);
                    cropdes.appendChild(paragraph);
                }
                if (listItem.textContent === "Beans") {
                    resetCropDes();
                    document.querySelector(".right").style.display = "flex";
                    var paragraph = document.createElement("p");
                    var cropimg = document.createElement("img");
                    var cropheading = document.createElement("h1");
                    cropimg.src="img/crops/beans.png";
                    cropheading.textContent = "Beans";
                    paragraph.textContent = "Warm temperatures (70-85°F or 21-29°C), full sun well-drained soil with moderate fertility and regular watering.";
                    cropdes.appendChild(cropimg);
                    cropdes.appendChild(cropheading);
                    cropdes.appendChild(paragraph);
                }
            });
        });
    }
    if (temp >= 21 && temp <= 35) {
        var itemsToAdd = ["Cucumbers", "Squash"];
        itemsToAdd.forEach(function (itemText) {
            // Create a new list item
            var listItem = document.createElement("Button");
            listItem.textContent = itemText;

            // Append the new list item to the UL
            croplist.appendChild(listItem);
            listItem.addEventListener("click", function () {
                // Corrected the comparison string
                if (listItem.textContent === "Cucumbers") {
                    resetCropDes();
                    document.querySelector(".right").style.display = "flex";
                    var paragraph = document.createElement("p");
                    var cropimg = document.createElement("img");
                    var cropheading = document.createElement("h1");
                    cropimg.src="img/crops/cucumber.png";
                    cropheading.textContent = "Cucumbers";
                    paragraph.textContent = "Warm temperatures (70-95°F or 21-35°C), full sun well-drained soil with consistent moisture.";
                    cropdes.appendChild(cropimg);
                    cropdes.appendChild(cropheading);
                    cropdes.appendChild(paragraph);
                }
                if (listItem.textContent === "Squash") {
                    resetCropDes();
                    document.querySelector(".right").style.display = "flex";
                    var paragraph = document.createElement("p");
                    var cropimg = document.createElement("img");
                    var cropheading = document.createElement("h1");
                    cropimg.src="img/crops/squash.png";
                    cropheading.textContent = "Squash";
                    paragraph.textContent = "Warm temperatures (70-95°F or 21-35°C), full sun fertile, well-drained soil and consistent moisture.";
                    cropdes.appendChild(cropimg);
                    cropdes.appendChild(cropheading);
                    cropdes.appendChild(paragraph);
                }
            });
        });
    }
    if (temp >= 21 && temp <= 32) {
        var itemsToAdd = ["Melons", "Eggplant", "okra", "Sweet Potatoes"];
        itemsToAdd.forEach(function (itemText) {
            // Create a new list item
            var listItem = document.createElement("Button");
            listItem.textContent = itemText;

            // Append the new list item to the UL
            croplist.appendChild(listItem);
            listItem.addEventListener("click", function () {
                // Corrected the comparison string
                if (listItem.textContent === "Melons") {
                    resetCropDes();
                    document.querySelector(".right").style.display = "flex";
                    var paragraph = document.createElement("p");
                    var cropimg = document.createElement("img");
                    var cropheading = document.createElement("h1");
                    cropimg.src="img/crops/melon.png";
                    cropheading.textContent = "Melons";
                    paragraph.textContent = "Warm temperatures (70-90°F or 21-32°C), full sun well-drained soil with good fertility and consistent moisture";
                    cropdes.appendChild(cropimg);
                    cropdes.appendChild(cropheading);
                    cropdes.appendChild(paragraph);
                }
                if (listItem.textContent === "Eggplant") {
                    resetCropDes();
                    document.querySelector(".right").style.display = "flex";
                    var paragraph = document.createElement("p");
                    var cropimg = document.createElement("img");
                    var cropheading = document.createElement("h1");
                    cropimg.src="img/crops/eggplant.png";
                    cropheading.textContent = "Eggplant";
                    paragraph.textContent = "Warm temperatures (70-90°F or 21-32°C), full sun well-drained soil with good fertility and consistent moisture.";
                    cropdes.appendChild(cropimg);
                    cropdes.appendChild(cropheading);
                    cropdes.appendChild(paragraph);
                }
                if (listItem.textContent === "okra") {
                    resetCropDes();
                    document.querySelector(".right").style.display = "flex";
                    var paragraph = document.createElement("p");
                    var cropimg = document.createElement("img");
                    var cropheading = document.createElement("h1");
                    cropimg.src="img/crops/okra.png";
                    cropheading.textContent = "okra";
                    paragraph.textContent = "Warm temperatures (70-90°F or 21-32°C), full sun well-drained, fertile soil with regular watering.";
                    cropdes.appendChild(cropimg);
                    cropdes.appendChild(cropheading);
                    cropdes.appendChild(paragraph);
                }
                if (listItem.textContent === "Sweet Potatoes") {
                    resetCropDes();
                    document.querySelector(".right").style.display = "flex";
                    var paragraph = document.createElement("p");
                    var cropimg = document.createElement("img");
                    var cropheading = document.createElement("h1");
                    cropimg.src="img/crops/sweet.png";
                    cropheading.textContent = "Sweet Potatoes";
                    paragraph.textContent = "Warm temperatures (70-90°F or 21-32°C), well-drained, loose soil";
                    cropdes.appendChild(cropimg);
                    cropdes.appendChild(cropheading);
                    cropdes.appendChild(paragraph);
                }
            });
        });
    }
    
    
}
async function cityweather(city) {
    const response = await fetch(apiurl + city + `&appid=${apikey}`);
    var data = await response.json();

    if (response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }
    else {

        const weathericon = document.querySelector(".weather-icon");
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity;
        document.querySelector(".wind").innerHTML = data.wind.speed;
        document.querySelector(".max").innerHTML = Math.round(data.main.temp_max);
        document.querySelector(".min").innerHTML = Math.round(data.main.temp_min);
        if (data.weather[0].main == "Clouds") {

            weathericon.src = "img/weather/clouds.png";
        }
        else if (data.weather[0].main == "Clear") {
            weathericon.src = "img/weather/clear.png";

        }
        else if (data.weather[0].main == "Rain") {
            weathericon.src = "img/weather/rain.png";
        }
        else if (data.weather[0].main == "Drizzle") {
            weathericon.src = "img/weather/drizzle.png";
        }
        else if (data.weather[0].main == "Mist") {
            weathericon.src = "img/weather/mist.png";

        }
        else if (data.weather[0].main == "Snow") {
            weathericon.src = "img/weather/snow.png";
        }

        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
    }
}
async function  getWeathericon(data){
    const weathericon = document.querySelector(".weather-icon");
    if (data.weather[0].main == "Clouds") {

        weathericon.src = "img/weather/clouds.png";
    }
    else if (data.weather[0].main == "Clear") {
        weathericon.src = "img/weather/clear.png";

    }
    else if (data.weather[0].main == "Rain") {
        weathericon.src = "img/weather/rain.png";
    }
    else if (data.weather[0].main == "Drizzle") {
        weathericon.src = "img/weather/drizzle.png";
    }
    else if (data.weather[0].main == "Mist") {
        weathericon.src = "img/weather/mist.png";

    }
    else if (data.weather[0].main == "Snow") {
        weathericon.src = "img/weather/snow.png";
    }

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
}
cbtn.addEventListener('click', () => {
    cityweather(inputcity.value);
});

ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
    });
    ScrollReveal().reveal('.crops-list h2 ', { origin: 'top' });
    ScrollReveal().reveal('.crops-list , .weather-details', { origin: 'bottom' });
    ScrollReveal().reveal('.weather-img , .temperature , #foot', { origin: 'left' });
    ScrollReveal().reveal('.search-city', { origin: 'right' });