//Exercício 6:

let peça = "RAINHA";

switch (peça.toLowerCase()) {
  case "rei":
    console.log("Pode se mover em qualquer direção.");
    break;

  case "rainha":
    console.log("Pode se mover em linha reta.");
    break;

  case "dama":
    console.log("Pode se mover em qualquer direção.");
    break;

  case "torre":
    console.log("Pode se mover em linha reta.");
    break;

  case "peão":
    console.log("Pode se mover somente para frente.");
    break;

  case "bispo":
    console.log("Pode se mover em uma linha reta diagonal.");
    break;

  case "cavalo":
    console.log(
      "Pode se mover horizontalmente ou verticalmente. Seu movimento forma um L."
    );
    break;

  default:
    console.log("Não é uma peça válida.");
}
