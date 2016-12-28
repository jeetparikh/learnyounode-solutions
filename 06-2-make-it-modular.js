module.exports = function(dirPath, ext, callback) {
  var fs = require('fs');
  var path = require('path');
  var extension = '.' + ext;
  var fileNames = [];

  fs.readdir(dirPath, function(err, list) {

    if(err) {
      return callback(err);
    }

    list.forEach(function(fileName) {
      //console.log(path.extname(fileExtension));
      if(path.extname(fileName) === extension) {
        fileNames.push(fileName);
      }
    });

    return callback(null, fileNames);

  });
};
