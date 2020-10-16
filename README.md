# City Explorer

**Author**: Mike Greene
**Version**: 1.0.0 

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


## Credits and Collaborations
### Resources:
VS Code
Github
Trello
Express
Node
CORS
Heroku

### Collaborators:
Deanna Johnson