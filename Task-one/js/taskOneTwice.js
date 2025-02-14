(function () {
  var valueAll = document.querySelectorAll("[data-value]");
  var display = document.getElementById("display");
  var equal = document.getElementById("equal");
  var allClear = document.getElementById("ac");
  var del = document.getElementById("del");
  var answer = "";
  var input = [];
  var radiantToDeg = "";

  function add() {
    input.map(function (e, i) {
      if (e === "+") {
        answer = Number(input[i - 1]) + Number(input[i + 1]);
        input.splice(i - 1, 3, answer.toString());
      }
    });
  }

  function minus() {
    input.map(function (e, i) {
      if (e === "-") {
        answer = Number(input[i - 1]) - Number(input[i + 1]);
        input.splice(i - 1, 3, answer.toString());
      }
    });
  }

  function multiply() {
    input.map(function (e, i) {
      if (e === "*") {
        answer = Number(input[i - 1] * Number(input[i + 1]));
        input.splice(i - 1, 3, answer.toString());
      }
    });
  }

  function divide() {
    input.map(function (e, i) {
      if (e === "/") {
        divideNumber = input[i - 1];
        answer = Number(input[i - 1]) / Number(input[i + 1]);

        input.splice(i - 1, 3, answer.toString());
      }
    });
  }

  function brackets() {
    for (var b = 0; b <= input.length; b++) {
      if (input.indexOf("(") > 0) {
        var subinput = input.slice(input.indexOf("(") + 1, input.indexOf(")"));

        const size = subinput.length + 2;

        for (var i = 0; i < subinput.length; i++) {
          subinput.map((e, f) => {
            if (subinput[f] == "/") {
              answer = Number(subinput[f - 1]) / Number(subinput[f + 1]);
              subinput.splice(f - 1, 3, answer.toString());
              i = 0;
              b = 0;
            }
          });

          subinput.map((e, f) => {
            if (subinput[f] == "*") {
              answer = Number(subinput[f - 1]) * Number(subinput[f + 1]);
              subinput.splice(f - 1, 3, answer.toString());
              i = 0;
              b = 0;
            }
          });

          subinput.map((e, f) => {
            if (subinput[f] == "-") {
              answer = Number(subinput[f - 1]) - Number(subinput[f + 1]);
              subinput.splice(f - 1, 3, answer.toString());
              i = 0;
              b = 0;
            }
          });

          subinput.map((e, f) => {
            if (subinput[f] == "+") {
              answer = Number(subinput[f - 1]) + Number(subinput[f + 1]);
              subinput.splice(f - 1, 3, answer.toString());
              i = 0;
              b = 0;
            }
          });
        }

        var findBeforeValue = input.indexOf("(") - 1;
        if (input[findBeforeValue] == "") {
          findBeforeValue = input.indexOf("(") - 2;
        }
        var beforeIndex = input[findBeforeValue];
        if (
          beforeIndex !== "+" &&
          beforeIndex !== "-" &&
          beforeIndex !== "*" &&
          beforeIndex !== "/"
        ) {
          subinput *= input[findBeforeValue];
        }

        input.splice(input.indexOf("(") - 1, size + 2, subinput.toString());
      }
    }
  }

  // Run on Every CLick
  valueAll.forEach(function (e) {
    e.addEventListener("click", function () {
      display.value += e.dataset.value;

      input = display.value.split(/([-+*/()])/);

      // sin cos tan log
      input.map(function (e, i) {
        //For  Sin
        var isSinPresent = input[i].indexOf("sin");
        if (isSinPresent != -1) {
          var split = e.split("sin");
          radiantToDeg = split[1];
          // radiantToDeg = (Math.PI / 180) * split[1];
          answer = Math.sin(radiantToDeg);
          if (split[0] != "") {
            answer = answer * split[0];
          }
          var sinValue = Number(answer).toFixed(4);
          console.log(sinValue);
          input.splice(i, 2, sinValue.toString());
        }

        // For Cos
        var isCosPresent = input[i].indexOf("cos");
        if (isCosPresent != -1) {
          console.log(e);
          var split = e.split("cos");
          radiantToDeg = split[1];

          // radiantToDeg = (Math.PI / 180) * split[1];
          answer = Math.cos(radiantToDeg);
          console.log(answer);
          if (split[0] != "") {
            answer = answer * split[0];
          }
          var cosValue = Number(answer).toFixed(4);
          input.splice(i, 2, cosValue.toString());
        }

        // For Tan
        var isCosPresent = input[i].indexOf("tan");
        if (isCosPresent != -1) {
          console.log(e);
          var split = e.split("tan");

          radiantToDeg = (Math.PI / 180) * split[1];
          answer = Math.tan(radiantToDeg);

          console.log(answer);
          if (split[0] != "") {
            answer = answer * split[0];
          }
          var tanValue = Number(answer).toFixed(4);
          input.splice(i, 2, tanValue.toString());
        }

        // For Log
        var isCosPresent = input[i].indexOf("log");
        if (isCosPresent != -1) {
          console.log(e);
          var split = e.split("log");

          answer = Math.log10(split[1]);
          console.log(answer);
          if (split[0] != "") {
            answer = answer * split[0];
          }
          var sinValue = Number(answer).toFixed(4);
          input.splice(i, 2, sinValue.toString());
        }
      });

      // For Bracket
      brackets();

      //  For Operation
      for (var i = 0; i < input.length; i++) {
        if (input[i] == "/") {
          divide();
          i = 0;
        } else if (input[i] == "*") {
          multiply();
          i = 0;
        } else if (input[i] == "-") {
          minus();
          i = 0;
        } else if (input[i] == "+") {
          add();
          i = 0;
        }
      }

      console.log(input, "main input");
    });
  });

  // Equal Click
  equal.addEventListener("click", function () {
    input.map(function (e, i) {
      display.value = input;

      if (e == "NaN" || e == "Infinity" || e == "-0") {
        console.log("yes");
        answer = "Error";
        display.value = answer;
      }
    });
  });

  // All CLear
  allClear.addEventListener("click", function () {
    input.splice(0, input.length);
    display.value = input;
  });

  // Delete One Value
  del.addEventListener("click", function () {
    var currentValue = display.value;
    var slicedCurrentValue = currentValue.slice(0, currentValue.length - 1);
    display.value = slicedCurrentValue;
  });
})();

//

//

// for (var i = 1; i <= input.length; i += 2) {
//   var number = Number(input[i + 1]);
//   operator = input[i];
//   if (operator === "+" && count <= 2) {
//     answer += number;
//     count++;
//   } else if (operator === "-" && count <= 2) {
//     answer -= number;
//     count++;
//   } else if (operator === "*" && count <= 2) {
//     answer *= number;
//     count++;
//   } else if (operator === "/" && count <= 2) {
//     answer /= number;
//     count++;
//   }

//   count = 0;
// }

//

// for (var i = 0; i <= input.length; i++) {
//   if (input[i] === "/") {
//     var numberOne = input[i - 1];
//     var numberTwo = input[i + 1];
//     var r = Number(numberOne) / Number(numberTwo);
//     input.splice(i - 1, 3, r.toString());
//   }
// }

// for (var i = 0; i <= input.length; i++) {
//   if (input[i] === "*") {
//     var n = input[i - 1];
//     var nT = input[i + 1];
//     var re = Number(n) * Number(nT);
//     input.splice(i - 1, 3, re.toString());
//   }
// }

// for (var i = 0; i <= input.length; i++) {
//   if (input[i] === "+") {
//     var nu = input[i - 1];
//     var nuT = input[i + 1];
//     var res = Number(nu) + Number(nuT);
//     input.splice(i - 1, 3, res.toString());
//   }
// }

// for (var i = 0; i <= input.length; i++) {
//   if (input[i] === "-") {
//     var numOn = input[i - 1];
//     var numTo = input[i + 1];
//     var resu = Number(numOn) - Number(numTo);
//     input.splice(i - 1, 3, resu.toString());
//   }
// }

// for (var i = 1; i <= input.length; i += 2) {
//   var number = Number(input[i + 1]);
//   if (input[i] === "+") {
//     answer += number;
//   } else if (input[i] === "-") {
//     answer -= number;
//   }
// }

// else if (input[i] === "*") {
//   answer = Number(input[i - 1] * Number(input[i + 1]));
//   input.splice(i - 1, 3, answer.toString());

//   //
// } else if (input[i] === "+") {
//   answer = Number(input[i - 1]) + Number(input[i + 1]);
//   input.splice(i - 1, 3, answer.toString());

//   //
// } else if (input[i] === "-") {
//   answer = Number(input[i - 1]) - Number(input[i + 1]);
//   input.splice(i - 1, 3, answer.toString());

//   //
// }

// input.map(function (e, i) {
//   if (input[0] == "") {
//     input.splice(0, 3, input[2] * -1);
//   }
// });
