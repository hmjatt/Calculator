const numbers = document.querySelectorAll(".num");
const buttons = document.querySelectorAll("button");
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
        screen.innerHTML += ele;
        
        
    });

});

//keyboard Support
document.addEventListener('keyup', function enterDigit(e) {



    
        if(e.key == "Backspace") {
            let oldItems = screen.innerHTML;
            const editedItems = oldItems.slice(0, -1)
            screen.innerHTML = editedItems;
        }else if(e.key == "Shift"||e.key == "CapsLock"||e.key == "Control") {
            e.preventDefault();
        }else if(e.key == "Enter") {
            calculates();
        }else {
            screen.textContent += `${e.key}`;
        }
      

});




operator.forEach(function(op) {
    op.addEventListener("click", function evaluate() {

        let opr = op.innerHTML;
        screen.innerHTML += opr;
   
    });
});

equals.onclick = function() {calculates()};

function calculates() {
    let items = screen.innerHTML;
    
    errorMessage.innerHTML = "";
    let chkError;
    
    try {
        let currentExp = math.evaluate(items);
        screen.innerHTML = currentExp;
      }
      catch(err) {
        let showError;
        chkError = err.message;
        const arr = chkError.split(" ");
        const editedArr = arr.slice(0, 3);
        let editedStr = editedArr.join(" ");
        
        
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
              }
       
        
        errorMessage.innerHTML = showError;
      }
}


clear.addEventListener("click", function clearsIt() {
    screen.innerHTML = "";
    errorMessage.innerHTML = "";
    currentExp = "";
});

back.addEventListener("click", function clearIt() {
    
        let oldItems = screen.innerHTML;
        const editedItems = oldItems.slice(0, -1)
        screen.innerHTML = editedItems;
    
});
 



parenthasisLeft.addEventListener("click", function puntuateLeft() {
    let pLeftItems = screen.innerHTML;

    let addParLeft = (`(${pLeftItems}`);
        
    screen.innerHTML = addParLeft;
});

parenthasisRight.addEventListener("click", function puntuateRight() {
    let pRightItems = screen.innerHTML;

    let addParRight = (`${pRightItems})`);
        
    screen.innerHTML = addParRight;
});

dot.addEventListener("click", function puntuate() {
    let prvItems = screen.innerHTML;
    let addDot = (`${prvItems}.`)
    screen.innerHTML = addDot;
});