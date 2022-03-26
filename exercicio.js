const fs = require('fs/promises')

function soma(num1, num2){
    const p = new Promise ((resolve,reject)=>{
        if(typeof(num1)!="number"){
            return reject("Não são números")
        }

        fs.appendFile("resultado.txt",`${num1}+${num2}=${num1+num2}\n`).then( () => {
        resolve(num1+num2);
        }
        )})  

    p
    .then((resultado)=> console.log("Resultado gerado!"))
    .catch((erro) => console.log(erro))
    
}

soma("oi",20)
