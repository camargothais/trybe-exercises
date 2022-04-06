// If e else:

const notaPessoa = 63;

if (notaPessoa >= 80) {
  console.log("Parabéns, você foi aprovada(o)!");
} else if (notaPessoa < 80 && notaPessoa >= 60) {
  console.log("Você está na nossa lista de espera");
} else {
  console.log("Você foi reprovada(o)");
}

//Operador AND (&&):

const currentHour = 11;
let message = "";

if (currentHour >= 22) {
  message = "Não deveríamos comer nada, é hora de dormir";
  console.log(message);
} else if (currentHour >= 18 && currentHour < 22) {
  message = "Rango da noite, vamos jantar :D";
  console.log(message);
} else if (currentHour >= 14 && currentHour < 18) {
  message = "Vamos fazer um bolo pro café da tarde?";
  console.log(message);
} else if (currentHour >= 11 && currentHour <= 14) {
  message = "Hora do almoço!!!";
  console.log(message);
} else if (currentHour >= 4 && currentHour <= 11) {
  message = "Hmmm, cheiro de café recém passado";
  console.log(message);
}

console.log(message);

//Operador OR (||):
let weekDay = "quarta-feira";

if (
  weekDay === "segunda-feira" ||
  weekDay === "terça-feira" ||
  weekDay === "quarta-feira" ||
  weekDay === "quinta-feira" ||
  weekDay === "sexta-feira"
) {
  console.log("Oba, mais um dia de aprendizado na Trybe >:D");
} else if (weekDay === "sábado" || weekDay === "domingo") {
  console.log("FINALMENTE, descanso merecido UwU");
}
