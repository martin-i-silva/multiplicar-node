const fs = require('fs');
const colors = require('colors');

let listarTabla= (base, limite)=>{
    
    if(!Number(base) || !Number(limite)){
        console.log(`El valor introducido no es un numero valido`.red)

    } else{
    
     

     for(let i=1; i<=limite; i++ ){
         console.log(`${base}*${i}=${base*i}`.blue)
     }
    }
}


let crearArchivo = (base, limite = 10)=> {
    
    return new Promise((resolve, reject)=>{
       
       if(!Number(base)|| !Number(limite)){
           reject(`El valor introducido no es un numero valido`)
           return
       }
       
        let data = '';

        for(let i=1; i<=limite; i++ ){
            data += `${base}*${i}=${base *i}\n`
        }
        
        
        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
          if (err) 
            reject(err);
         else           
                resolve(`tabla-${base}.txt`);
        });

    }
)}

module.exports = {
    crearArchivo,
    listarTabla
}