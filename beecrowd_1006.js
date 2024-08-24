var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let A, B, C, media;

A = (parseFloat(lines.shift())).toFixed(1);
B = (parseFloat(lines.shift())).toFixed(1);
C = (parseFloat(lines.shift())).toFixed(1);

media = (((A * 2) + (B * 3) + (C * 5))/10).toFixed(1);

console.log ("MEDIA = " + media);

