/* FIRST I NEED EACH BUTTON TO WORK

CERTAIN CONDITIONS

IF THE DIV .INNER HTML == 0 THEN WHEN THE USER PRESSES A NUMBER SUBSTITUTE IT 
INSTEAD OF +=

WHEN A USER PRESSES AN OPERATOR ALL THE NUMBERS BEHIND THE OPERATOR = A

WHEN THE USER PRESSES EQUAL OR AN OPERATOR FOR THE SECOND TIME, EVERYTHING FROM THE
FIRST OPERATOR TO THE END = B

FUNCTION OPERATION (A,B)

AFTER AN OPERATOR IS CLICK IF A DIFFERENT ONE IS PRESSED SUBSTITUTE THE CURRENT ONE
*/


// QUIERO QUE TODOS LOS BOTONES TENGA SU FUNCION Y SE ACTIVE CON UN CLICK y que sea aplicable para todos

const results = document.getElementById("results")

let FirstNumber = "0"
let SecondNumer = ""
let result.innerHTML = FirstNumber

const one = document.getElementById("one")

function numberOne (){
    if(resultsJS == "0"){
        resultsJS = "1"
        results.innerHTML = resultsJS
    }else{
        resultsJS += "1"
        results.innerHTML = resultsJS
    }
    
}

function operate (FirstNumber,SecondNumer){
    a = +a
    b = +b
    return a+b
}
console.log(operate(a,b))