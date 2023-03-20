// desestructuracion 


// asignacion desestructurante


const persona = {
    nombre: `tony`,
    edad: 45,
    clave: `ironman `,
    latlng:{
        lat:3232,
        lng:-22323
    }
}
const { nombre, edad, clave, latlng:{lat,lng}} = persona
console.log(nombre)
console.log(edad)
console.log(clave)

console.log(lat,lng)

//sintaxis de la desestructuracion 
const retornaPerosna = ({ nombre, edad }) => {
    console.log(nombre, edad)

}


