
var db;
var markers = [];
var marker_windows = [];
var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
	center: {lat: 40.6859296, lng: -74.00242364},
	zoom: 8
  });
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.open( "GET", '/get', false ); // false for synchronous request
  xmlHttp.send( null );
  db = JSON.parse(xmlHttp.responseText);

  for(let station of db.stationBeanList){
  	console.log(station);
	var infowindow_string = "<p>"+station.stationName+" </p>";
	var infowindow = new google.maps.InfoWindow({
  		content: infowindow_string
	});
	// look here
	// https://developers.google.com/maps/documentation/javascript/examples/marker-simple
	var marker = new google.maps.Marker({
     		position: {lat: station.latitude, lng: station.longitude},
     		map: map,
     		title: station.stationName
   	});
	// look here
	// https://developers.google.com/maps/documentation/javascript/examples/infowindow-simple
	marker.addListener('click', function() {
  		infowindow.open(map, marker);
	});
  	markers.push(marker);
	marker_windows.push(infowindow);
  }

}






/*

"id": 72,
"stationName": "W 52 St & 11 Ave",
"availableDocks": 27,
"totalDocks": 39,
"latitude": 40.76727216,
"longitude": -73.99392888,
"statusValue": "In Service",
"statusKey": 1,
"availableBikes": 11,
"stAddress1": "W 52 St & 11 Ave",
"stAddress2": "",
"city": "",
"postalCode": "",
"location": "",
"altitude": "",
"testStation": false,
"lastCommunicationTime": null,
"landMark": ""

*/
