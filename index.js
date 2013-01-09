var http    = require('http');
var request = require('request');

var checks = {
  baidu: { interval: 10, url: "http://www.baidu.com" } 
};

var health = {};

function checkhost(host, cb) {
  var host = host || config.host;
  request(host, cb);
}

function start(name, config) {
  function beat(err, res, body) {
    health[name] = !err;
    setTimeout(run, config.interval);
  }
  
  function run() {
    request(config.url, beat)
  }
  
  run();
}

http.createServer(function(req, res){
  res.writeHead(health['baidu'] ? 200 : 500, {"Content-Type": "text/plain"});
}).listen(3010);
