# City Explorer

**Author**: Mike Greene
**Version**: 2.3.7 

## Overview
### Problem Domain
Given a user that wishes to search a specific location for latitude/longitude and weather forecast information about that location, the app provides an input form to input a city and receive the expected info rendered to the page.

## Getting Started
User must navigate to frontend city explorer site to begin search. As of now, front end page will ask for access to backend server, so user would have to have the address to the server.

## Architecture
server.js sets up PORT 3000 for the live server. Express uses CORS. Express gets a `/location` route and a `/weather` route and assigns unique callback functions to each. `/location` searches the `location.json` file for latitude, longitude, and city information while `/weather` searches the `weather.json` file for the weather forecast and date info for the entire 'data' array.

Info is sent via response to the frontend to be rendered onto the home page.

## Change Log
10-15-2020 6:55pm - Application now is fully scaffolded.

_____________________________________________________________________________________
### Number and name of feature:  As a user of City Explorer, I want to enter the name of a location so that I can see data about the area of interest to me.

** Estimate of time needed to complete: ** 1.5 hrs

** Start time: ** 6:55pm

** Finish time: ** 7:20pm

** Actual time needed to complete: ** 25 min
_____________________________________________________________________________________

10-15-2020 7:23pm - Application now has a fully-functional express server, with a GET route for the location resource.

_____________________________________________________________________________________
### Number and name of feature:  As a user, I want to request current weather information so that I can learn more about the typical weather patterns in the location I had entered.

** Estimate of time needed to complete: ** 1.5 hrs

** Start time: ** 7:23pm

** Finish time: ** 8:05pm

** Actual time needed to complete: ** 42 min
_____________________________________________________________________________________

10-15-2020 8:05pm - Application now has a GET route for the weather resource.

10-15-2020 8:47pm - Application backend now can be accessed via City Explorer frontend page.

_____________________________________________________________________________________
### Number and name of feature:  As a user, I want clear messages if something goes wrong so I know if I need to make any changes or try again in a different manner. (completed for sake of Lab 6)

** Estimate of time needed to complete: ** 20 min

** Start time: ** 8:48pm

** Finish time: ** 9:45pm

** Actual time needed to complete: ** 57 min
_____________________________________________________________________________________

10-15-2020 9:45pm - Verifiying application returns proper error when path routes or other data is broken.

10-17-2020 3:20pm - Weather array data now remains unchanged by assinging a new array let by using a .map() call.

_____________________________________________________________________________________
### Number and name of feature:  As a user, I want the application to provide properly formatted data so that I can view similar data for any location I choose.

** Estimate of time needed to complete: ** 1 hr

** Start time: ** 3:00pm

** Finish time: ** 3:22pm

** Actual time needed to complete: ** 22 min
_____________________________________________________________________________________

10-17-2020 6:36pm - Backend of application now sends an API request to the locationiq API and returns location information, including latitude and longitude to the frontend server. 
_____________________________________________________________________________________
### Number and name of feature:  As a user, I want to enter the name of a location so that I do not need to look up the latitude and longitude every time I learn about a new location.

** Estimate of time needed to complete: ** 1.5 hr

** Start time: ** 3:30pm

** Finish time: ** 6:35pm

** Actual time needed to complete: ** 3 hr 5 min
_____________________________________________________________________________________

10-17-2020 8:50pm - Backend of application now sends an API request to the weatherbit API and receives a 16 day array of weather info in response to send to the frontend server. 
_____________________________________________________________________________________
### Number and name of feature:  As a user, I want to request current weather information at any location, so that I can learn more about the typical weather patterns in the area of interest.

** Estimate of time needed to complete: ** 1.5 hr

** Start time: ** 6:40pm

** Finish time: ** 8:48pm

** Actual time needed to complete: ** 2 hr 8 min
_____________________________________________________________________________________


## Credits and Collaborations
### Resources:
VS Code
Github
Trello
Express
Node
CORS
Heroku
LocationIQ API
WeatherBit API
Postman.com


### Collaborators:
Deanna Johnson