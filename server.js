'use strict';

// Load Environment Variables from the .env file
require('dotenv').config();

// Application Dependencies
const express = require('express');
const cors = require('cors');
const superagent = require('superagent');

// Application Setup
const PORT = process.env.PORT || 3000;
const app = express();
app.use(cors());

app.get('/', (request, response) => {
  response.send('Lab 7 - Updated Home Page! Now with TRAILS!!!');
});

// The callback can be a separate function. Really makes things readable
// app.get('/about', aboutUsHandler);

// function aboutUsHandler(request, response) {
//   response.status(200).send('About Us Page');
// }

// API Routes
app.get('/location', handleLocation);
app.get('/weather', handleWeather);
app.get('/trails', handleHiking);

app.use('*', notFoundHandler);

// HELPER FUNCTIONS
let searchLat ='';
let searchLon = '';

function handleLocation(request, response) {
  try {
    //const geoData = require('./data/location.json');
    const lCity = request.query.city;
    const lKey = process.env.GEOCODE_API_KEY;
    const URL = `https://us1.locationiq.com/v1/search.php?key=${lKey}&q=${lCity}&format=json`;
    superagent.get(URL).then(data => {
      const location = new Location(lCity, data.body[0]);
      response.status(200).json(location);
      searchLat = data.body[0].lat;
      searchLon = data.body[0].lon;
    });
  }
  catch (error) {
    console.log('ERROR', error);
    response.status(500).send('So sorry, something went wrong.');
  }
}

function Location(city, locData) {
  this.search_query = city;
  this.formatted_query = locData.display_name;
  this.latitude = locData.lat;
  this.longitude = locData.lon;
}

function handleWeather(request, response) {
  try {
    const wCity = request.query.search_query;
    const wKey = process.env.WEATHER_API_KEY;
    const URL = `https://api.weatherbit.io/v2.0/forecast/daily?city=${wCity}&key=${wKey}`;
    let weatherData = [];
    superagent.get(URL).then(data => {
      let parsedData = JSON.parse(data.text);
      // response.status(200).json(location);
      weatherData = parsedData.data.map((element) => {
        let forecast = element.weather.description;
        let date = element.valid_date;
        let weather = new Weather(date, forecast);
        return weather;
      });
      response.status(200).json(weatherData);
    });
  }
  catch (error) {
    console.log('ERROR', error);
    response.status(500).send('So sorry, something went wrong.');
  }
}

function Weather(date, forecast) {
  this.time = date;
  this.forecast = forecast;
}


function handleHiking(request, response) {
  try {
    console.log(request);
    //const wCity = request.query.search_query;
    const hKey = process.env.TRAIL_API_KEY;
    const URL = `https://www.hikingproject.com/data/get-trails?lat=${searchLat}&lon=${searchLon}&maxDistance=10&key=${hKey}`;
    let hikingTrailsData = [];
    superagent.get(URL).then(data => {
      console.log(data);
      let parsedData = JSON.parse(data.text);
      hikingTrailsData = parsedData.trails.map((element) => {
        let name = element.name;
        let location = element.location;
        let length = element.length;
        let stars = element.stars;
        let votes = element.starVotes;
        let description = element.summary;
        let homePage = element.url;
        let conditions = element.conditionDetails;
        let conditionDate = element.conditionDate;
        let trail = new Trail(name, location, length, stars, votes, description, homePage, conditions, conditionDate)
        return trail;
      });
      response.status(200).json(hikingTrailsData);
    });
  }
  catch (error) {
    console.log('ERROR', error);
    response.status(500).send('So sorry, something went wrong.');
  }
}

function Trail(name, location, length, stars, votes, description, homePage, conditions, conditionDate) {
  this.name = name;
  this.location = location;
  this.length = length;
  this.stars = stars;
  this.star_votes = votes;
  this.summary = description;
  this.trail_url = homePage;
  this.conditions = conditions;
  this.condition_date = conditionDate;
}
function notFoundHandler(request, response) {
  response.status(404).send('huh?');
}



// Make sure the server is listening for requests
app.listen(PORT, () => console.log(`App is listening on ${PORT}`));


