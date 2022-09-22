// let n = 10
// var zerofilled = ('0000'+n).slice(-4);
// console.log(zerofilled)


var pad = "000000";
var n = '50';
var result = (pad+n).slice(-pad.length);

console.log(result)