var router = function(req,res){
	var action = req.method
	var url = req.url
	if(action == 'GET'){
		if(url == '/getInfo'){
			var data = {
					errno:0,
					errmsg:'',
					data:{
						new_data:'这是接口新内容'
					}
				}
			res.writeHead(200,{"Content-Type":"application/json"})
			res.write(JSON.stringify(data))
		}else{
			res.writeHead(404)
		}
	}
	else if(action == 'POST'){
		
	}
}

module.exports = router