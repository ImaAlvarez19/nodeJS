/**
    Async Await
 */

// let getNombre = async() => {
//     return 'Imanol';
// }

// Al agreguar el `async` es lo mismo que tener:
// let getNombre = () => {
//     return new Promise((resolve, reject) => {
//         resolve('Imanol');
//     });
// }


let getNombre = () => {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            resolve('Imanol');
        }, 3000);

    });
}

let saludo = async() => {
    let nombre = await getNombre();
    return `Hola ${nombre}`;
}



saludo().then(mensaje => {
    console.log(mensaje);
})

// getNombre().then(nombre => {
//         console.log(nombre);
//     })
//     .catch(err => {
//         console.log('Error de ASYNC', err)
//     })