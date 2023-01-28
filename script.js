const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '0a38bc4df8mshc3f580867395f02p15af7djsn121abbc4f899',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};

let cityName = document.getElementById("cityName");
let city = document.getElementById("city");
let btn = document.getElementById("btn");
let seattle = document.getElementById("Seattle")
let delhi = document.getElementById("Delhi")
let bombay = document.getElementById("Mumbai")

const getweather = (city) => {
    cityName.innerHTML = city

    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
        .then(response => response.json())
        .then(response => {
            console.log(response);

            //This is the main forcast section
            cloud_pct.innerHTML = response.cloud_pct
            feels_like.innerHTML = response.feels_like
            humidity.innerHTML = response.humidity
            max_temp.innerHTML = response.max_temp
            min_temp.innerHTML = response.min_temp
            sunrise.innerHTML = response.sunrise
            sunset.innerHTML = response.sunset
            temp.innerHTML = response.temp
            wind_degrees.innerHTML = response.wind_degrees
            wind_speed.innerHTML = response.wind_speed
        })
        .catch(err => console.error(err));
}

const getweather2 = (city) => {

    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
        .then(response => response.json())
        .then(response => {
            console.log(response);

            //This is the main forcast section
            cloud_pct_switzerland.innerHTML = response.cloud_pct
            feels_like_switzerland.innerHTML = response.feels_like
            humidity_switzerland.innerHTML = response.humidity
            max_temp_switzerland.innerHTML = response.max_temp
            min_temp_switzerland.innerHTML = response.min_temp
            sunrise_switzerland.innerHTML = response.sunrise
            sunset_switzerland.innerHTML = response.sunset
            temp_switzerland.innerHTML = response.temp
            wind_degrees_switzerland.innerHTML = response.wind_degrees
            wind_speed_switzerland.innerHTML = response.wind_speed
        })
        .catch(err => console.error(err));
}
const getweather3 = (city) => {

    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
        .then(response => response.json())
        .then(response => {
            console.log(response);

            //This is the main forcast section
            cloud_pct_kolkata.innerHTML = response.cloud_pct
            feels_like_kolkata.innerHTML = response.feels_like
            humidity_kolkata.innerHTML = response.humidity
            max_temp_kolkata.innerHTML = response.max_temp
            min_temp_kolkata.innerHTML = response.min_temp
            sunrise_kolkata.innerHTML = response.sunrise
            sunset_kolkata.innerHTML = response.sunset
            temp_kolkata.innerHTML = response.temp
            wind_degrees_kolkata.innerHTML = response.wind_degrees
            wind_speed_kolkata.innerHTML = response.wind_speed
        })
        .catch(err => console.error(err));
}
const getweather4 = (city) => {

    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
        .then(response => response.json())
        .then(response => {
            console.log(response);

            //This is the main forcast section
            cloud_pct_chennai.innerHTML = response.cloud_pct
            feels_like_chennai.innerHTML = response.feels_like
            humidity_chennai.innerHTML = response.humidity
            max_temp_chennai.innerHTML = response.max_temp
            min_temp_chennai.innerHTML = response.min_temp
            sunrise_chennai.innerHTML = response.sunrise
            sunset_chennai.innerHTML = response.sunset
            temp_chennai.innerHTML = response.temp
            wind_degrees_chennai.innerHTML = response.wind_degrees
            wind_speed_chennai.innerHTML = response.wind_speed
        })
        .catch(err => console.error(err));
}
const getweather5 = (city) => {

    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
        .then(response => response.json())
        .then(response => {
            console.log(response);

            //This is the main forcast section
            cloud_pct_bangalore.innerHTML = response.cloud_pct
            feels_like_bangalore.innerHTML = response.feels_like
            humidity_bangalore.innerHTML = response.humidity
            max_temp_bangalore.innerHTML = response.max_temp
            min_temp_bangalore.innerHTML = response.min_temp
            sunrise_bangalore.innerHTML = response.sunrise
            sunset_bangalore.innerHTML = response.sunset
            temp_bangalore.innerHTML = response.temp
            wind_degrees_bangalore.innerHTML = response.wind_degrees
            wind_speed_bangalore.innerHTML = response.wind_speed
        })
        .catch(err => console.error(err));
}
const getweather6 = (city) => {

    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
        .then(response => response.json())
        .then(response => {
            console.log(response);

            //This is the main forcast section
            cloud_pct_singapore.innerHTML = response.cloud_pct
            feels_like_singapore.innerHTML = response.feels_like
            humidity_singapore.innerHTML = response.humidity
            max_temp_singapore.innerHTML = response.max_temp
            min_temp_singapore.innerHTML = response.min_temp
            sunrise_singapore.innerHTML = response.sunrise
            sunset_singapore.innerHTML = response.sunset
            temp_singapore.innerHTML = response.temp
            wind_degrees_singapore.innerHTML = response.wind_degrees
            wind_speed_singapore.innerHTML = response.wind_speed
        })
        .catch(err => console.error(err));
}

//for other city brief forcast


btn.addEventListener("click", function (e) {
    e.preventDefault()
    getweather(city.value)
})


//The dropdown menu

seattle.addEventListener("click", function (e) {
    e.preventDefault()
    getweather("Seattle")
})

delhi.addEventListener("click", function (e) {
    e.preventDefault()
    getweather("Delhi")
})

bombay.addEventListener("click", function (e) {
    e.preventDefault()
    getweather("Mumbai")
})



// at the start of webpage a default location is shown 
getweather("Delhi")
getweather2("Switzerland")
getweather3("Kolkata")
getweather4("Chennai")
getweather5("Bangalore")
getweather6("Singapore")






