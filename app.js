// DOM Elements
const valueEl = document.querySelector('.value');

const acEl = document.querySelector('.ac');
const pmEl = document.querySelector('.pm');
const percentEl = document.querySelector('.percent');

const additionEl = document.querySelector('.addition');
const subtractionEl = document.querySelector('.subtraction');
const multiplicationEl = document.querySelector('.multiplication');
const divisionEl = document.querySelector('.division');
const equalEl = document.querySelector('.equal');

const decimalEl = document.querySelector('.decimal');
const number0El = document.querySelector('.number-0');
const number1El = document.querySelector('.number-1');
const number2El = document.querySelector('.number-2');
const number3El = document.querySelector('.number-3');
const number4El = document.querySelector('.number-4');
const number5El = document.querySelector('.number-5');
const number6El = document.querySelector('.number-6');
const number7El = document.querySelector('.number-7');
const number8El = document.querySelector('.number-8');
const number9El = document.querySelector('.number-9');
const numberElArray = [
  number0El, number1El, number2El, number3El, number4El,
  number5El, number6El, number7El, number8El, number9El
];

// Variables
let valueStrInMemory = null;
let operatorInMemory = null;

// Functions
const getValueAsStr = () => valueEl.textContent;

const setStrAsValue = (valueStr) => {
  valueEl.textContent = valueStr;
};

const handleNumberClick = (numStr) => {
  const currentValueStr = getValueAsStr();
  if (currentValueStr === '0') {
    setStrAsValue(numStr);
  } else {
    setStrAsValue(currentValueStr + numStr);
  }
};

const handleOperatorClick = (operation) => {
  const currentValueStr = getValueAsStr();

  if (!valueStrInMemory) {
    valueStrInMemory = currentValueStr;
    operatorInMemory = operation;
    setStrAsValue('0');
    return;
  }
  valueStrInMemory = getValueAsStr();
  operatorInMemory = operation;
  setStrAsValue('0');
};

// Add Event Listeners to functions
acEl.addEventListener('click', () => {
  setStrAsValue('0');
  valueStrInMemory = null;
  operatorInMemory = null;
});

pmEl.addEventListener('click', () => {
  const currentValueStr = getValueAsStr();
  if (currentValueStr.startsWith('-')) {
    setStrAsValue(currentValueStr.substring(1));
  } else {
    setStrAsValue('-' + currentValueStr);
  }
});

percentEl.addEventListener('click', () => {
  const currentValueNum = parseFloat(getValueAsStr());
  const newValueNum = currentValueNum / 100;
  setStrAsValue(newValueNum.toString());
  valueStrInMemory = null;
  operatorInMemory = null;
});

// Add Event Listeners to operators
additionEl.addEventListener('click', () => {
  handleOperatorClick('addition');
});

subtractionEl.addEventListener('click', () => {
  handleOperatorClick('subtraction');
});

multiplicationEl.addEventListener('click', () => {
  handleOperatorClick('multiplication');
});

divisionEl.addEventListener('click', () => {
  handleOperatorClick('division');
});

// Modify equals button to display custom message
equalEl.addEventListener('click', () => {
  setStrAsValue("miss u loko");
  valueStrInMemory = null;
  operatorInMemory = null;
});

// Add Event Listeners to numbers and decimal
for (let i = 0; i < numberElArray.length; i++) {
  const numberEl = numberElArray[i];
  numberEl.addEventListener('click', () => {
    handleNumberClick(i.toString());
  });
}

decimalEl.addEventListener('click', () => {
  const currentValueStr = getValueAsStr();
  if (!currentValueStr.includes('.')) {
    setStrAsValue(currentValueStr + '.');
  }
});
