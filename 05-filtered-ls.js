var fs = require('fs');
var path = require('path');

var directoryPath = process.argv[2];
var fileExtension = '.' + process.argv[3];

fs.readdir(directoryPath, function(err, list) {

  list.forEach(function(fileName) {
    if(path.extname(fileExtension) === fileExtension) {
      console.log(fileName);
    }
    
  });

});
