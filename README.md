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

10-15-2020 7:23pm - Application now has a fully-functional express server, with a GET route for the location resource.

10-15-2020 8:05pm - Application now has a GET route for the weather resource.

10-15-2020 8:47pm - Application backend now can be accessed via City Explorer frontend page.

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