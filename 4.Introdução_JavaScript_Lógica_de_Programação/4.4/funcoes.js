//Exercício 1:

function verificaPalindrome(palavra) {
  let letras = palavra.split("");
  let letrasInvertidas = letras.reverse();
  let novaPalavra = letrasInvertidas.join("");

  if (palavra === novaPalavra) {
    return true;
  } else {
    return false;
  }
}

console.log(verificaPalindrome("arara"));

//Exercício 2:

function maiorValor(array) {
  let maiorValor = 0;
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] > maiorValor) {
      maiorValor = array[i];
    } else {
      maiorValor;
    }
  }
  return array.indexOf(maiorValor);
}

console.log(maiorValor([2, 3, 6, 7, 10, 1]));

//Exercício 3:

function menorValor(array) {
  let menorValor = Math.max(...array);
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] < menorValor) {
      menorValor = array[i];
    } else {
      menorValor;
    }
  }
  return array.indexOf(menorValor);
}

console.log(menorValor([2, 4, 6, 7, 10, 0, -3]));

//Exercício 4:

function maiorNome(nomes) {
  let maiorNome = [];

  for (let i = 0; i < nomes.length; i += 1) {
    let caracteres = nomes[i].split("");
    if (caracteres.length > maiorNome.length) {
      maiorNome = caracteres;
    } else {
      maiorNome;
    }
  }
  return maiorNome.join("");
}

console.log(
  maiorNome(["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"])
);

//Exercício 5:

function repeticoes(arrayNumeros) {
  let numOrdenados = arrayNumeros.sort();
  for (let i = 0; i < numOrdenados.length; i += 1) {}
}

console.log(repeticoes([2, 3, 2, 5, 8, 2, 3]));

//Exercício 6:

function somaNumeros(numero) {
  let inicio = 0;
  for (let i = 1; i <= numero; i += 1) {
    inicio = inicio + i;
  }

  return inicio;
}

console.log(somaNumeros(5));
