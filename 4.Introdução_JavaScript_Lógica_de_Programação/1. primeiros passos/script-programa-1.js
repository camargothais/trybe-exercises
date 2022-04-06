// Exercício 1:

const a = 25;
const b = 15;

const soma = a + b;
console.log(soma);

const subtraçao = a - b;
console.log(subtraçao);

const multiplicaçao = a * b;
console.log(multiplicaçao);

const divisao = a / b;
console.log(divisao);

const modulo = a % b;
console.log(modulo);

//Exercício 2:

const primeiroNum = 25;
const segundoNum = 35;

if (primeiroNum > segundoNum) {
  console.log("O primeiro número é maior: " + primeiroNum);
} else if (primeiroNum == segundoNum) {
  console.log("Os números são iguais");
} else {
  console.log("O segundo número é maior: " + segundoNum);
}

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

// Exercício 4:

const valor = 1.62;

if (valor > 0) {
  console.log("positive");
} else if (valor < 0) {
  console.log("negative");
} else {
  console.log("zero");
}
