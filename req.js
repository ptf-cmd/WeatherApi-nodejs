var request = require('request');

var API_KEY = '425f301ab92c67d8336f2dbb5f82c4e1';

request('http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid='+API_KEY, function (error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log(body) // Show the HTML for the Google homepage. 
  }
})