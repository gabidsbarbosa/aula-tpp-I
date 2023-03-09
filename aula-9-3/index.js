"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const usuario_1 = __importDefault(require("./usuario"));
const entrada_1 = __importDefault(require("./entrada"));
/* let user = new Usuario('123-456-789-0','Gabi')
user.inserirNome = 'Aline'
console.log(user) */
/* let input = PromptSync()
let nome = input('Nome: ')
let cpf = input('CPF: ') */
let entrada = new entrada_1.default();
let listaUsuario = [];
for (let quantidade = 0; quantidade < 10; quantidade++) {
    let nome = entrada.receberTexto('Nome: ');
    let cpf = entrada.receberTexto('CPF: ');
    let apelido = entrada.receberTexto('Apelido: ');
    let user = new usuario_1.default('', '', '');
    listaUsuario.push(user);
}
listaUsuario.forEach(elemento => {
    console.log(`Nome: ${elemento.pegarNome}`);
    console.log(`CPF: ${elemento.pegarCpf}`);
    console.log(`Apelido: ${elemento.pegarApelido}`);
});
