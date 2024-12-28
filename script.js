const button1 = document.getElementById("1");
const button2 = document.getElementById("2");
const button3 = document.getElementById("3");
const button4 = document.getElementById("4");
const button5 = document.getElementById("5");
const button6 = document.getElementById("6");
const button7 = document.getElementById("7");
const button8 = document.getElementById("8");
const button9 = document.getElementById("9");
const button0 = document.getElementById("0");
const buttonDecimal = document.getElementById(".");
const buttonEquals = document.getElementById("=");
const buttonDivide = document.getElementById("/");
const buttonMultiply = document.getElementById("*");
const buttonMinus = document.getElementById("-");
const buttonPlus = document.getElementById("+");

const input = document.getElementById("input");
const clear = document.getElementById("clear");
const result = document.getElementById("result");

let multiply = (num1, num2) => num1 * num2;
let divide = (num1, num2) => num1 / num2;
let add = (num1, num2) => num1 + num2;
let subtract = (num1, num2) => num1 - num2;

let operate = (num1, num2, operator) => {
  if (operator == "*") return multiply(num1, num2);
  if (operator == "/") return divide(num1, num2);
  if (operator == "+") return add(num1, num2);
  if (operator == "-") return subtract(num1, num2);
};

for (let i = 0; i < 10; i++) {
  const button = document.getElementById(i.toString());
  button.addEventListener("click", () => {
    input.innerHTML += i;
  });
}

clear.addEventListener("click", () => {
  input.innerHTML = "";
  result.innerHTML = "";
});

buttonDivide.addEventListener("click", () => {
  input.innerHTML += "/";
});
buttonMultiply.addEventListener("click", () => {
  input.innerHTML += "*";
});
buttonMinus.addEventListener("click", () => {
  input.innerHTML += "-";
});
buttonPlus.addEventListener("click", () => {
  input.innerHTML += "+";
});

buttonEquals.addEventListener("click", () => {
  let num1 = "";
  let num2 = "";
  let operator = "";
  let text = input.innerHTML;
  for (let i = 0; i < text.length; i++) {
    if (["/", "*", "+", "-"].includes(text.charAt(i))) operator = text.charAt(i);
    else if (operator == "") num1 += text.charAt(i);
    else if (operator != "") num2 += text.charAt(i);
  }
  num1 = parseInt(num1, 10);
  num2 = parseInt(num2, 10);
  let operationResult = operate(num1, num2, operator);
  result.innerHTML = operationResult;
});
