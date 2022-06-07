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

//IR:

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
