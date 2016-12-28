var fs = require('fs');
var fileContents = fs.readFileSync(process.argv[2]).toString();
var lineCount = fileContents.split("\n").length - 1;
console.log(lineCount);