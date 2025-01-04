var currentValue = "";
var previousValue = "";
var clickedTwice = "";
var assignment = document.querySelectorAll("li");
var display = document.getElementById("display");
var equal = document.getElementById("equal");
var operators = document.querySelectorAll(".op");
var ans = "";
var op = "";
var count = 0;
var counter = 0;
var result = "";
var value = [];

//Get Current Items
assignment.forEach((e) => {
  e.addEventListener("click", function (e) {
    currentValue += e.target.innerText;
    display.value = "";
    display.value = currentValue;
  });
});

//

//To Know the Operator
operators.forEach((e) => {
  e.addEventListener("click", function (e) {
    // display.value = e.target.innerText;
    op = e.target.innerText;
    // clickedTwice = previousValue;
    clickedTwice = previousValue;
    previousValue = currentValue;
    currentValue = "";
    counter++;

    if (counter > 1) {
      if (op === "+") {
        previousValue = parseInt(clickedTwice) + parseInt(previousValue);
        console.log(previousValue);
        value.push(previousValue);

        // previousValue = result;
      } else if (op === "-") {
        previousValue = parseInt(clickedTwice) + parseInt(previousValue);
        console.log(previousValue);
        value.push(previousValue);

        // previousValue = result;
      } else if (op === "*") {
        previousValue = parseInt(clickedTwice) + parseInt(previousValue);
        console.log(previousValue);
        value.push(previousValue);

        // previousValue = result;
      } else if (op === "/") {
        previousValue = parseInt(clickedTwice) + parseInt(previousValue);
        console.log(previousValue);
        value.push(previousValue);

        // previousValue = clickedTwice;
      }
    }
  });
});

//when press Equal sign
equal.addEventListener("click", function (e) {
  // console.log(previousValue);
  // display.innerHTML = previousValue;
  if (count >= 1) {
    // clickedTwice = parseInt(previousValue);
    previousValue = ans;
  }

  console.log(previousValue);
  console.log(currentValue);

  if (op === "+") {
    ans = parseInt(previousValue) + parseInt(currentValue);
  } else if (op === "-") {
    ans = parseInt(previousValue) - parseInt(currentValue);
  } else if (op === "*") {
    ans = parseInt(previousValue) * parseInt(currentValue);
  } else if (op === "/") {
    ans = parseInt(previousValue) / parseInt(currentValue);
  }
  display.value = ans;
  currentValue = "";
  count++;
});

// if (op === "+" && count >= 1) {
//   console.log("pluss");
//   previousValue = parseInt(previousValue) + parseInt(currentValue);
//   currentValue = "";
// } else if (op === "-" && count >= 1) {
//   console.log("minus");
//   previousValue = parseInt(previousValue) - parseInt(currentValue);
//   currentValue = "";
// } else if (op === "*" && count >= 1) {
//   console.log("multiply");
//   previousValue = parseInt(previousValue) * parseInt(currentValue);
//   currentValue = "";
// } else if (op === "/" && count >= 1) {
//   console.log("divide");
//   previousValue = parseInt(previousValue) / parseInt(currentValue);
//   currentValue = "";
// }

// switch (op) {
//   case "+":
//     result = parseInt(clickedTwice) + parseInt(previousValue);
//     console.log(previousValue);
//     console.log(currentValue);
//     console.log(result);
//     break;
//   case "-":
//     result = parseInt(clickedTwice) - parseInt(previousValue);
//     console.log(result);
//     break;
//   case "*":
//     result = parseInt(clickedTwice) * parseInt(previousValue);
//     console.log(result);
//     break;
//   case "/":
//     result = parseInt(clickedTwice) / parseInt(previousValue);
//     console.log(result);
//     break;
//   default:
//     console.log("default");
// }
