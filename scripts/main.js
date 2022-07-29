const tipForm = document.querySelector("#tipForm");
const amountPerPerson = document.querySelector("#amountPerPerson");
const totalPerPerson = document.querySelector("#totalPerPerson");
const tipStatus = document.querySelector("#tipStatus");
const resetButton = document.querySelector("#resetButton");

const resetForm = () => {
  tipForm.reset();
  amountPerPerson.innerHTML = `$0.00`;
  totalPerPerson.innerHTML = `$0.00`;
};

tipForm.addEventListener("submit", (e) => {
  e.preventDefault();
});

resetButton.addEventListener("click", (e) => {
  resetForm();
});
