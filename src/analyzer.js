const analyzer = {  
  getWordCount: (text) => {
    //TODO: esta función debe retornar el recuento de palabras que se encuentran en el parámetro `text` de tipo `string`.
    text = document.querySelector("textarea[name='user-input']");
    const datolista2 = document.querySelectorAll(".datolista2");
    const datox = text.value;
    const datoy = datox.trim().split(" ");
    //const datoz = datoy.split(" ");
    datolista2.forEach(function(dato){
      dato.textContent = datoy.length;
    })
  
  },

  getCharacterCount: (text) => {
   
    //TODO: esta función debe retornar el recuento de caracteres que se encuentran en el parámetro `text` de tipo `string`.
    /*
    text = document.getElementById("datoform");
    const datoLabel = document.getElementById("datolabel");
    let conteocaracteres = text.value.length;
    datoLabel.textContent = conteocaracteres;
    */
    //////////////////////////////////////////////
    text = document.querySelector("textarea[name='user-input']");
    //console.log(text);
    const datolista1 = document.querySelectorAll(".datolista1");
    //console.log(datolista1);
    datolista1.forEach(function(dato){
      dato.textContent = text.value.length;
      //console.log(datolista1);
    })

  },

  getCharacterCountExcludingSpaces: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres excluyendo espacios y signos de puntuación que se encuentran en el parámetro `text` de tipo `string`.
    
    
  },
  getAverageWordLength: (text) => {    
    //TODO: esta función debe retornar la longitud media de palabras que se encuentran en el parámetro `text` de tipo `string`.
    text = document.querySelector("textarea[name='user-input']").value;
      
    let newtext = text.replace(" ", "");
    console.log(newtext);
      
  
    
    const datolista1 = document.querySelectorAll(".datolista6");
    //console.log(datolista1);
    datolista1.forEach(function(dato){
      dato.textContent = newtext.length;
     
    })
  },
  getNumberCount: (text) => {
    //TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.
  },
  getNumberSum: (text) => {
    //TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.
  },

};

export default analyzer;
