var http = require('http');
var dt = require('./returnDate.js');
var url = require('url');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
	res.write('Hello World!, time is '+ dt.myDateTime());
	res.write('<br>you asked for req.url :: ' + req.url);
	
	var q = url.parse(req.url, true).query;
	res.write('<br>using require url : q.year=' + q.year + " , q.month=" + q.month);
	
	
    res.end();
}).listen(8080);