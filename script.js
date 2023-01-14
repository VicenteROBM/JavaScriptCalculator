
let results = document.getElementById("results")

let one = document.getElementById("one")
one.addEventListener("click",function(){
    document.getElementById("results").innerHTML += "1"
})

let two = document.getElementById("two")
two.addEventListener("click",function(){
    document.getElementById("results").innerHTML += "2"
})

let three = document.getElementById("three")
three.addEventListener("click",function(){
    document.getElementById("results").innerHTML += "3"
})

let four = document.getElementById("four")
four.addEventListener("click",function(){
    document.getElementById("results").innerHTML += "4"
})

let five = document.getElementById("five")
five.addEventListener("click",function(){
    document.getElementById("results").innerHTML += "5"
})

let six = document.getElementById("six")
six.addEventListener("click",function(){
    document.getElementById("results").innerHTML += "6"
})

let seven = document.getElementById("seven")
seven.addEventListener("click",function(){
    document.getElementById("results").innerHTML += "7"
})

let eight = document.getElementById("eight")
eight.addEventListener("click",function(){
    document.getElementById("results").innerHTML += "8"
})

let nine = document.getElementById("nine")
nine.addEventListener("click",function(){
    document.getElementById("results").innerHTML += "9"
})


let plus = document.getElementById("plus")
plus.addEventListener("click",function(){
    document.getElementById("results").innerHTML += "+"
})

let minus = document.getElementById("minus")
minus.addEventListener("click",function(){
    document.getElementById("results").innerHTML += "-"
})

let multiply = document.getElementById("multiply")
multiply.addEventListener("click",function(){
    document.getElementById("results").innerHTML += "x"
})

let divide = document.getElementById("divide")
divide.addEventListener("click",function(){
    document.getElementById("results").innerHTML += "/"
})


/* if user clicks a number for the furst time subtitute the zero for the pressed 
if he presses a an operator 0 + operator 

after pressing the operator only buttons that work are numbers

clear => returns the div to 0










*/

// OPERATIONS
/*
function addOperation (a,b){
    return a+b
}
function subtractOperation (a,b){
    return a-b 
}
function multiplyOperation (a,b){
    return a*b
}
function divideOperation (a,b){
    return a/b    
}
function operate(a,operator,b){
    if(operator =="+"){
        return add(a,b)
    }else if(operator =="-"){
        return subtract(a,b)
    }else if(operator =="*"){
        return multiply(a,b)
    }else if(operator =="/"){
        return divide(a,b)
    }

}

*/
