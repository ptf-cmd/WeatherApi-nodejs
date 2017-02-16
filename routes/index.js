var express = require('express');
var router = express.Router();
var geoip = require('geoip-lite');
var request = require('request');

const APP_ID = '425f301ab92c67d8336f2dbb5f82c4e1'

router.get('/', function(req, res, next) {
	var city;
	request('https://api.ipify.org?format=json', (err, response, body) => {
		if (!err && response.statusCode == 200) {
			console.log(body);
			body = JSON.parse(body);
			var ip = body.ip;
			console.log(ip);
			var geo = geoip.lookup(ip);
			console.log(geo);
			city = geo.city;
			res.render('index', { title: city });
		};
	});
});

router.post('/weather', function(req, res, next) {
	if (!req.query.city) {
		var ip_city = "Avellaneda"
	}
	request('http://api.openweathermap.org/data/2.5/weather?q=' + (req.query.city || ip_city) + '&appid=' + APP_ID + '&unit=' + req.query.unit, (err, response, body) => {
		res.setHeader("Content-Type", "application/json");
		res.send(body);
	})
})

module.exports = router;
