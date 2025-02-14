import analyzer from './analyzer.js';

//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`

const input = document.querySelector("textarea[name='user-input']");
const datolista1 = document.querySelectorAll(".datolista1")[0];
const datolista2 = document.querySelectorAll(".datolista1")[1];
const datolista3 = document.querySelectorAll(".datolista1")[2];
const datolista4 = document.querySelectorAll(".datolista1")[3];
const datolista5 = document.querySelectorAll(".datolista1")[4];
const datolista6 = document.querySelectorAll(".datolista1")[5];

input.addEventListener("input", function(event) {
  const input2 = event.target.value; 
  
  const conteocaracteres = analyzer.getCharacterCount(input2);
  datolista1.textContent = "Caracteres: " + conteocaracteres;
  const conteopalabras = analyzer.getWordCount(input2);
  datolista2.textContent = "Palabras: " + conteopalabras;
  const conteosinespacios = analyzer.getCharacterCountExcludingSpaces(input2);
  datolista3.textContent = "Caracteres Sin Espacios: " + conteosinespacios;
  const conteonumeros = analyzer.getNumberCount(input2);
  datolista4.textContent = "Numeros: " + conteonumeros;
  const sumanumeros = analyzer.getNumberSum(input2);
  datolista5.textContent = "Suma Numeros: " + sumanumeros;
  const conteomedia = analyzer.getAverageWordLength(input2);
  datolista6.textContent = "Promedio Longitud: " + conteomedia;
});

const resetbutton = document.getElementById("reset-button");


resetbutton.addEventListener("click", function(){
  //const datotext = document.querySelector("textarea[name='user-input']");
  input.value = "";

  //const clase1 = document.querySelectorAll(".datolista1")[0];
  datolista1.innerHTML = "Caracteres: 0";

  //const clase2 = document.querySelectorAll(".datolista1")[1];
  datolista2.innerHTML = "Palabras: 0";

  //const clase3 = document.querySelectorAll(".datolista1")[2];
  datolista3.innerHTML = "Caracteres Sin Espacios: 0";

  //const clase4 = document.querySelectorAll(".datolista1")[3];
  datolista4.innerHTML = "Numeros: 0";

  //const clase5 = document.querySelectorAll(".datolista1")[4];
  datolista5.innerHTML = "Suma Numeros: 0";

  //const clase6 = document.querySelectorAll(".datolista1")[5];
  datolista6.innerHTML = "Promedio Longitud: 0";

})
                



