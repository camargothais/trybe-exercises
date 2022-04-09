let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//Exercício 1:

console.log(numbers);

//Exercício 2:
let soma = 0;

for (let i = 0; i < numbers.length; i += 1) {
  soma = soma + numbers[i];
}

console.log(soma);

//Exercício 3:

let media = soma / numbers.length;

console.log(media);

//Exercício 4:

if (media > 20) {
  console.log("valor maior que 20");
} else {
  console.log("valor menor ou igual a 20");
}

//Exercício 5:

let maiorNumero = 0;
for (let i = 0; i < numbers.length; i += 1) {
  if (numbers[i] > maiorNumero) {
    maiorNumero = numbers[i];
  }
}

console.log(maiorNumero);

//Exercício 6:

let numerosImpares = 0;
for (let i = 0; i < numbers.length; i += 1) {
  if (numbers[i] % 2 !== 0) {
    numerosImpares += 1;
  } else if (numerosImpares === 0) {
    console.log("nenhum valor ímpar encontrado");
  }
}
console.log(numerosImpares);

//Exercício 7:

let menorNumero = Math.max(...numbers);

for (let i = 0; i < numbers.length; i += 1) {
  if (numbers[i] < menorNumero) {
    menorNumero = numbers[i];
  }
}

console.log(menorNumero);

// Exercício 8:

let numeros = [];

for (let i = 1; i <= 25; i += 1) {
  numeros.push(i);
}

console.log(numeros);

//Exercício 9:

let divisao;

for (let i = 0; i < numeros.length; i += 1) {
  divisao = numeros[i] / 2;
  console.log(divisao);
}
