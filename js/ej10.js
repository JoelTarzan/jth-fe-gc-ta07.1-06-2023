// 10. Crea un objeto que almacene los datos de una persona (nombre, apellidos, edad,
//     dirección, ciudad, país... y lo que quieras). Crea una función que saque por consola el
//     nombre completo (nombre y apellidos) de la persona a modo de string.

let Persona = {
    "nombre": "Joel",
    "apellidos": "Tarzán Hernández",
    "edad": 22,
    "ciudad": "Vila-Seca",
    "pais": "España"
}

const nameOfPerson = (person) => {
    console.log(person.nombre + ' ' + person.apellidos);
}

nameOfPerson(Persona);