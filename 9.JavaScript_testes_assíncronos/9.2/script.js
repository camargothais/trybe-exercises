// apiScript.js
const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = async () => {
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };

  const result = await fetch(API_URL, myObject)
    .then(response => response.json())
    .then(data => data)
    .catch(error => `Algo deu errado /n${error}`);

    const jokeContainer = document.querySelector('#jokeContainer')
    const jokeText = document.createTextNode(result.joke)
    jokeContainer.appendChild(jokeText)

  console.log(result.joke)
  };


window.onload = () => fetchJoke();