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
