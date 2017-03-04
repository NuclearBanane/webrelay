# webrelay


The plan is to display shit in a google maps page and fluff everything

Right now, there is a basic tornado backend that has a serve frontend function and serve
the data function.

The javascript currently adds a marker (https://developers.google.com/maps/documentation/javascript/examples/marker-simple) for each bike station
I'm trying to get the infowindows to work right now. (https://developers.google.com/maps/documentation/javascript/examples/infowindow-simple)
Within these windows we can tie in each jquery function call into the html.

Put the functions in manage.js. If you need a backend endpoint, just make a new handler that inherits basehandler and add a new line to the application object which is a list of tuples.
the first element is a regular expression and the second is the handler that will be called when a http request on port 8888 is made

As of yet, you will need:
Python2,
pip3
tornado

GOODLUCK <3
to get this working.
