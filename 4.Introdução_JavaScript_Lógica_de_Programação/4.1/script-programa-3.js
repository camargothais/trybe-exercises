//Exercício 3:

const num1 = 95;
const num2 = 105;
const num3 = 35;

if (num1 > num2 && num1 > num3) {
  console.log("O número 1 é o maior entre os 3 números: " + num1);
} else if (num2 > num1 && num2 > num3) {
  console.log("O número 2 é o maior entre os 3 números: " + num2);
} else if (num3 > num1 && num3 > num2) {
  console.log("O número 3 é o maior entre os 3 números: " + num3);
} else {
  console.log("Defina números que não são iguais.");
}
