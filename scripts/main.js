// Elements
const tipForm = document.querySelector("#tipForm");
const amountPerPerson = document.querySelector("#amountPerPerson");
const totalPerPerson = document.querySelector("#totalPerPerson");
const tipStatus = document.querySelector("#tipStatus");
const resetButton = document.querySelector("#resetButton");

// Form values
let bill = 0;
let tip = 1;
let noOfPersons = 0;

const resetForm = () => {
  tipForm.reset();
  amountPerPerson.innerHTML = `$0.00`;
  totalPerPerson.innerHTML = `$0.00`;
};

const calculateAmounts = () => {
  const tipDecimal = numeral(tip / 100).format(`0.00`);
  const tipAmount = numeral(bill * tipDecimal);

  const tipPerPerson = numeral(tipAmount / noOfPersons).format(`0.00`);
  const totalPerPerson = numeral((bill + tipAmount) / noOfPersons).format(
    `0.00`
  );

  return {
    tipPerPerson,
    totalPerPerson,
  };
};

resetButton.addEventListener(`click`, (e) => {
  resetForm();
});
