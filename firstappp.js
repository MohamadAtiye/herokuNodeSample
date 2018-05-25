var http = require('http');
var dt = require('./returnDate.js');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
	res.write('Hello World!, time is '+ dt.myDateTime());
    res.end();
}).listen(8080);