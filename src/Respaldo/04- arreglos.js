// arreglos en JS 

//const arreglo = new Array();
// ñadir ms posiciones del arreglo

const arreglo=[1,2,3,4,5];
// de arreglos y de objetos 
let arreglo2 = [...arreglo,5];
// uso de la funcion map()
const arreglo3 = arreglo2.map(function(numero){
 return numero *2

});
console.log(arreglo);
console.log(arreglo2);
console.log(arreglo3);
