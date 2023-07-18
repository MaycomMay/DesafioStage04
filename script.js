let firstNumber = prompt('Digite seu primeiro número')
let secondNumber = prompt('Digite seu segundo número')

firstNumber = Number(firstNumber)
secondNumber = Number(secondNumber)

const sum = (firstNumber + secondNumber)
const sub = (firstNumber - secondNumber)
const multi = (firstNumber * secondNumber)
const div = (firstNumber / secondNumber)
const restDiv = (firstNumber % secondNumber)


alert ('Soma é ' + sum)
alert ('Subtração é ' + sub)
alert ('Multriplicação é ' + multi)
alert ('Divisão é ' + div)
alert ('Resto da divisão é ' + restDiv)

if (sum % 2 === 0){
  alert ("Número informado é par")
}

if (firstNumber = secondNumber){
  alert ("Números inseridos são iguais")
}