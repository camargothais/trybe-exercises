function botaoEnviar(event) {
  event.preventDefault();
}

window.onload = function () {
  const botaoEnviar = document.querySelector("#botaoEnviar");
  botaoEnviar.addEventListener("click", botaoEnviar);
};
