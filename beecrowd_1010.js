var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
//[12 1 5.30]

let totalValores1 = lines.shift().split(" ");
let totalValores2 = lines.shift().split(" ");
//["12", "1", "5.30"]

let cod1, num1, uni1, cod2, num2, uni2, valF;

cod1 = parseInt(totalValores1.shift());
num1 = parseInt(totalValores1.shift());
uni1 = parseFloat(totalValores1.shift());

cod2 = parseInt(totalValores2.shift());
num2 = parseInt(totalValores2.shift());
uni2 = parseFloat(totalValores2.shift());


valF = (num2*uni2) + (num1*uni1);

console.log ("VALOR A PAGAR: R$ " + valF.toFixed(2));