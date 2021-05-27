
var nameUser = prompt ('enter your name');
var lastaNameUser = prompt ('and your last name');
var colorUser = prompt ('preferit color');
var number = 21;

var result = nameUser + lastaNameUser + colorUser + number;

document.getElementById('userPassword').innerHTML = result;

console.log(result);