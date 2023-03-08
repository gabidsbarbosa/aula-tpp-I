export default class Endereco {
    public numero : number
    public rua : string
    public bairro : string
    public cidade : string
    public mostrarEndereco(){
        return `cidade: ${this.cidade}, bairro: ${this.bairro}, rua: ${this.rua}, número: ${this.numero}`
    }
    constructor(numero:number,rua:string,bairro:string,cidade:string){
        this.numero = numero
        this.rua = rua
        this.bairro = bairro
        this.cidade = cidade
    }
}
