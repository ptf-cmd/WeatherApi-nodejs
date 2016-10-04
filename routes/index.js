var express = require('express');
var router = express.Router();
var geoip = require('geoip-lite');
var request = require('request');

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

module.exports = router;
