let deadpool = {
    nombre: 'Wade',
    apellido: 'Winston',
    poder: 'Regeneracion',
    getNombre: function() {
        return `${this.nombre} ${this.apellido} - poder: ${this.poder}`
    }
};

// console.log(deadpool.getNombre());

// SIN destructuracion
// let nombre = deadpool.nombre;
// let apellido = deadpool.apellido;
// let poder = deadpool.poder;
// console.log(nombre, apellido, poder);

// CON destructuracion
let { nombre: primerNombre, apellido, poder } = deadpool;
console.log(primerNombre, apellido, poder);