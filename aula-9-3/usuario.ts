export default class Usuario {
    private cpf:string
    private nome:string
   // readonly > propriedade que apenas pode ser lida
    constructor(cpf:string,nome:string) {
        this.cpf = cpf
        this.nome = nome
    }
    public get pegarCpf() {
        return this.cpf
    }

    public get pegarNome() {
        return this.nome.toLocaleUpperCase()
    }

    public set inserirNome(novoNome:string) {
        this.nome = novoNome.toLocaleUpperCase()
    }
}