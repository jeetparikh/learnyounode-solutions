var args = process.argv.splice(2);

var sum = args.reduce(function(a, b) {
   return +a + (+b); 
});

console.log(sum);