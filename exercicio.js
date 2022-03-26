const fs = require('fs/promises')

function soma(num1, num2){
    return new Promise ((resolve,reject)=>{ //colocar o return para que a promise seja retornada pela função
        if(typeof(num1)!="number"){
            return reject("Não são números")
        }

        fs.appendFile("resultado.txt",`${num1}+${num2}=${num1+num2}\n`).then( () => {
        resolve(num1+num2);
        }
        )})  
}

soma(13,20)
.then((resultado)=> console.log("Resultado gerado!")) //o then e o catch podem ficar fora da função onde está a promise
.catch((erro) => console.log(erro))
