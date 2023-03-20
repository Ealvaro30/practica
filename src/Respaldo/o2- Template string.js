// los templates string 
// 


const nombre = 'alvaro';
const apellido= 'estrada';

//const nombreCompleto = nombre + " " + apellido;

// string sencillos 
const nombreCompleto = `hola mundo`;
// ${ } dentro de los corchetes se ponen las variables 
// se pone dentro de comillas simples o acentos 
console.log(nombreCompleto +` ${nombre} ${apellido}`)

//funciones en javascript 

function getSaludo(nombre){
return 'Hola  mundo '+nombre


}

console.log('este es un texto: ${getSaludo(nombre)}')