var titlePage = prompt('dai un titolo alla pagina');
document.getElementById('titleAutoGen').innerHTML = titlePage;

var nome = prompt('il tuo nome')
var cognome = prompt('il tuo cognome')
var età = prompt('numero età')
var firstResult = nome + cognome + parseInt(età) ;

var x = 100;
var y = 100;
var z = x * y / 100;
var plus = firstResult + prompt('lugo') + prompt('orario') + z;



document.getElementById('passEasy').innerHTML = plus;