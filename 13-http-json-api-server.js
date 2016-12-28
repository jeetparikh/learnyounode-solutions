var http = require('http');
var url = require('url');

function parseTime(qsDateTime) {
  return {
    hour: qsDateTime.getHours(),
    minute: qsDateTime.getMinutes(),
    second: qsDateTime.getSeconds()
  }
}

function unixTime(qsDateTime) {
  return {
    unixtime: qsDateTime.getTime()
  }
}

function getResponse(req) {
  var urlInfo = url.parse(req.url, true);
  var qsDateTime = new Date(urlInfo.query.iso);
  if(urlInfo.pathname === '/api/parsetime') {
      return parseTime(qsDateTime);
  } else if(urlInfo.pathname === '/api/unixtime') {
      return unixTime(qsDateTime);
  }
}

http.createServer(function(req, res) {
  if (req.method == 'GET') {
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.end(JSON.stringify(getResponse(req)));
  }

}).listen(+process.argv[2]);
