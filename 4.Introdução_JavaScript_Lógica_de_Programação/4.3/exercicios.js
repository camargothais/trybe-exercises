//Exercício 1:
let number = 10;
let mult = number;
for (let i = 1; i < number; i += 1) {
  mult *= i;
}
console.log(mult);
//Exercício 2:

function reverse(string) {
  let separator = string.split("");
  let reverse = separator.reverse();
  return reverse.join("");
}

console.log(reverse("thais"));

//Exercício 3:

function bigger(words) {
  let word = "";
  for (let i = 0; i < words.length; i += 1) {
    if (words[i].length > word.length) {
      word = words[i];
    }
  }
  return word;
}

function smaller(words) {
  let smallerWord = 54655646;
  let word = "";
  for (let i = 0; i < words.length; i += 1) {
    if (words[i].length < smallerWord) {
      smallerWord = words[i].length;
      word = words[i];
    }
  }
  return word;
}

console.log(bigger(["java", "javascript", "python", "html", "css"]));

//Exercício 4:

function primeNumber() {
  let biggerNumber = 50;
  let prime;
  let notPrime;

  for (let i = 1; i < biggerNumber; i += 1) {
    if (i % 2 === 0 || i % 3 === 0 || i % 5 === 0 || i % 7 === 0) {
      notPrime = i;
    } else {
      prime = i;
    }
  }
  return prime;
}

console.log(primeNumber());
