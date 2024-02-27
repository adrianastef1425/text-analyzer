function numeropalabras(text){
  const datox = text.value.trim().split(" ").length;
  return datox;
}

const analyzer = {  
  getWordCount: (text) => {
    //TODO: esta función debe retornar el recuento de palabras que se encuentran en el parámetro `text` de tipo `string`.
    //text = document.querySelector("textarea[name='user-input']");
    //const datolista2 = document.querySelectorAll(".datolista2");
    console.log(text);
    /*
    const datox = text;
    const datoz = datox.value;
    const datoy = datoz.trim().split(" ");
    //const datoz = datoy.split(" ");
    datolista2.forEach(function(dato){
      dato.textContent = datoy.length;
    })
    */
    const datox = text.value.trim().split(" ").length;

    console.log(datox);
    /*
    clase2.forEach(function(dato){
      dato.textContent = datox.length;
     })
    */
   return datox;
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
    const datox = text.value.length;
    return datox
  },

  getCharacterCountExcludingSpaces: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres excluyendo espacios y signos de puntuación que se encuentran en el parámetro `text` de tipo `string`.
    const signos = ['!', '#', '$', '%', '&', '/', '(', ')', '¿', '¡','?', '{', '}', '[', ']', ' '];
    let newtext = text.value.split("");
    let datox = text.value;
    let out = [];
    for(let i = 0; i < text.value.length; i++){
      for(let j = 0; j < signos.length; j++){
        if(newtext[i] == signos[j]){
          let sign = newtext[i];
          out = out.concat(sign);
          datox = datox.replace(signos[j], "");
        }
      }
    }
    
    console.log(datox);
    let cantidad = datox.length;
    return cantidad;
    
  },
  getAverageWordLength: (text) => {    
    //TODO: esta función debe retornar la longitud media de palabras que se encuentran en el parámetro `text` de tipo `string`.
    const numeropalabras2 = numeropalabras(text);
    const datox = text.value.replace(/\s/g, "");
    const datoy = (datox.length)/numeropalabras2;
    //const newtext2 = newtext.split("");
    //console.log(newtext);
    //const datolista1 = document.querySelectorAll(".datolista6");
    
    //let cantidadpalabras = this.getWordCount();
    //obtener la cantidad de palabras
    /*
    const text2 = document.querySelector("textarea[name='user-input']");
    const datolista2 = document.querySelectorAll(".datolista6");
    const datox = text2.value;
    const datoy = datox.trim().split(" ");
    datolista2.forEach(function(dato){
      dato.textContent = datoy.length;
    })
    */

    /*
    datolista1.forEach(function(dato){
      dato.textContent = (newtext.length)///cantidadpalabras;
     
    })
    */
   return datoy;
    
  },
  getNumberCount: (text) => {
    //TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.
  const numeros = ['0' , '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  let newtext = text.value.trim().split("");
  console.log(newtext);
  let conteo = 0;
  for(let i = 0; i < newtext.length; i++){
    for(let j = 0; j < numeros.length; j++){
      if(newtext[i] == numeros[j]){
        conteo = conteo + 1;
        console.log(conteo);
      }
    }
  }
  return conteo;
  },

  getNumberSum: (text) => {
    //TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.
    const numeros = ['0' , '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    let newtext = text.value.trim().split("");
    console.log(newtext);
    let conteo = 0;
    let conteo2 = [];
    let sumanumeros = 0;
    for(let i = 0; i < newtext.length; i++){
      for(let j = 0; j < numeros.length; j++){
        if(newtext[i] == numeros[j]){
            conteo = newtext[i];
            conteo2 = conteo2.concat(parseInt(conteo));
              console.log(conteo2);
          
        }
      }
    }
    for(let i = 0; i < conteo2.length; i++){
      sumanumeros = sumanumeros + conteo2[i];
      console.log(sumanumeros);
    }
   
    return sumanumeros;
  },

};

export default analyzer;
