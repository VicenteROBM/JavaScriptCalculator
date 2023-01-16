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
        if(strOperation[i]=="*"){
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
    return answer
}
console.log(fromStringToOperation("121/233"))