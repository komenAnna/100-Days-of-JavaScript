// selecting the form tag
// const form = document.querySelector('form')
// const submitBtn = document.getElementById('submitBtn')

// adding an event listener
document.addEventListener("submit", function(e){
    e.preventDefault()
    const form = document.querySelector('form')
    form = e.target
    const input = document.querySelector('input')
    var convertedWeight = document.querySelector('span')
    var kgToPound

    // handle an error if the input value is less than 0 or not a number
    if((isNAN(input.value)) || input.value<=0){
        convertedWeight.classList.add("error")
        convertedWeight.innerHTML = "<p>Please enter a valid number</p>"

        // to remove the class after a specified interval of time
        setTimeout(() => {
            convertedWeight.innerHTML = ""
            convertedWeight.classList.remove("error")
        }, 2500)
        input.value = ""
    } else {
        // if input value is correct
        kgToPound = Number(input.value) * 2.20462
        convertedWeight.classList.add("success")
        convertedWeight.innerHTML = `${kgToPound.toFixed(2)}`

        setTimeout(() => {
            convertedWeight.innerHTML = ""
            input.value = ""
            convertedWeight.classList.remove("success")
        }, 20000);
    }
})