// const fs = require('fs') //importando uma biblioteca nativa do Node

// const conteudo = fs.readFile('arquivo.txt'); //Dá erro quando rodamos só essa linha, porque quando damos console.log na variável conteúdo, ela ainda não possui o arquivo lido

// const conteudo = fs.readFile('arquivo.txt', (err,resultado) =>{ //só vai pro callback depois de terminar de ler o arquivo, por isso não dá erro quando executamos aqui
//     console.log(resultado)
// });

// console.log(conteudo);


// ---------------- // ------------------ //
// Agora fazendo com promises

const fs = require('fs/promises')

//Nesse caso, como chamamos como promise, ele vai seguir com o codigo, avisando que a promise está 'pending'
//const conteudo = fs
    //.readFile('arquivo.txt')
    //.then((conteudo) => console.log(conteudo)) //quando e se der certo, imprime o conteúdo
    //.catch((erro) => console.log("Deu ruim")) //quando e se der erro, imprime essa mensagem. O catch não é obrigatorio, mas se não colocamos, não sabemos qual o erro
    //.finally()

//console.log(conteudo);

//console.log("Teste depois da leitura");


// ---------------- // ------------------ //
//Quando queremos esperar uma promise terminar pra fazer algo, precisamos usar async await
//Precismos estar dentro de uma estrutura assíncrona (async) para usar o await. Nesse caso, não precisamos usar o then
//try e catch substituem o then&catch
// o finally é usado para dar um comando em sequência, independente de ter dado certo ou não

// async function lerArquivo (){
//     try{  
//         const conteudo = await fs.readFile('arquivo.txt');
//         console.log(conteudo) //só vai ser executada essa linha quando terminarmos de ler o arquivo
//     } catch (error){
//         console.log("deu ruim")
//     } finally {
//         console.log("recarregue a página")
//     }
// }

// lerArquivo()
// console.log("Teste depois da leitura")


// ---------------- // ------------------ //
//Como criar uma promise

const promise = new Promise((resolve, reject) =>{   
    const soma = 10 + 30;
    

    if (soma !=20){
        reject("deu ruim")
    }

    resolve(soma); //como se fosse um return
})

promise
    .then((resultado) => console.log(resultado))
    .catch((error) => console.log(error))



// ---------------- // ------------------ //

const createCard = nome => {
    const pr = new Promise (async (resolve,reject) => {
        if (nome=='luiza'){
            return reject("nome não é permitido!")
        }

        await fs.appendFile(`cartao-visita.txt`,`Olá, meu nome é ${nome}`)
        resolve()
    }) 

pr
.then(() => console.log("Cartão de visita gerado"))
.catch(() => console.log("Nome não é permitido"))
}

createCard('Mayara')