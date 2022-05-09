var http = require('http');

//create a server object:
http.createServer(function (req, res) {
//write a response to the client
res.write('Hello World!'); 
res.end(); //end the response
}).listen(8080);