const form = document.querySelector(".form")

form.addEventListener('submit', function(e){
    e.preventDefault();

    // get the input values, convert them to Number and store in a variable
    const height = parseInt(document.querySelector("#height").value)
    const weight = parseInt(document.querySelector("#weight").value)
    const result = document.querySelector(".result")

    // check for input
    if(height === " " || height < 0){
        result.innerHTML = "Please enter a valid input"
    } else if (weight === " " || weight < 0){
        result.innerHTML = "Please enter a valid input"
    } else {
        const yourBMIis = (weight / (height * height) /1000).toFixed(2)
        result.innerHTML = `<span>${yourBMIis}</span>`
    }
})
