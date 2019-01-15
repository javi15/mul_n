const argv = require('./config/yargs').argv;
const colors = require('colors');
const {crearArchivo, crearLista} = require('./multiplicar/logica'); 
let comando = argv._[0];
switch(comando){
    case 'listar' :
    crearLista(argv.base, argv.limite);
    break;
    case 'crear' :
     crearArchivo(argv.base, argv.limite).then(archivo => console.log(`Archivo creado`, archivo))
                       .catch(e => console.log(e));
    break;
    default :
    console.log('Comando ERROR ');
    break
}



// console.log('Limite',argv.limite);