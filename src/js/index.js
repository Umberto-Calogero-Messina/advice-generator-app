import '../scss/styles.scss';

const generatorElement = document.getElementById('button-generator');
const idElement = document.getElementById('span-id');
const textElement = document.getElementById('span-text');

const printAdvice = (id, advice) => {
  idElement.textContent = id;
  textElement.textContent = advice;
};

const getAdvice = async () => {
  try {
    const response = await fetch('https://api.adviceslip.com/advice');
    const data = await response.json();
    const id = data.slip.id;
    const advice = data.slip.advice;

    printAdvice(id, advice);
  } catch (error) {
    console.log(error);
  }
};

getAdvice();

generatorElement.addEventListener('click', getAdvice);
