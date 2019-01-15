const fs = require('fs');
const colors = require('colors');
let data = '';

let crearLista = (base, limite = 10) => {
    console.log(`===========================` .green);
    console.log(`====  TABLA DEL ${base} ========` .green);
    console.log(`===========================` .green);
    
  for(let i = 1;i <= limite; i++){
    
    console.log(` ${i} X ${base} = ${i * base}`)
  }
}

let crearArchivo = (base, limite = 10) =>{

    return new Promise ((resolve, reject)=>{

        if(!Number(base)){
            console.log(`El valor introducido ${base} no es un numero`);
            return;
        }

        console.log(`===========================` .green);
        console.log(`====  TABLA DEL ${base} ========` .green);
        console.log(`===========================` .green);
        for(let i = 1;i <=limite; i++){
            let resp = base * i;
            data += `${base} x ${i} = ${resp}\n`;
        }
        
        fs.writeFile(`files/tablas-${base}-lim-${limite}.txt`,data, (err) =>{
        
            if (err) reject(err);
            else
            resolve(colors.yellow(`texto-${base}-lim-${limite}.txt`));
        })
    });
}

module.exports = {
    crearArchivo,
    crearLista
}