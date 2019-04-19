/*Load modules*/
const fs = require('fs');
const reverse = require('./lib/reverse-text');


let file = "";
let data = [];

file = fs.readFileSync('./B-small-practice.in', 'utf8');
data = file.split("\n");

let outcome = reverse.init(data[0], data);

for (var k = 1; k <= outcome.length; k++) {
    console.log("Case #" + k + ": " + outcome[k - 1]);
}