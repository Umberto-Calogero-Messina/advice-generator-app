// El styles lo importamos aquí, ya se carga después al compilar todo
import '../scss/styles.scss';

const generatorElement = document.getElementById('button-generator');
const idElement = document.getElementById('span-id');
const textElement = document.getElementById('span-text');

const generateTextFunction = async url => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    idElement.textContent = data.slip.id;
    textElement.textContent = `"${data.slip.advice}"`;
  } catch (error) {
    console.log(error);
  }
};

generateTextFunction('https://api.adviceslip.com/advice');

generatorElement.addEventListener('click', () => generateTextFunction('https://api.adviceslip.com/advice'));
