const textElement = (text, element) => {
  let tittle = document.querySelector(element);
  tittle.innerHTML = text;
};

const maxNum = 100;
let count = 1;
const randomNums = [];

const generateSecretNumber = () => {
  let num = Math.floor(Math.random() * maxNum);
  if (randomNums.length === maxNum) {
    textElement("Let's start over", 'h1');
    textElement('All possible numbers have already been drawn', 'p');
    randomNums = [];
  } else {
    if (randomNums.includes(num)) {
      return generateSecretNumber();
    }
    randomNums.push(num);
    return num;
  }
};

let secretNumber = generateSecretNumber();

const verifyAttempt = () => {
  let userNumber = parseInt(document.getElementById('userValue').value);
  if (userNumber === secretNumber) {
    textElement('You guessed it!', 'h1');
    textElement(`You did it in ${count} ${count > 1 ? 'tries' : 'try'}`, 'p');
    document.getElementById('restart').removeAttribute('disabled');
  } else {
    if (secretNumber < userNumber) {
      textElement('The secret number is less', 'p');
    } else {
      textElement('The secret number is greater', 'p');
    };
    count++
    cleanInput();
  };
};

const cleanInput = () => {
  document.querySelector('#userValue').value = '';
};

const initialConditions = () => {
  textElement('Secret number GAME', 'h1');
  textElement(`Indicates a number from 1 to ${maxNum}`, 'p');
  cleanInput();
  secretNumber = generateSecretNumber();
  count = 1;
  document.getElementById('restart').setAttribute('disabled', true);
};

const handleRestart = () => {
  initialConditions();
};

initialConditions();