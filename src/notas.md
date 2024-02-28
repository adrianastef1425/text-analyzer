  ///////// cantidad de numeros/////////
     const numeros = ['0' , '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    const newtext = text.value.trim().split("");
    //console.log(newtext);
    let conteo = 0;
    for(let i = 0; i < newtext.length; i++){
      for(let j = 0; j < numeros.length; j++){
        if(newtext[i] === numeros[j]){
          conteo = conteo + 1;
          //console.log(conteo);
        }
      }
    }
    return conteo;

    ///////////////////

    const newtext = text.value.trim().split(" ");
    let conteo = 0;
    
    for(let i = 0; i < newtext.length; i++){
      if(parseFloat(newtext[i]) != NaN ){
        conteo = conteo +1;

      }
    }
    //
    let nuevotexto = parseFloat("2010.3soles");
    console.log(conteo);
    //


    ///////// suma numeros //////////////////////
     const numeros = ['0' , '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    const newtext = text.value.trim().split("");
    //console.log(newtext);
    
    //
    let conteo = 0;
    let conteo2 = [];
    let sumanumeros = 0;
    for(let i = 0; i < newtext.length; i++){
      for(let j = 0; j < numeros.length; j++){
        if(newtext[i] === numeros[j]){
          conteo = newtext[i];
          conteo2 = conteo2.concat(parseInt(conteo));
          //console.log(conteo2); 
        }
      }
    }
    for(let i = 0; i < conteo2.length; i++){
      sumanumeros = sumanumeros + conteo2[i];
      //console.log(sumanumeros);
      
    }
   
    return sumanumeros; 