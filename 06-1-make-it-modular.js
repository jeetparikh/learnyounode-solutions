var fileReader = require('./fileReader');

var directoryPath = process.argv[2];
var fileExtension = process.argv[3];

fileReader(directoryPath, fileExtension, function(err, data) {
  if(err) {
    return console.error("Error encountered when reading data");
  }

  data.map(function(fileName) {
    console.log(fileName);
  })
  
});
