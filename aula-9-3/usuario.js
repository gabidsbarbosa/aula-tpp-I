"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Usuario {
    constructor(cpf, nome, apelido) {
        this.cpf = cpf;
        this.nome = nome;
        this.apelido = apelido;
    }
    get pegarCpf() {
        return this.cpf;
    }
    get pegarApelido() {
        return this.apelido;
    }
    get pegarNome() {
        return this.nome.toLocaleUpperCase();
    }
    set inserirNome(novoNome) {
        this.nome = novoNome.toLocaleUpperCase();
    }
}
exports.default = Usuario;
