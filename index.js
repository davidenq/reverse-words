/*Load modules*/
var fs      = require('fs');
var reverse = require('./lib/reverse-text');

//
var file    ="";
var data    =[];


file = fs.readFileSync('./B-small-practice.in', 'utf8');

data = file.split("\n");


var outcome = reverse.init(data[0], data);

for(var k=1; k <= outcome.length; k++){
    console.log("Case #"+k+": "+outcome[k-1]);
}