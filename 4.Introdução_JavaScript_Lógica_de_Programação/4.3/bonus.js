//Exercício 1:

function square(number) {
  let lines = "*";
  let collumn = "*";
  for (let i = 1; i <= number; i += 1) {
    console.log(lines + collumn.repeat(number - 1));
  }
}

console.log(square(5));

//Exercício 2:

function rightTriangle(number) {
  let lines = "*";
  let collumn = "*".repeat(number);
  for (let i = 1; i <= number; i += 1) {
    console.log(lines);
    for (let i2 = 1; i2 <= number; i2 += 1) {
      console.log(collumn - 1);
    }
  }
}

console.log(rightTriangle(5));
