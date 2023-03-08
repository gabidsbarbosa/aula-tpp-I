import Telefone from "./telefone"
import Endereco from "./endereco"

export default class Fornecedor {
    public nome : string
    public telefone : Telefone
    public endereco : Endereco
    constructor(nome:string, telefone:Telefone, endereco:Endereco){
        this.nome = nome
        this.telefone = telefone
        this.endereco = endereco
    }
}