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
