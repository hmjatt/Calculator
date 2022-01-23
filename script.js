const buttons = document.querySelectorAll("button");
const screen = document.getElementById("screen-div");




buttons.forEach(function(elem) {
    elem.addEventListener("click", function populate() {
        screen.style.flexwrap = "wrap";
        // console.log(elem.innerHTML);
        screen.innerHTML += elem.innerHTML;
    });
});

const add = function(a, b) {
    return a + b;
};

console.log("add:" + add(2, 4));

const subtract = function(a, b) {
    return a - b;
};

console.log("subtract:" + subtract(4, 2));

const sum = function(sumArgs) {

  let sum;

  if(sumArgs.length == 0) {
      sum = 0;
  } else {
    sum = sumArgs.reduce((prev, next) => {
      return prev + next;
    });
  }

    return sum;
};

console.log("sum:" + sum([1, 3, 5, 7, 9]));

const multiply = function(mulArgs) {

  let mul = mulArgs.reduce((prev, next) => {
    return prev * next;
  });
    return mul;
};


console.log("mul:" + multiply([2, 4]), "mul1:" + multiply([2, 4, 6, 8, 10, 12, 14]));

const power = function(a, b) {
    return a ** b
};

console.log("power:" + power(4, 3))

const factorial = function(num) {
    if (num === 0 || num === 1) {
        return 1;
    }
    for (var i = num - 1; i >= 1; i--) {
        num *= i;
    }
    return num;
};


console.log("fac:" + factorial(10));


function operate(operator, num1, num2) {
    if(operator == "+"){
        return ("add:" + add(num1, num2));
    }
}

console.log(operate("+", 4, 4));