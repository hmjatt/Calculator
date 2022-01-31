const numbers = document.querySelectorAll(".num");
const buttons = document.querySelectorAll("button");
const sqrt = document.getElementById("sqrt");
const functionKeys = document.querySelectorAll(".fxn");
const moreFunctionKeys = document.querySelectorAll(".more-fxn");
const screen = document.getElementById("screen-div");
const operator = document.querySelectorAll(".operator");
const equals = document.getElementById("equals");
const clear = document.getElementById("clear");
const back = document.getElementById("back");
const parenthasisLeft = document.getElementById("paren-left");
const parenthasisRight = document.getElementById("paren-right");
const dot = document.getElementById("dot");
const errorMessage = document.getElementById("error-msg-div");






numbers.forEach(function(elem) {
    elem.addEventListener("click", function populate() {
      
        let ele = elem.innerHTML;
        //convert input to Array
        screen.value += ele;
        
        
    });

});

//keyboard Support
document.addEventListener('keyup', function enterDigit(e) {



    
        if(e.key == "Backspace") {
            let oldItems = screen.value;
            const editedItems = oldItems.slice(0, -1)
            screen.value = editedItems;
        }else if(e.key == "Shift"||e.key == "CapsLock"||e.key == "Control") {
            e.preventDefault();
        }else if(e.key == "Enter") {
            calculates();
        }else {
            screen.textContent += `${e.key}`;
        }
      

});




functionKeys.forEach(function(fxn) {
    fxn.addEventListener("click", function addFxn() {

        let fxnKey = fxn.value;
        console.log(fxn.value);
        screen.value += fxnKey;
   
    });
});

moreFunctionKeys.forEach(function(fxns) {
    fxns.addEventListener("change", function addFxns() {

        let moreFxnKey = fxns.value;
        console.log(moreFxnKey);
        screen.value += moreFxnKey;
   
    });
});


operator.forEach(function(op) {
    op.addEventListener("click", function addOperators() {

        let opr = op.innerHTML;
        screen.value += opr;
   
    });
});


equals.onclick = function() {calculates()};

function calculates() {
    let items = screen.value;
    console.log(typeof(items));
    errorMessage.style.color = "rgb(196, 196, 196)";
    let chkError;
    let showError = screen.value;
    errorMessage.innerHTML = showError;
    
    try {
        let currentExp = math.evaluate(items);
        screen.value = currentExp;
      }
      catch(err) {
        
        chkError = err.message;
        const arr = chkError.split(" ");
        const editedArr = arr.slice(0, 3);
        let editedStr = editedArr.join(" ");
        errorMessage.style.color = "rgb(255, 127, 77)";

            switch(editedStr) {
                case "Parenthesis ) expected":
                  showError = " missing ')' ";
                  break;
                case "Unexpected operator )":
                  showError = " missing '(' ";
                  break;
                case 'Unexpected part ".1"':
                    showError = " extra '.' ";
                    break;
                case "Unexpected operator .":
                    showError = " extra '.' ";
                    break;
                default:
                    showError = " try sqrt(x) ";
                    break;
              }
            
        
        errorMessage.innerHTML = showError;
      }
}


clear.addEventListener("click", function clearsIt() {
    screen.value = "";
    errorMessage.innerHTML = "";
    currentExp = "";
});

back.addEventListener("click", function clearIt() {
    
        let oldItems = screen.value;
        const editedItems = oldItems.slice(0, -1)
        screen.value = editedItems;
    
});
 



parenthasisLeft.addEventListener("click", function puntuateLeft() {
    let pLeftItems = screen.value;

    let addParLeft = (`(${pLeftItems}`);
        
    screen.value = addParLeft;
});

parenthasisRight.addEventListener("click", function puntuateRight() {
    let pRightItems = screen.value;

    let addParRight = (`${pRightItems})`);
        
    screen.value = addParRight;
});

dot.addEventListener("click", function puntuateDot() {
    let prvItems = screen.value;
    let addDot = (`${prvItems}.`)
    screen.value = addDot;
});