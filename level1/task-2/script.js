function appendToResult(value) {
  document.getElementById("result").value += value;
}

function calculate() {
  var result = document.getElementById("result").value;
  var answer = eval(result);
  document.getElementById("result").value = answer;
}

function clearResult() {
  document.getElementById("result").value = "";
}

// function evaluateExpression(expression) {
//   try {
//     // Replace 'x' with '*' for multiplication
//     expression = expression.replace(/x/g, '*');
//     // Use the built-in JavaScript 'Function' constructor to evaluate the expression
//     var evaluation = new Function('return ' + expression);
//     var answer = evaluation();
//     return answer;
//   } catch (error) {
//     return 'Error';
//   }
// }
