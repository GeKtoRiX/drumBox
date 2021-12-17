// amountOfDrums
var numOfKeyDrums = document.querySelectorAll(".drum-kit .drum").length;
// changingDrumsBorderColor
for (let i = 0; i < numOfKeyDrums; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    let keyDrum = "";
    switch (this.innerHTML) {

      case "q":
        this.style.border = "10px solid #FFC93C";
        this.style.transition = "all .6s";
        keyDrum = new Audio("sounds/crash.mp3");
        keyDrum.play();
        keyDrum.onended = () => {
          this.style.border = "10px solid white";
          this.style.transition = "all .6s";
        }
        break;
      case "w":
        this.style.border = "10px solid #FFC93C";
        this.style.transition = "all .6s";
        keyDrum = new Audio("sounds/snare.mp3");
        keyDrum.play();
        keyDrum.onended = () => {
          this.style.border = "10px solid white";
          this.style.transition = "all .6s";
        }
        break;
      case "e":
        this.style.border = "10px solid #FFC93C";
        this.style.transition = "all .6s";
        keyDrum = new Audio("sounds/tom-1.mp3");
        keyDrum.play();
        keyDrum.onended = () => {
          this.style.border = "10px solid white";
          this.style.transition = "all .6s";
        }
        break;
      case "r":
        this.style.border = "10px solid #FFC93C";
        this.style.transition = "all .6s";
        keyDrum = new Audio("sounds/tom-2.mp3");
        keyDrum.play();
        keyDrum.onended = () => {
          this.style.border = "10px solid white";
          this.style.transition = "all .6s";
        }
        break;
      case "a":
        this.style.border = "10px solid #FFC93C";
        this.style.transition = "all .6s";
        keyDrum = new Audio("sounds/tom-3.mp3");
        keyDrum.play();
        keyDrum.onended = () => {
          this.style.border = "10px solid white";
          this.style.transition = "all .6s";
        }
        break;
      case "s":
        this.style.border = "10px solid #FFC93C";
        this.style.transition = "all .6s";
        keyDrum = new Audio("sounds/tom-4.mp3");
        keyDrum.play();
        keyDrum.onended = () => {
          this.style.border = "10px solid white";
          this.style.transition = "all .6s";
        }
        break;
      case "d":
        this.style.border = "10px solid #FFC93C";
        this.style.transition = "all .6s";
        keyDrum = new Audio("sounds/kick-bass.mp3");
        keyDrum.play();
        keyDrum.onended = () => {
          this.style.border = "10px solid white";
          this.style.transition = "all .6s";
        }
        break;
    }
  });
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
document.querySelector(".drums-title-img").addEventListener("click", () => {
  document.querySelector(".calculator").style.display = "inline-block";
});
//hideCalculator
document.querySelector(".drums-title-img").addEventListener("dblclick", () => {
  document.querySelector(".calculator").style.display = "none";
});
