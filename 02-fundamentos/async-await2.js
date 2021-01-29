let empleados = [{ id: 1, nombre: 'Imanol' }, { id: 2, nombre: 'Melisa' }, { id: 3, nombre: 'Juan' }];
let salarios = [{ id: 1, salario: 1000 }, { id: 2, salario: 2000 }];

let getEmpleado = async(id) => {

    let empleadoDB = empleados.find(empleado => empleado.id === id);

    if (!empleadoDB) {
        throw new Error(`No existe un empleado con el ID ${id}`);
    } else {
        return empleadoDB;
    }

}


let getSalario = async(empleado) => {
    let salarioDB = salarios.find(salario => salario.id === empleado.id);

    if (!salarioDB) {
        throw new Error(`No se encontró un salario para el empleado ${empleado.nombre}`);
    } else {
        return {
            nombre: empleado.nombre,
            salario: salarioDB.salario,
            id: empleado.id
        };
    }
}

let getInformacion = async(id) => {
    let empleado = await getEmpleado(id);
    let response = await getSalario(empleado);

    return `${response.nombre} tiene un salario de $ ${response.salario}`
}

getInformacion(20)
    .then(mensaje => console.log(mensaje))
    .catch(err => console.log(err));