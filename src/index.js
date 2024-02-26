import analyzer from './analyzer.js';


//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`

// (HTML)
/* 
  <div>
      <label>Caracteres: </label>
      <label id="datolabel">0</label>
  </div>

  <form>
      <input type="text" name="datoform" id="datoform" />
      <br />
  </form>
*/

/*
const input1 = document.getElementById("datoform");
input1.addEventListener("input", analyzer.getCharacterCount, false);
input1.removeEventListener("input", analyzer.getWordCount);
*/
///////////////////////////////////////////////
const input2 = document.querySelector("textarea[name='user-input']");
input2.addEventListener("input", function() {
    analyzer.getCharacterCount();
    analyzer.getWordCount();
    analyzer.getCharacterCountExcludingSpaces();
    analyzer.getNumberCount();
    analyzer.getNumberSum();
    analyzer.getAverageWordLength();
    // Código para manejar el evento de entrada en el textarea
});

let resetbutton = document.getElementById("reset-button");
console.log(resetbutton);

resetbutton.addEventListener("click", function(){
    let datotext = document.querySelector("textarea[name='user-input']");
    datotext.value = "";

    let clase1 = document.querySelectorAll(".datolista1");
    clase1.forEach(function(dato) {
        dato.innerHTML = "0";
    });

    
})
                


//export default resetear;



