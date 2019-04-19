'use strict';

let reverse = {};
let arrReverseText = [];

exports = module.exports = reverse;

reverse.init = (count, data) => {

    let text = data[1].split(" ");
    let reverseText = "";
    for (let i = text.length - 1; i >= 0; i--) {
        i != 0 ? reverseText += text[i] + " " : reverseText += text[i];
    }
    arrReverseText.push(reverseText);
    count--;
    if (count != 0) {
        data.splice(0, 1);
        reverse.init(count, data);
    }
    return arrReverseText;
}

