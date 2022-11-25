// selecting the html elements button and body
const button = document.querySelector('button')
const body = document.querySelector('body')

// add colors to an array
const colors = ["blue", "green", "black", "pink", "yellow", "red", "brown", "purple", "orange", "gold", "aqua", "white", "gray", "azure", "coral"]

// function that executes the background change
function changeBackgroundColor() {
    // parseInt parses(breaks down) a string and returns an integer --> main function is to extract a number from a string
    const colorIndex = parseInt(Math.random() * colors.length)
    //return console.log(colorIndex) //test
    body.style.background = colors[colorIndex]
}
changeBackgroundColor(colors) //testing function works

// select a default background color (adding a styling element using DOM)
body.style.background = "purple"
// Add the event listener, on click, execute the function
button.addEventListener("click", changeBackgroundColor)
