function numeropalabras(text){
  const datox = text.trim().split(" ").length;
  return datox;
}

const analyzer = {  
  getWordCount: (text) => {
    //TODO: esta función debe retornar el recuento de palabras que se encuentran en el parámetro `text` de tipo `string`.
    const datox = text.trim().split(" ").length;
    return datox;
      
  },

  getCharacterCount: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres que se encuentran en el parámetro `text` de tipo `string`.
    const datox = text.length;
    return datox
  },

  getCharacterCountExcludingSpaces: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres excluyendo espacios y signos de puntuación que se encuentran en el parámetro `text` de tipo `string`.
    const signos = ['!', '#', '$', '%', '&', '/', '(', ')', '¿', '¡','?', '{', '}', '[', ']', ' ', ',', ';', '.', ':'];
    const newtext = text.split("");
    let datox = text;
    let out = [];
    for(let i = 0; i < text.length; i++){
      for(let j = 0; j < signos.length; j++){
        if(newtext[i] === signos[j]){
          const sign = newtext[i];
          out = out.concat(sign);
          datox = datox.replace(signos[j], "");
        }
      }
    }
    const cantidad = datox.length;
    return cantidad;
    
  },
  getAverageWordLength: (text) => {    
    //TODO: esta función debe retornar la longitud media de palabras que se encuentran en el parámetro `text` de tipo `string`.
    const numeropalabras2 = numeropalabras(text);
    const datox = text.replace(/\s/g, "");
    const datoy = (datox.length)/numeropalabras2;
    const numeroRedondeado = parseFloat(datoy.toFixed(2));
    return numeroRedondeado;
    
  },
  getNumberCount: (text) => {
    //TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.
    const nuevo = text.split("");
    const ultimo = nuevo.pop();
    if(ultimo === '.'){
      text = nuevo.join("");
    }
    /////
    const newtext = text.trim().split(" ");
    let conteo = 0;

    for(let i = 0; i < newtext.length; i++){
      if(!isNaN(newtext[i]*1)){
        conteo = conteo + 1;
      }
    }
    return conteo;
  },

  getNumberSum: (text) => {
    //TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.
    const nuevo = text.split("");
    const ultimo = nuevo.pop();
    if(ultimo === '.'){
      text = nuevo.join("");
    }
    ////
    const newtext = text.trim().split(" ");
    let conteo = 0;
    
    for(let i = 0; i < newtext.length; i++){
      //if(!isNaN(parseFloat(newtext[i]*1)))
      if(!isNaN(newtext[i]*1)){
        conteo = conteo + newtext[i]*1;
      }
    }
    const numeroRedondeado = parseFloat(conteo.toFixed(2));
    return numeroRedondeado
  },

};

export default analyzer;
