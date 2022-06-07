const API_URL = 'https://api.coincap.io/v2/assets';

const fetchCript = async () => {
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };
  const result = await fetch(API_URL, myObject)
  .then(response => response.json())
  .then(data => data)
  .catch(error => `Algo deu errado /n${error}`)

  const criptoContainer = document.querySelector('#criptoContainer');
  for (let i = 0; i < 10; i += 1) {
    const newElement = document.createElement('li')
    newElement.innerHTML= `${result.data[i].name} (${result.data[i].symbol}): ${result.data[i].marketCapUsd}`;
    criptoContainer.appendChild(newElement)
  }


}

window.onload = () => fetchCript()