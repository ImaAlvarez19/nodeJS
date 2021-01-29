let empleados = [{ id: 1, nombre: 'Imanol' }, { id: 2, nombre: 'Melisa' }, { id: 3, nombre: 'Juan' }];
let salarios = [{ id: 1, salario: 1000 }, { id: 2, salario: 2000 }];

let getEmpleado = (id) => {

    return new Promise((resolve, reject) => {
        let empleadoDB = empleados.find(empleado => empleado.id === id);

        if (!empleadoDB) {
            reject(`No existe un empleado con el ID ${id}`);
        } else {
            resolve(empleadoDB);
        }

    });
}


let getSalario = (empleado) => {
    return new Promise((resolve, reject) => {
        let salarioDB = salarios.find(salario => salario.id === empleado.id);

        if (!salarioDB) {
            reject(`No se encontró un salario para el empleado ${empleado.nombre}`);
            // aqui se seguiría ejecutando el codigo en caso de haber, porque no es como un `return`
        } else {
            // resolve siempre se ejecuta una vez
            resolve({
                nombre: empleado.nombre,
                salario: salarioDB.salario,
                id: empleado.id
            });
        }
    });
}


// UNA FORMA DE HACER

// getEmpleado(2).then(empleado => {
//     getSalario(empleado).then(response => {
//         console.log(`El salario de ${response.nombre} es de $ ${response.salario}`)
//     }, err => { console.log(err); });
// }, (err) => { console.log(err); });



// OTRA FORMA promesa encadenada
getEmpleado(1).then(empleado => {
        return getSalario(empleado);
    })
    .then(response => {
        console.log(`El salario de ${response.nombre} es de $ ${response.salario}`)
    })
    .catch(err => {
        console.log(err);
    });