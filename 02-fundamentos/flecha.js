// ---------------- Example 1 -------------------------------- 
// -- SIN arrow --

// function sumar(a, b) {
//     return a + b;
// }

// -- CON arrow function --

// let sumar = (a, b) => a + b;
// console.log(sumar(10, 20));


// ---------------- Example 2 -------------------------------- 
// -- SIN arrow --
// function saludar() {
//     return 'Hola Mundo';
// }

// -- CON arrow function --
// let saludar = () => 'Hola Mundo'
// console.log(saludar());

// ---------------- Example 3 -------------------------------- 
// -- SIN arrow --
// function saludar(nombre) {
// return `Hola ${nombre}`;
// }

// -- CON arrow function --
// let saludar = nombre => {
//     return `Hola ${nombre}`;
// }

// resumido en una linea cuando es de una linea la funcion
// let saludar = (nombre) => `Hola ${nombre}`;
// console.log(saludar('Cosito'));


// ---------------- Example 4 -------------------------------- 
// -- SIN arrow --
// let deadpool = {
//     nombre: 'Wade',
//     apellido: 'Winston',
//     poder: 'Regeneracion',
//     getNombre: function() {
//         return `${this.nombre} ${this.apellido} - poder: ${this.poder}`
//     }
// };

// -- CON arrow function --
// Prestar atención con 'this', ya que el valor que toma es el que está por fuera de la funcion arrow.
// Si la declaramos asi: getNombre: () => {} , dará 'undefined' en los valores asociados al 'this'

let deadpool = {
    nombre: 'Wade',
    apellido: 'Winston',
    poder: 'Regeneracion',
    getNombre() {
        return `${this.nombre} ${this.apellido} - poder: ${this.poder}`
    }
};

console.log(deadpool.getNombre());