boasVindas = (nome) => {
    console.log(`seja bem-vindo ${nome}!!!!!!!`)
}

exports.funcaoBoasVindas = boasVindas 

const somar = (valor1, valor2) => {
    console.log(`resultado: ${valor1 + valor2}`)
}

exports.calculo = somar

const multiplicar = (valor1, valor2) => {
    console.log(`resultado: ${valor1 * valor2}`)
}

exports.calculo = multiplicar

const subtrair = (valor1, valor2) => {
    console.log(`resultado: ${valor1 - valor2}`)
}

exports.calculo = subtrair

const dividir = (valor1, valor2) => {
    console.log(`resultado: ${valor1 / valor2}`)
}

exports.calculo = dividir
