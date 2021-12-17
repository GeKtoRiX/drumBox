// amountOfDrums
var numOfKeyDrums = document.querySelectorAll(".drum-kit .drum").length;
// changingDrumsBorderColor
for (let i = 0; i < numOfKeyDrums; i++) {
  document.querySelectorAll(".drum-kit .drum")[i].addEventListener("click", () => {
    document.querySelectorAll(".drum-kit .drum")[i].style.border = "10px solid #FFC93C";
    document.querySelectorAll(".drum-kit .drum")[i].style.transition = "all .6s";
  } );
}
// calculatorVariables
var form = document.getElementById('form');
var num1 = document.getElementById('num1');
var operator = document.getElementById('operator');
var num2 = document.getElementById('num2');
// simpleCalculator(+-*/)
form.addEventListener('submit', (stdFunc2) => {
  stdFunc2.preventDefault();
  if (operator.value === "+") {
    calculator(num1.value, num2.value, add);
  } else if (operator.value === "-") {
    calculator(num1.value, num2.value, subtract);
  } else if (operator.value === "*") {
    calculator(num1.value, num2.value, multiply);
  } else if (operator.value === "/") {
    calculator(num1.value, num2.value, divide);
  } else {
    calculator(0, 0, add);
  }
});
function calculator(num1, num2, operator) {
  console.log(num1, num2);
  document.querySelector(".answer").innerHTML = operator(num1, num2);
}
function add(num1, num2) {
  return parseInt(num1) + parseInt(num2);
}
function subtract(num1, num2) {
  if (parseInt(num1) <= 0 || parseInt(num2) <= 0)
    return 0;
  return parseInt(num1) - parseInt(num2);
}
function multiply(num1, num2) {
  return parseInt(num1) * parseInt(num2);
}
function divide(num1, num2) {
  return parseInt(num1) / parseInt(num2);
}

// showCalculator
document.querySelector(".drums-title-img").addEventListener("click", () =>{
  document.querySelector(".calculator").style.display ="inline-block";});

  document.querySelector(".drums-title-img").addEventListener("dblclick", () =>{
    document.querySelector(".calculator").style.display ="none";});
