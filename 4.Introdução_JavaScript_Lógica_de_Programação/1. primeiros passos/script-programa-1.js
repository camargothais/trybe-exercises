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

//Exercício 5:

const angulo1 = 45;
const angulo2 = 45;
const angulo3 = 90;

const total = angulo1 + angulo2 + angulo3;
if (total == 180) {
  console.log("true");
} else if (total !== 180 && total >= 0) {
  console.log("false");
} else if (angulo1 < 0 || angulo2 < 0 || angulo3 < 0) {
  console.log("Erro. Os angulos devem ser maiores que 0.");
}

//Exercício 6:

let peça = "RAINHA";

switch (peça.toLowerCase()) {
  case "rei":
    console.log("Pode se mover em qualquer direção.");
    break;

  case "rainha":
    console.log("Pode se mover em linha reta.");
    break;

  case "dama":
    console.log("Pode se mover em qualquer direção.");
    break;

  case "torre":
    console.log("Pode se mover em linha reta.");
    break;

  case "peão":
    console.log("Pode se mover somente para frente.");
    break;

  case "bispo":
    console.log("Pode se mover em uma linha reta diagonal.");
    break;

  case "cavalo":
    console.log(
      "Pode se mover horizontalmente ou verticalmente. Seu movimento forma um L."
    );
    break;

  default:
    console.log("Não é uma peça válida.");
}

//Exercício 7:

const nota = 99;

if (nota >= 90) {
  console.log("A");
} else if (nota > 80) {
  console.log("B");
} else if (nota >= 70) {
  console.log("C");
} else if (nota >= 60) {
  console.log("D");
} else if (nota >= 50) {
  console.log("E");
} else if (nota < 50) {
  console.log("F");
} else if (nota < 0 || nota > 100) {
  console.log("Nota inválida");
}

//Exercício 8:

const primeiroNumero = 10;
const segundoNumero = 8;
const terceiroNumero = 26;

if (
  primeiroNumero % 2 == 0 ||
  segundoNumero % 2 == 0 ||
  terceiroNumero % 2 == 0
) {
  console.log("true");
} else {
  console.log("false");
}

//Exercício 9:

if (
  primeiroNumero % 2 !== 0 ||
  segundoNumero % 2 !== 0 ||
  terceiroNumero % 2 !== 0
) {
  console.log("true");
} else {
  console.log("false");
}

//Exercício 10:

const valorDeCusto = 25;
const valorDeVenda = 50;
const valorRealCusto = valorDeCusto * 1.2;
const lucro = (valorDeVenda - valorRealCusto) * 1000;
if (valorDeCusto > 0 && valorDeVenda > 0) {
  console.log("O valor do lucro é: " + lucro);
} else {
  console.log("Insira um valor maior que 0.");
}

//Exercício 11:

const salarioBruto = 3000;
let descontoINSS = 0;
let salarioComINSS;

//INSS:

if (salarioBruto > 0 && salarioBruto <= 1556.94) {
  descontoINSS = salarioBruto * 0.08;
  salarioComINSS = salarioBruto - descontoINSS;
} else if (salarioBruto >= 1556.94 && salarioBruto <= 2594.92) {
  descontoINSS = salarioBruto * 0.09;
  salarioComINSS = salarioBruto - descontoINSS;
} else if (salarioBruto >= 2594.93 && salarioBruto <= 5189.92) {
  descontoINSS = salarioBruto * 0.11;
  salarioComINSS = salarioBruto - descontoINSS;
} else if (salarioBruto > 5189.92) {
  salarioComINSS = salarioBruto - 570.88;
}

let salarioComIR;
let salarioLiquido;

if (salarioComINSS > 0 && salarioComINSS <= 1903.98) {
  salarioLiquido = salarioComINSS;
} else if (salarioComINSS >= 1903.99 && salarioComINSS <= 2826.65) {
  salarioComIR = salarioComINSS * 0.075 - 142.8;
  salarioLiquido = salarioComINSS - salarioComIR;
} else if (salarioComINSS >= 2826.66 && salarioComINSS <= 3751.05) {
  salarioComIR = salarioComINSS * 0.15 - 354.8;
  salarioLiquido = salarioComINSS - salarioComIR;
} else if (salarioComINSS >= 3751.06 && salarioComINSS <= 4664.68) {
  salarioComIR = salarioComINSS * 0.225 - 636.13;
  salarioLiquido = salarioComINSS - salarioComIR;
} else if (salarioComINSS > 4664.68) {
  salarioComIR = salarioComINSS * 0.275 - 869.36;
  salarioLiquido = salarioComINSS - salarioComIR;
}

console.log(salarioLiquido);
