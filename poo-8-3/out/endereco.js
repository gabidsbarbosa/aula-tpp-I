"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Endereco = /** @class */ (function () {
    function Endereco(numero, rua, bairro, cidade) {
        this.numero = numero;
        this.rua = rua;
        this.bairro = bairro;
        this.cidade = cidade;
    }
    Endereco.prototype.mostrarEndereco = function () {
        return "cidade: ".concat(this.cidade, ", bairro: ").concat(this.bairro, ", rua: ").concat(this.rua, ", n\u00FAmero: ").concat(this.numero);
    };
    return Endereco;
}());
exports.default = Endereco;
