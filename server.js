'use strict';

// Load Environment Variables from the .env file
require('dotenv').config();

// Application Dependencies
const express = require('express');
const cors = require('cors');

// Application Setup
const PORT = process.env.PORT || 3000;
const app = express();
app.use(cors());

app.get('/', (request, response) => {
  response.send('Updated Home Page!');
});

app.get('/bad', (request, response) => {
  throw new Error('poo');
});

// The callback can be a separate function. Really makes things readable
app.get('/about', aboutUsHandler);

function aboutUsHandler(request, response) {
  response.status(200).send('About Us Page');
}

// API Routes
app.get('/location', handleLocation);
app.get('/weather', handleWeather);

app.use('*', notFoundHandler);

// HELPER FUNCTIONS

function handleLocation(request, response) {
  try {
    const geoData = require('./data/location.json');
    const city = request.query.city;
    let key = '';//my api key;
    const URL = '';
    const locationData = new Location(city, geoData);
    response.json(locationData);
  }
  catch (error) {
    console.log('ERROR', error);
    response.status(500).send('So sorry, something went wrong.');
  }
}

function Location(city, geoData) {
  this.search_query = city;
  this.formatted_query = geoData[0].display_name;
  this.latitude = geoData[0].lat;
  this.longitude = geoData[0].lon;
}

function handleWeather(request, response) {
  try {
    const data = require('./data/weather.json');
    let weatherData = [];
    weatherData = data.data.map(element => {
      let forecast = element.weather.description;
      let date = element.valid_date;
      return new Weather(date, forecast);
    });
    response.send(weatherData);
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
