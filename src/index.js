import analyzer from './analyzer.js';


//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`

const input = document.querySelector("textarea[name='user-input']");
const datolista1 = document.querySelector(".datolista1");
const datolista2 = document.querySelector(".datolista2");
const datolista3 = document.querySelector(".datolista3");
const datolista4 = document.querySelector(".datolista4");
const datolista5 = document.querySelector(".datolista5");
const datolista6 = document.querySelector(".datolista6");

input.addEventListener("input", function() {

    const conteocaracteres = analyzer.getCharacterCount(input);
    datolista1.textContent = conteocaracteres;
    const conteopalabras = analyzer.getWordCount(input);
    datolista2.textContent = conteopalabras;
    const conteosinespacios = analyzer.getCharacterCountExcludingSpaces(input);
    datolista3.textContent = conteosinespacios;
    const conteonumeros = analyzer.getNumberCount(input);
    datolista4.textContent = conteonumeros;
    const sumanumeros = analyzer.getNumberSum(input);
    datolista5.textContent = sumanumeros;
    const conteomedia = analyzer.getAverageWordLength(input);
    datolista6.textContent = conteomedia;

    // Código para manejar el evento de entrada en el textarea
});

let resetbutton = document.getElementById("reset-button");
console.log(resetbutton);

resetbutton.addEventListener("click", function(){
    let datotext = document.querySelector("textarea[name='user-input']");
    datotext.value = "";

    let clase1 = document.querySelector(".datolista1");
    clase1.innerHTML = "0";

    let clase2 = document.querySelector(".datolista2");
    clase2.innerHTML = "0";

    let clase3 = document.querySelector(".datolista3");
    clase3.innerHTML = "0";

    let clase4 = document.querySelector(".datolista4");
    clase4.innerHTML = "0";

    let clase5 = document.querySelector(".datolista5");
    clase5.innerHTML = "0";

    let clase6 = document.querySelector(".datolista6");
    clase6.innerHTML = "0";

})
                


//export default resetear;



