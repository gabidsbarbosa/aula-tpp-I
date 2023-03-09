import Usuario from "./usuario";
import PromptSync from "prompt-sync";
import Entrada from "./entrada"

/* let user = new Usuario('123-456-789-0','Gabi')
user.inserirNome = 'Aline'
console.log(user) */

/* let input = PromptSync()
let nome = input('Nome: ')
let cpf = input('CPF: ') */



let entrada = new Entrada()

let listaUsuario = []
for (let quantidade = 0; quantidade < 10; quantidade++) {
    let nome = entrada.receberTexto('Nome: ')
    let cpf = entrada.receberTexto('CPF: ')
    let user = new Usuario('','')
    listaUsuario.push(user)
}

listaUsuario.forEach(elemento => {
    console.log(`Nome: ${elemento.pegarNome}`)
    console.log(`CPF: ${elemento.pegarCpf}`)
})

