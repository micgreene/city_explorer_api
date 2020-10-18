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
  response.send('Lab 7 - Updated Home Page!');
});

// The callback can be a separate function. Really makes things readable
// app.get('/about', aboutUsHandler);

// function aboutUsHandler(request, response) {
//   response.status(200).send('About Us Page');
// }

// API Routes
app.get('/location', handleLocation);
app.get('/weather', handleWeather);

app.use('*', notFoundHandler);

// HELPER FUNCTIONS

function handleLocation(request, response) {
  try {
    //const geoData = require('./data/location.json');
    const lCity = request.query.city;
    const lKey = process.env.GEOCODE_API_KEY;
    const URL = `https://us1.locationiq.com/v1/search.php?key=${lKey}&q=${lCity}&format=json`;
    superagent.get(URL).then(data => {
      const location = new Location(lCity, data.body[0]);
      response.status(200).json(location);
    });

    //const locationData = new Location(city, geoData);
    //response.json(locationData);
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

function notFoundHandler(request, response) {
  response.status(404).send('huh?');
}



// Make sure the server is listening for requests
app.listen(PORT, () => console.log(`App is listening on ${PORT}`));
