const headerRef = document.getElementsByTagName(`h1`);
const header2Refs = document.getElementsByTagName(`h2`);
const p1Ref = document.getElementById(`paragraph1`);
const nameInput = document.getElementById(`name-input`);
const buttonRef = document.getElementById(`submit-btn`);

buttonRef.addEventListener("click", function () {
  const nameValue = nameInput.value;
  console.log(nameValue);
  header2Refs[0].textContent = `Welcome ${nameValue}`
});

// p1Ref.textContent = "test test test"

// Exercise 2
const redButton = document.getElementById('red-button');
const blueButton = document.getElementById('blue-button');
const header2Ref = document.getElementById(`header2`)

redButton.addEventListener("click", () => {
  console.log(`red`);
  header2Ref.classList.remove(`blue-header`)
  header2Ref.classList.add('red-header')
})

blueButton.addEventListener("click", () => {
  console.log(`blue`);
  header2Ref.classList.remove(`red-header`)
  header2Ref.classList.add('blue-header')
})

/// Example 3
const addButton = document.getElementById('add-button');
const subtractButton = document.getElementById('subtract-button');
const counterHeader = document.getElementById(`counter`)

let initialValue = 0;


addButton.addEventListener("click", () => {
  initialValue++;
  counterHeader.textContent = `${initialValue}`
})






