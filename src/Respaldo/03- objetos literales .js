// objectos literales 

const persona ={
// en los atributos de los obejtos el igual es dos puntos 
// y separacion en lugar de ; es coma simplemente 
    nombre: 'Tony',
    apellido : 'stark',
    edad: 5,
    direccion : {
        ciudad: 'NEY YORK ',

    }

};


//para crear clones en los objetos se necesita declara de la siguiente manera 
// son tres puntos y el nombre del objeto a clonar 
const persona2={...persona}
persona2.nombre='peter'
console.log(persona);

console.log(persona2)