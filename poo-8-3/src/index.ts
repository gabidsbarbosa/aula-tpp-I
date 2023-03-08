import Fornecedor from "./fornecedor";
import Produto from "./produtos";
import Telefone from "./telefone"
import Endereco from "./endereco"

let p1 = new Produto()
p1.nome = 'milho'
p1.preco = 2
console.log(`nome: ${p1.nome}`)

let address = new Endereco(2,'','','')
let tel = new Telefone('12', '996548531')
let f1 = new Fornecedor('jaia', tel, address)
console.log(f1.endereco.mostrarEndereco())

/* let f1 = new Fornecedor('jaia', new Telefone('12', '996548531')) */





