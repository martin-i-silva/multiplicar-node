const argv = require('./congif/yargs').argv;
const colors = require('colors/safe');
                
// Requireds
//Hay 3 tipos 
// const fs = require('fs'); // para paquetes propios de node
// const fs = require('express'); // para paquetes externos a node
// const fs = require('./relative path'); // para archivos propios del proyecto
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar')

// let base = 'abc';
//Mandar la base desde consola ---> node app --base=5

let comando = argv._[0]

switch(comando){
    case 'listar':
        listarTabla(argv.base, argv.limite)
    break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
    .then(archivo=>console.log('Archivo creado:', colors.green(archivo)))   
    .catch(err=>console.log(err))
    break;
    default: 
    console.log('comando no reconocido')
}




//console.log(argv)


// let parametro = argv[2];
// let base = parametro.split('=')[1]

