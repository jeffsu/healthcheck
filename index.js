var http    = require('http');
var request = require('request');

var config = {
  host: "http://www.baidu.com"
}

function checkhost(host, cb) {
  var host = host || config.host;
  request(host, cb);
}

http.createServer(function(req, res){
  res.writeHead(200, {"Content-Type": "text/plain"});
  checkhost(null, function (err, response, body) {
    if(!err) res.end(response.statusCode.toString());
    else res.end(err.toString());
  });
}).listen(3010);

