import analyzer from './analyzer.js';

//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`
var datoform = document.getElementById("datorecibido");
var input = document.getElementsByTagName("dato");
const caracteres = input.length;
datoform.textContent=" Caracteresl: "+ caracteres;

