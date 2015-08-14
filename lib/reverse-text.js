'use strict';

var reverse = {};
var arrReverseText = [];

exports = module.exports = reverse;

reverse.init = function (count, data) {

	var text = data[1].split(" ");
    var reverseText = "";
    for(var i = text.length-1; i>=0; i--){
        if(i!=0){
            reverseText += text[i] + " ";
        }else {
            reverseText += text[i];
        }
    }
    arrReverseText.push(reverseText);
    count--;
    if(count != 0){
        data.splice(0,1);
        reverse.init(count, data);
    }
    return arrReverseText;

}

