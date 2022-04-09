let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//Exercício 1:

// for (let i = 1; i < numbers.length; i += 1) {
//   for (let i2 = 0; i2 < i; i2 += 1) {
//     if (numbers[i] < numbers[i2]) {
//       let position = numbers[i];
//       numbers[i] = numbers[i2];
//       numbers[i2] = position;
//     }
//   }
// }

// console.log(numbers);

//Exercício 2:

// for (let i = 1; i < numbers.length; i += 1) {
//   for (let i2 = 0; i2 < i; i2 += 1) {
//     if (numbers[i] > numbers[i2]) {
//       let position = numbers[i];
//       numbers[i] = numbers[i2];
//       numbers[i2] = position;
//     }
//   }
// }

// console.log(numbers);

//Exercício 3:

let newNumbers = [];

for (i = 0; i < numbers.length; i += 1) {
  if (i == numbers.length - 1) {
    let mult = numbers[i] * 2;
    newNumbers.push(mult);
  } else {
    mult = numbers[i] * numbers[i + 1];
    newNumbers.push(mult);
  }
}

console.log(newNumbers);
