const search = document.getElementById("city-input");
const searchBtn = document.getElementById("search-button");
const clearSearch = document.getElementById("clear-history");
const cityName = document.getElementById("city-name");
const currentWeatherImg = document.getElementById("current-pic");
const currentTemperature = document.getElementById("temperature");
const currentHumidity = document.getElementById("humidity");
const currentWindSpeed = document.getElementById("wind-speed");
const searchedCities = document.getElementById("history");
const forecastCards = document.querySelectorAll(".forecast");
let searchHistory = JSON.parse(localStorage.getItem("search")) || [];

var key = "5d2bf23c61750cd512d2a7da4eb8c569"

function fetchAPI() {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + 'Casa Grande' + '&appid=' + key + '&units=imperial')
        .then((res) => res.json())
        .then(data => {
            console.log(data)

            // get the current date (new Date) and add it to the DOM
            const today = new Date(data.dt * 1000);
            const day = today.getDate();
            const month = today.getMonth() + 1;
            const year = today.getFullYear();

            // first i need to add our cities name to the cityName variable (innerHTML)
            cityName.innerHTML = data.name + " " + month + "/" + day + "/" +  year;

            // get the img id for weather icon
            let weatherPic = data.weather[0].icon;
            currentWeatherImg.setAttribute("src", "https://openweathermap.org/img/wn/" + weatherPic + "@2x.png");
            currentWeatherImg.setAttribute("alt", data.weather[0].description);
            // then i need to add citys temp to currentTemperature (innerHTML)
            currentTemperature.innerHTML = "Temperature: " + data.main.temp + " &#176F"
            // same for humidity and wind speed
            currentHumidity.innerHTML = "Humidity: " + data.main.humidity + "%"
            currentWindSpeed.innerHTML = "Wind Speed: " + data.wind.speed + " mph"
            // fetch for forecasted weather
            let cityID = data.id;

            function fetchID() {
            fetch('https://api.openweathermap.org/data/2.5/forecast?id=' + cityID + '&appid=' + key + '&units=imperial')
            .then((res) => res.json())
            .then(data => {
                console.log(data)
                // get the forecast dates (new Date) and add it to each card (append or appendChild)
                const forecastEl = document.querySelectorAll()
                // get the img id for weather icon of forecasted date
                // then i need to add citys temp to Temperature (innerHTML)
                // same for humidity and wind speed
                // fetch for forecasted weather
            }
            })
        })
        // need a event listener on the search button, to take value of what ever is inside the input, and search it(this is where you call fetchAPI(cityName))

        // some kind of function to append searched cities to list, and when clicked on will research that city(that list items value OR innerHTML)

        //event listener on clear button that does localStorage.clear() and updates the history list
}

fetchAPI()


//$(document).ready(function () {
//
    //    var today = dayjs();
    //    $('#currentDay').text(today.format('MM/dd/yyyy'));
//
//    $('.searchBtn').on('click', function () {
//        var saveInput = $(this).siblings('.cityName').val();
//        var searchBar = $(this).parent().attr('id');
//        localStorage.setItem(searchBar, JSON.stringify(saveInput));
//    })
//    $('.cityName').each(function () {
//
//    })
//
//    function handleFormSubmit(event) {
//        event.preventDefault();
//
//        var cityEL = $("#city-input");
//        var nameEl = $('input[name="city-input"]').val();
//        var nameEl = cityEL.val();
//
//        if (!nameEl) {
//            console.log('No cities entered in search field');
//            return;
//        }
//        var cityLi = $('<ul>')
//        cityLi.text(nameEl)
//        cityListEl.append('<ul>' + nameEl + '</ul>');
//
//        cityEL.val('');
//    }
//
//    searchFormEL.on('submit', handleFormSubmit);
//
//    for (let i = 0; i < saveInput.length; i++) {
//        $('#${i} input').val(JSON.parse(localStorage.getItem('${i}')))
//    }
//
//});
