var http = require('http')  //系统提供的创建服务的模块  执行node server.js可以启动服务，127.0.0.1:端口
var router = require('./router.js') //路由处理
var server = http.createServer(function(req,res){
	router(req,res)
	res.end()
})

server.listen(3000)