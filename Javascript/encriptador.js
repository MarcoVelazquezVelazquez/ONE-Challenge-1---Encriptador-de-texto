const textoAEncriptar = document.querySelector(".texto-a-encriptar");
const textoYaEncriptado = document.querySelector(".texto-encriptado");


//Llaves para los array:

// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"

function botonEncriptar(){
    const textoEncriptado = encriptar(textoAEncriptar.value);
    textoYaEncriptado.value = textoEncriptado;
    textoAEncriptar.value = "";
    textoYaEncriptado.style.backgroundImage = "none";
}

function encriptar(stringEncriptada){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return stringEncriptada;
}

function botonDesencriptar(){
    const textoEncriptado = desencriptar(textoAEncriptar.value);
    textoYaEncriptado.value = textoEncriptado;
    
}

function desencriptar(stringDesencriptada){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringDesencriptada.includes(matrizCodigo[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }
    return stringDesencriptada;
}

function botonCopiarTexto(){

  var textoCopiado = document.getElementById("CopiarTexto");

  textoCopiado.select();
  textoCopiado.setSelectionRange(0, 99999); // For mobile devices

  navigator.clipboard.writeText(textoCopiado.value);
  
  //Notificación de texto copiado.
  alert("Se ha copiado el texto: " + textoCopiado.value);
}