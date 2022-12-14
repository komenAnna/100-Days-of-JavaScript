// anonymous function
(function() {
    // select elements
    let resultScreen = document.querySelector(".result-screen")
    let buttons = document.getElementsByClassName("btn")
    let equal = document.querySelector(".btn-equal")
    let clear= document.querySelector(".btn-clear")
    console.log(buttons)
    

    // loop through each button and execute the function
    // forEach() ----> TypeError 'forEach' is not a function in JavaScript
    // The "forEach is not a function" error occurs when we call the forEach() method on a value that is not of type array, Map, or Set. 
    // To solve the error, make sure to only call the forEach method on arrays, Map or Set objects.
    // The getElementsByClassName method returns an array-like object (not an array). 
    //  Trying to call the Array.forEach method on the array-like object causes the error.
    // We used the Array.from method to convert the array-like object to an array before calling the forEach() method.
    // Any getElementsBy* (getElementsByTagName,getElementsByClassName, etc) call retruns an HTMLCollection. 
    // If you need to iterate them using forEach, then create an array by copying the collection using Array.from as shown below
    Array.from(buttons).forEach(function(button){
        // on click of the button, set the target value as the specified data-num associated with the HTML element
        button.addEventListener('click', function(e){
            // create a var "value", to hold the event-targeted element's dataset which is data-num
            let value = e.target.dataset.num
            // add the returned value to the result screen
            resultScreen.value += value
            console.log(resultScreen.value)
        })
    })

    // for the equal sign
    equal.addEventListener('click', function(e){
        // if result screen is empty onclick of the equal sign, throw the error
        if(resultScreen.value === ""){
            resultScreen.value = "Please enter a number"

            // remove the error after the specified time
            setTimeout(() => {
                resultScreen.value = ""
            }, 2000);
        // otherwise, use the eval() function, to do the math operation, onclick of the equal sign
        } else {
            // The eval() method evaluates or executes an argument.
            // If the argument is an expression, eval() evaluates the expression. 
            // If the argument is one or more JavaScript statements, eval() executes the statements.
            // NOT SAFE TO USE!!!!!
            let answer = eval(resultScreen.value)
            // set the amswer to the result screen
            resultScreen.value = answer
        }
    })

    // to clear the screen
    clear.addEventListener('click', function(e){
        resultScreen.value = ""
    })
})()