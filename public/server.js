var http = require('http');
var events = require('events');
var eventEmitter = new events.EventEmitter();
http.createServer(function(req,res){
	res.writeHead(200);
	res.end('hello！');
}).listen(8080);
console.log('运行中。。。');
