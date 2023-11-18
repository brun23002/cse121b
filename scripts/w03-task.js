/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */

function add(number1, number2) 
{
    return number1 + number2;
}

function addNumbers() 
{
    let number1 = Number(document.querySelector("#add1").value);
    let number2 = Number(document.querySelector("#add2").value);
    document.querySelector("#sum").value = add(number1,number2);

}
document.querySelector("#addNumbers").addEventListener("click", addNumbers);

/* Function Expression - Subtract Numbers */

function subtract(number1, number2) 
{
    return number1 - number2;
}
  
function subtractNumbers() 
{
    let number1 = Number(document.querySelector("#subtract1").value);
    let number2 = Number(document.querySelector("#subtract2").value);
    document.querySelector("#difference").value = subtract(number1,number2);
}  
    document.querySelector("#subtractNumbers").addEventListener("click", subtractNumbers);


/* Arrow Function - Multiply Numbers */
let multiply = (number1, number2) => number1 * number2;
  
let multiplyNumbers = () => 
{
    let number1 = Number(document.querySelector("#factor1").value);
    let number2 = Number(document.querySelector("#factor2").value);
    document.querySelector("#product").value = multiply(number1, number2);
}
    document.querySelector("#multiplyNumbers").addEventListener("click", multiplyNumbers);
  
/* Open Function Use - Divide Numbers */
function divide(number1, number2) 
{
    return number1 / number2;
}
  
let divideNumbers = () => 
{
    let number1 = Number(document.querySelector("#dividend").value);
    let number2 = Number(document.querySelector("#divisor").value);
    document.querySelector("#quotient").value = divide(number1, number2);
}  
    document.querySelector("#divideNumbers").addEventListener("click", divideNumbers);


/* Decision Structure*/ 


/*document.addEventListener("DOMContentLoaded", function(){
    let getTotalDue = () => {
        let subtotal = Number(document.querySelector("#subtotal").value);
        let member = document.querySelector("#member");
        if (subtotal>0 && member.checked){
            subtotal = subtotal * 0.85;
        }
    
    document.querySelector("#total").value = `$${subtotal.toFixed(2)}`;
}

document.querySelector("#getTotal").addEventListener("click", getTotalDue);
});*/


document.addEventListener("DOMContentLoaded", function() {
    let getTotalDue = () => {
        let subtotal = Number(document.querySelector("#subtotal").value);
        let member = document.querySelector("#member");
        if (subtotal > 0 && member.checked) {
            subtotal = subtotal * 0.85;
        }
        document.querySelector("#total").textContent = `$${subtotal.toFixed(2)}`;
    }

    document.querySelector("#getTotal").addEventListener("click", getTotalDue);
});




/* ARRAY METHODS - Functional Programming */
// Output Source Array =============================================================
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

let arrayElement = document.getElementById("array");
arrayElement.textContent = array;

// Output Odds Only Array ==========================================================
let odds = array.filter(function(number) 
{
    // Use the operator % to find the remainder of dividing a number by 2. If the remainder is 1, the number is odd
    return number % 2 === 1;
}); 

let oddsElement = document.getElementById("odds");
oddsElement.textContent = odds;

// Output Evens Only Array ==========================================================
document.querySelector("#evens").innerHTML = array.filter(number => number % 2 === 0);

// Output Sum of Org. Array ==============================================================
document.querySelector("#sumOfArray").innerHTML = array.reduce((sum, number) => sum + number);

// Output Multiplied by 2 Array ===========================================================
document.querySelector("#multiplied").innerHTML = array.map(number => number * 2);

// Output Sum of Multiplied by 2 Array ====================================================
document.querySelector("#sumOfMultiplied").innerHTML = array.map(number => number * 2).reduce((accumulator, number) =>accumulator + number, 0);




