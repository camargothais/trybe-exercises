const newRegister = (fullName) => {
  const name = fullName.toLowerCase().split(" ");
  let email = name[0];
  for (let i = 1; i < name.length; i += 1) {
    email += `_${name[i]}`;
  }
  email += `@trybe.com`;
  return { fullName, email };
};

const newEmployees = () => {
  const employees = {
    id1: newRegister("Pedro Guerra"),
    // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: newRegister("Luiza Drumond"),
    // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: newRegister("Carla Paiva"),
    // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  };
  return employees;
};

console.log(newEmployees());

const numberGenerator = (bet) => {
  const min = Math.ceil(1);
  const max = Math.floor(5);
  const number = Math.floor(Math.random() * (max - min)) + min;
  if (bet === number) {
    return "Parabéns você ganhou";
  } else {
    return "Tente novamente";
  }
};

const RIGHT_ANSWERS = ["A", "C", "B", "D", "A", "A", "D", "A", "D", "C"];
const STUDENT_ANSWERS = ["A", "N.A", "B", "D", "A", "C", "N.A", "A", "D", "B"];

const test = (answer, studentAnswer) => {};

console.log(test(RIGHT_ANSWERS, STUDENT_ANSWERS));
