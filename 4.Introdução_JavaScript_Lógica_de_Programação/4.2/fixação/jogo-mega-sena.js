//Fazer o jogo:
let jogo = [25, 55, 15, 48, 31, 5];

//Sorteio da loteria da Caixa:
let numerosLoteria = [57, 42, 35, 5, 19, 21];

//Conferir o resultado:
let acertos = 0;

for (let i = 0; i < jogo.length; i++) {
  for (let i2 = 0; i2 < numerosLoteria.length; i2++) {
    if (jogo[i] === numerosLoteria[i2]) {
      acertos++;
    }
  }
}

console.log(acertos);
//Se der bom, comemorar!
