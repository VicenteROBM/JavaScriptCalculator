
let displayNumbers = document.getElementById("results")

displayNumbers.innerHTML = "0"
displayNumberJS = "0"


//ALL BUTTONS SUMPLIFIED HI IF YOU ARE READING THIS KARSTEN :D
function addNumberOrOperator(numberOrOperator){
    if(displayNumbers.innerHTML == "0"){
        displayNumbers.innerHTML = numberOrOperator
        displayNumberJS = numberOrOperator      
    }else{
        displayNumbers.innerHTML += numberOrOperator
        displayNumberJS += numberOrOperator
    }
}

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

/* FEATURES I WOULD LIKE TO ADD, SO CURRENTLY IF I HAD A THIRD OPERATOR THE MACHINE SIMPLY RETURNS NAN WHEN EQUAL IS PRESSED
I WANT SO THAT WHEN THE THIRD OPERATOR IS CALCULATED IS PERFORM THE PREVIOUS OPERATION AND CREATES A NEW OPERATION WITH THE RESULT OF THE FIRST ONE,

ALSO WHEN AN OPERATOR IS PRESSED LIKE "11+"" IF THE USER PRESSES ANOTHER OPERATOR ITT SHOULD REPLACE THE ORIGINAL ONE(SHOULD BE SIMPLER THAN THE FIRST ONE I GUESS)

MAYBE ADD A MATH FLOOR FOR THE RESULTS SO IT ROUNDS UP
*/