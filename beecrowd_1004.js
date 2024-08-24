var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let a, b, PROD;

a = parseInt(lines.shift());
b = parseInt(lines.shift());

PROD = a * b 

console.log("PROD = " + PROD);