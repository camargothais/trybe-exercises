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
