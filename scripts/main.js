/*
Sections:
    - Config
    - Elements
    - Form Elements
    - Form Values
    - Functions
    - Event Listeners
*/

// Config
const logValues = false;

// Elements
const tipForm = document.querySelector("#tipForm");
const amountPerPerson = document.querySelector("#amountPerPerson");
const totalAmountPerPerson = document.querySelector("#totalAmountPerPerson");
const tipStatus = document.querySelector("#tipStatus");
const resetButton = document.querySelector("#resetButton");

// Form Elements
const billInput = document.querySelector("input[name='bill']");
const tipInputs = document.querySelectorAll("input[name='tip']");
const tipCustomInput = document.querySelector("input[name='tip-custom']");
const numberOfPersonsInput = document.querySelector(
  "input[name=number-of-people]"
);

// Form values
const format = `0.00`;
let bill = 0;
let tip = 0;
let numberOfPersons = 0;

// Functions
const resetForm = () => {
  if (logValues) {
    console.log(`== Reset Form ==`);
  }

  tipForm.reset();
  printAmounts({ tipPerPerson: 0, totalPerPerson: 0 });
};

const calculateAmounts = () => {
  if (logValues) {
    console.log(`== Calculate Amounts ==`);
  }

  if (bill <= 0) {
    bill = 0;
    return;
  }

  if (numberOfPersons <= 0) {
    numberOfPersons = 0;
    return;
  }

  if (logValues) {
    console.log(`Bill: ${bill}`);
    console.log(`Tip: ${tip}`);
    console.log(`Number of Persons: ${numberOfPersons}`);
    console.log(`-----`);
  }

  const tipDecimal = tip / 100;
  if (logValues) {
    console.log(`TIP Decimal: `, tipDecimal);
  }
  const tipAmount = bill * tipDecimal;
  if (logValues) {
    console.log(`TIP Amount: `, tipAmount);
  }

  const tipPerPerson = tipAmount / numberOfPersons;
  if (logValues) {
    console.log(`TIP Per Person: `, tipPerPerson);
  }

  const totalAmount = Number(bill) + Number(tipAmount);
  if (logValues) {
    console.log(`TOTAL Amount: `, totalAmount);
  }

  const totalPerPerson = totalAmount / numberOfPersons;
  if (logValues) {
    console.log(`TOTAL Per Person: `, totalPerPerson);
  }

  printAmounts({ tipPerPerson, totalPerPerson });
};

const printAmounts = ({ tipPerPerson, totalPerPerson }) => {
  if (logValues) {
    console.log(`== Print Amounts ==`);
    console.log(`Tip Per Person: `, tipPerPerson);
    console.log(`Total Per Person: `, totalPerPerson);
  }

  amountPerPerson.innerHTML = "$" + numeral(tipPerPerson).format(format);
  totalAmountPerPerson.innerHTML = "$" + numeral(totalPerPerson).format(format);
};

// Event Listeners
printAmounts({ tipPerPerson: 0, totalPerPerson: 0 });

billInput.addEventListener(`input`, (e) => {
  bill = e.target.value;
  calculateAmounts();
});

tipInputs.forEach((tipInput) => {
  tipInput.addEventListener(`click`, (e) => {
    tip = e.target.value;
    calculateAmounts();
  });
});

tipCustomInput.addEventListener(`input`, (e) => {
  tip = e.target.value;
  calculateAmounts();
});

numberOfPersonsInput.addEventListener(`input`, (e) => {
  numberOfPersons = e.target.value;
  calculateAmounts();
});

resetButton.addEventListener(`click`, (e) => {
  resetForm();
});
