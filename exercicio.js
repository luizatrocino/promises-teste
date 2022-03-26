const fs = require('fs/promises')

function soma(num1, num2){
    const p = new Promise ((resolve,reject)=>{
        if(typeof(num1)!="number"){
            return reject()
        }

        fs.appendFile("resultado.txt",`${num1}+${num2}=${num1+num2}\n`).then( () => {
        resolve(num1+num2);
        }
        )})  

    p
    .then((resultado)=> console.log("Resultado gerado!"))
    .catch((erro) => console.log("Não são números"))
    
}

soma(3,20)
