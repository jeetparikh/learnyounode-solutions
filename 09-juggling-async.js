var http = require('http');
var bl = require('bl');

var url1 = process.argv[2];
var url2 = process.argv[3];
var url3 = process.argv[4];
var d1, d2, d3;

http.get(url1, function(response) {

  response.pipe(bl(function(err, data) {
    d1 = data.toString();  
  }));

});
http.get(url2, function(response) {

  response.pipe(bl(function(err, data) {
    d2 = data.toString();
  }));

});

http.get(url3, function(response) {

  response.pipe(bl(function(err, data) {
    d3 = data.toString();
  }));

});

setInterval(function() {
  if(d1 && d2 && d3) {
    console.log(d1);
    console.log(d2);
    console.log(d3);
  }
});
