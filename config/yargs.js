
const opts = {
    base :{
        demant :true,
        alias : 'b'

    },
    limite :{
        alias : 'l',
        default : 10

    }
}

const argv = require('yargs')
.command('listar','Imprime en consola la tabla de multiplicar',opts)
.command('crear','crea una tabla de multiplicar en un archivo de texto',opts)
.help()
.argv;


module.exports ={
    argv
}