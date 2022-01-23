const numbers = document.querySelectorAll(".num");
const screen = document.getElementById("screen-div");
const operator = document.querySelectorAll(".operator");
const equals = document.getElementById("equals");
const clear = document.querySelectorAll(".clear");



let nums = [];
let argNumber;
let opr
let splitUsingOp;
let joinNums;



numbers.forEach(function(elem) {
    elem.addEventListener("click", function populate() {
      
        let ele = elem.innerHTML;
        //convert input to Array

        argNumber = ele;
        
        nums.push(argNumber);
        screen.innerHTML += argNumber;
        joinNums = nums.join("");
        // console.log(argNumber, joinNums);
    });
});



operator.forEach(function(op) {
    op.addEventListener("click", function evaluate() {

        

        opr = op.innerHTML;

     


        nums.push(opr);


        screen.innerHTML = nums.join("")
        // console.log(nums, opr);
    });
});

equals.addEventListener("click", function calculates() {
    //    split using oerator
       splitUsingOp = joinNums.split(opr);
       operate();

    //    console.log(splitUsingOp, opr);
});


clear.forEach(function(clears) {
    clears.addEventListener("click", function clearIt() {
        screen.innerHTML = "";
        nums = [];
        argNumber = 0;
        opr = "";
        splitUsingOp = 0;;
        joinNums = 0;;
        sum = 0;

    });
});






function operate(operator, num1, num2) {

    operator = opr;
    num1 = parseInt(splitUsingOp[0]);
    num2 = parseInt(splitUsingOp[1]);

    
    switch (operator) {
        case "+":
            let sum = (sums(splitUsingOp));
            screen.innerHTML = "";
            screen.innerHTML = sum;
            nums = [];
            nums[0] = sum;
            return sum;
        case "-":
            let sub = subtract(splitUsingOp);
            screen.innerHTML = "";
            screen.innerHTML = sub;
            nums = [];
            nums[0] = sub;
            console.log(sub);
            return sub;
      }



}















const subtract = function(subArgs) {

    
      if(subArgs.length == 0) {
          sub = 0;
      } else {
        sub = subArgs.reduce((prev, next) => {
            console.log(prev, next);
          return parseInt(prev) - parseInt(next);
        });
      }
    
        return sub;
    };


const sums = function(sumArgs) {

//   let sum;

  if(sumArgs.length == 0) {
      sum = 0;
  } else {
    sum = sumArgs.reduce((prev, next) => {
      return parseInt(prev) + parseInt(next);
    });
  }

    return sum;
};

console.log("sum:" + sums([1, 3, 5, 7, 9]));

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



