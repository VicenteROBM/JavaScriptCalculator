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
let displayNumbers = document.getElementById("results")

displayNumbers.innerHTML = "0"
displayNumberJS = "0"

// numbers buttons

let numberZero = document.getElementById("zero")
numberZero.addEventListener("click",function(){

    // if the calculator already show 0 it replaces it with the number
    if(displayNumbers.innerHTML == "0"){
        
    }else{
        displayNumbers.innerHTML += "0"
        displayNumberJS += "0"
    }
})

let numberOne = document.getElementById("one")
numberOne.addEventListener("click",function(){

    // if the calculator already show 0 it replaces it with the number
    if(displayNumbers.innerHTML == "0"){
        displayNumbers.innerHTML = 1
        displayNumberJS = "1"
        
    }else{
        displayNumbers.innerHTML += "1"
        displayNumberJS += "1"
    }
})

let numberTwo = document.getElementById("two")
numberTwo.addEventListener("click",function(){

    // if the calculator already show 0 it replaces it with the number
    if(displayNumbers.innerHTML == "0"){
        displayNumbers.innerHTML = 2
        displayNumberJS = "2"
        
    }else{
        displayNumbers.innerHTML += "2"
        displayNumberJS += "2"
    }
})

let numberThree = document.getElementById("three")
numberThree.addEventListener("click",function(){

    // if the calculator already show 0 it replaces it with the number
    if(displayNumbers.innerHTML == "0"){
        displayNumbers.innerHTML = 3
        displayNumberJS = "3"
        
    }else{
        displayNumbers.innerHTML += "3"
        displayNumberJS += "3"
    }
})

let numberFour = document.getElementById("four")
numberFour.addEventListener("click",function(){

    // if the calculator already show 0 it replaces it with the number
    if(displayNumbers.innerHTML == "0"){
        displayNumbers.innerHTML = 4
        displayNumberJS = "4"
        
    }else{
        displayNumbers.innerHTML += "4"
        displayNumberJS += "4"
    }
})

let numberFive = document.getElementById("five")
numberFive.addEventListener("click",function(){

    // if the calculator already show 0 it replaces it with the number
    if(displayNumbers.innerHTML == "0"){
        displayNumbers.innerHTML = 5
        displayNumberJS = "5"
        
    }else{
        displayNumbers.innerHTML += "5"
        displayNumberJS += "5"
    }
})

let numberSix = document.getElementById("six")
numberSix.addEventListener("click",function(){

    // if the calculator already show 0 it replaces it with the number
    if(displayNumbers.innerHTML == "0"){
        displayNumbers.innerHTML = 6
        displayNumberJS = "6"
        
    }else{
        displayNumbers.innerHTML += "6"
        displayNumberJS += "6"
    }
})

let numberSeven = document.getElementById("seven")
numberSeven.addEventListener("click",function(){

    // if the calculator already show 0 it replaces it with the number
    if(displayNumbers.innerHTML == "0"){
        displayNumbers.innerHTML = 7
        displayNumberJS = "7"
        
    }else{
        displayNumbers.innerHTML += "7"
        displayNumberJS += "7"
    }
})

let numberEight = document.getElementById("eight")
numberEight.addEventListener("click",function(){

    // if the calculator already show 0 it replaces it with the number
    if(displayNumbers.innerHTML == "0"){
        displayNumbers.innerHTML = 8
        displayNumberJS = "8"
        
    }else{
        displayNumbers.innerHTML += "8"
        displayNumberJS += "8"
    }
})

let numberNine = document.getElementById("nine")
numberNine.addEventListener("click",function(){

    // if the calculator already show 0 it replaces it with the number
    if(displayNumbers.innerHTML == "0"){
        displayNumbers.innerHTML = 9
        displayNumberJS = "9"
        
    }else{
        displayNumbers.innerHTML += "9"
        displayNumberJS += "9"
    }
})

//operators buttons

let addition = document.getElementById("plus")
addition.addEventListener("click",function(){

    // if the calculator already show 0 it replaces it with the number
    if(displayNumbers.innerHTML == "0"){
        displayNumbers.innerHTML += "+"
        
    }else{
        displayNumbers.innerHTML += "+"
        displayNumberJS += "+"
    }
})

let minus = document.getElementById("minus")
minus.addEventListener("click",function(){

    // if the calculator already show 0 it replaces it with the number
    if(displayNumbers.innerHTML == "0"){
        displayNumbers.innerHTML += "-"
        
    }else{
        displayNumbers.innerHTML += "-"
        displayNumberJS += "-"
    }
})

let multiply = document.getElementById("multiply")
multiply.addEventListener("click",function(){

    // if the calculator already show 0 it replaces it with the number
    if(displayNumbers.innerHTML == "0"){
        displayNumbers.innerHTML += "x"
        
    }else{
        displayNumbers.innerHTML += "x"
        displayNumberJS += "x"
    }
})

let division = document.getElementById("divide")
division.addEventListener("click",function(){

    // if the calculator already show 0 it replaces it with the number
    if(displayNumbers.innerHTML == "0"){
        displayNumbers.innerHTML += "/"
        
    }else{
        displayNumbers.innerHTML += "/"
        displayNumberJS += "/"
    }
})




function fromStringToOperation(strOperation){
    let answer =0;
    for (let i= 0; i< strOperation.length; i++){
        
        // transforming from String to sum
        if(strOperation[i]=="+"){
            let firstNumber = strOperation.substring(0,i)
            let SecondNumber = strOperation.substring(i+1,strOperation.length)
            firstNumber = +firstNumber
            SecondNumber = +SecondNumber
            answer = firstNumber + SecondNumber
        }
        // transforming from String to substraction
        if(strOperation[i]=="-"){
            let firstNumber = strOperation.substring(0,i)
            let SecondNumber = strOperation.substring(i+1,strOperation.length)
            firstNumber = +firstNumber
            SecondNumber = +SecondNumber
            answer = firstNumber - SecondNumber
        }
        // transforming from String to multiplication
        if(strOperation[i]=="x"){
            let firstNumber = strOperation.substring(0,i)
            let SecondNumber = strOperation.substring(i+1,strOperation.length)
            firstNumber = +firstNumber
            SecondNumber = +SecondNumber
            answer = firstNumber * SecondNumber
        }
        // transforming from String to division
        if(strOperation[i]=="/"){
            let firstNumber = strOperation.substring(0,i)
            let SecondNumber = strOperation.substring(i+1,strOperation.length)
            firstNumber = +firstNumber
            SecondNumber = +SecondNumber
            answer = firstNumber / SecondNumber
        }
    }
    // add a way to first round up to two numbers
    // and then display it on the results div
    

    displayNumberJS = answer
    displayNumbers.innerHTML  = answer
    return answer
}

// equal button

let equalButton = document.getElementById("equal")
equalButton.addEventListener("click", function (){
    console.log(fromStringToOperation(displayNumberJS))
    
})

// clear button
let clearButton = document.getElementById("clear")
clearButton.addEventListener("click", function(){
    displayNumberJS = "0"
    displayNumbers.innerHTML  = "0"
})