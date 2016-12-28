var http = require('http');
var bl = require('bl');

var url = process.argv[2];

http.get(url, function(response) {
  response.setEncoding('UTF-8');
  response.on('data', console.log)
  .on('error', console.error);
});
