//4) Crie uma função que receba 3 números e retorne o menor valor.

var num1 = parseInt(prompt("Digite o primeiro valor:"));
var num2 = parseInt(prompt("Digite o segundo valor:"));
var num3 = parseInt(prompt("Digite o terceiro valor:"));

function check (num1, num2, num3) {
  return Math.min(num1, num2, num3);
}
document.body.append(check(num1, num2, num3));
