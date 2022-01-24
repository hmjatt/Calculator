const numbers = document.querySelectorAll(".num");
const screen = document.getElementById("screen-div");
const operator = document.querySelectorAll(".operator");
const equals = document.getElementById("equals");
const clear = document.querySelectorAll(".clear");







numbers.forEach(function(elem) {
    elem.addEventListener("click", function populate() {
      
        let ele = elem.innerHTML;
        //convert input to Array
        screen.innerHTML += ele;
        
        
    });
});

    



operator.forEach(function(op) {
    op.addEventListener("click", function evaluate() {

        let opr = op.innerHTML;
        screen.innerHTML += opr;
   

    });
});

equals.addEventListener("click", function calculates() {
    let items = screen.innerHTML;
    let currentExp = math.evaluate(items);
    screen.innerHTML = currentExp;
});



clear.forEach(function(clears) {
    clears.addEventListener("click", function clearIt() {
        screen.innerHTML = "";
    });
});





