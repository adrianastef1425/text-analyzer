import analyzer from './analyzer.js';

//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`

/*function contador() {
    var datoInput = document.getElementById("datoform");
    var datoLabel = document.getElementById("datolabel");
    var conteocaracteres = datoInput.value.length;
    datoLabel.textContent=" Caracteresl: " + conteocaracteres;
  }
*/

var input = document.getElementById("datoform");
input.addEventListener("input", analyzer.getCharacterCount, false);
console.log(input);
 




