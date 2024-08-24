var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let num, numht, valor, sal;

num = parseInt(lines.shift());
numht = parseInt(lines.shift());
valor = parseFloat(lines.shift());

sal = numht * valor

console.log("NUMBER = " + num)
console.log("SALARY = U$ " + sal.toFixed(2))