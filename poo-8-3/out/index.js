"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fornecedor_1 = __importDefault(require("./fornecedor"));
var produtos_1 = __importDefault(require("./produtos"));
var telefone_1 = __importDefault(require("./telefone"));
var endereco_1 = __importDefault(require("./endereco"));
var p1 = new produtos_1.default();
p1.nome = 'milho';
p1.preco = 2;
console.log("nome: ".concat(p1.nome));
var address = new endereco_1.default(2, '', '', '');
var tel = new telefone_1.default('12', '996548531');
var f1 = new fornecedor_1.default('jaia', tel, address);
console.log(f1);
console.log(f1.endereco.mostrarEndereco());
/* let f1 = new Fornecedor('jaia', new Telefone('12', '996548531')) */
