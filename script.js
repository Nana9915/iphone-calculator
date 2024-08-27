let clear = document.querySelector(".clear");
let numbers = document.querySelectorAll(".numbers");
let equalBtn = document.querySelector(".equal");
let result = document.querySelector(".result span");
let negative = document.querySelector(".negative");
let signs = document.querySelectorAll(".signs");

let firstValue = "";
let isfirstValue = false;
let secondValue = "";
let issecondValue = false;
let sign = "";
let resultValue = 0;
for (let i = 0; i < numbers.length; i++) {
  numbers[i].addEventListener("click", (e) => {
    let atr = e.target.getAttribute("value");
    if (isfirstValue === false) {
      getFirstvalue(atr);
    } else {
      getSecondValue(atr);
    }
  });
}
function getFirstvalue(el) {
  result.innerHTML = "";
  firstValue += el;
  result.innerHTML = firstValue;
}

function getSecondValue(el) {
  console.log("hi");
  if (firstValue !== "" && sign !== "") {
    secondValue += el;
    result.innerHTML = secondValue;
    issecondValue = true;
  }
}

function getSign() {
  for (let i = 0; i < signs.length; i++) {
    signs[i].addEventListener("click", (e) => {
      sign = e.target.getAttribute("value");
      isfirstValue = true;
    });
  }
}
getSign();

equalBtn.addEventListener("click", () => {
  if (firstValue !== "" && secondValue !== "") {
    if (sign === "+") {
      const value1 = Number(firstValue);
      const value2 = Number(secondValue);
      resultValue = value1 + value2;
    } else if (sign === "-") {
      resultValue = firstValue - secondValue;
    } else if (sign === "x") {
      resultValue = firstValue * secondValue;
    } else if (sign === "/") {
      resultValue = firstValue / secondValue;
    }
    result.innerHTML = resultValue;
    firstValue = resultValue;
    secondValue = "";
    issecondValue = false;
  }
});
negative.addEventListener("click", () => {
  if (isfirstValue !== "") {
    firstValue = -firstValue;
    result.innerHTML = firstValue;
  } else if (firstValue && secondValue !== "") {
    secondValue = -secondValue;
    result.innerHTML = secondValue;
  }
});
clear.addEventListener("click", () => {
  result.innerHTML = 0;

  firstValue = "";
  isfirstValue = false;
  secondValue = "";
  issecondValue = false;
  sign = "";
  resultValue = 0;
});
