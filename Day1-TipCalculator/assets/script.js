function tipCalculator() {
    // get the value of the bill, service and numOfPeople from the respective input field
    var billAmount = document.getElementById("bill").value
    var serviceQuality = document.getElementById("service").value
    var numberOfPeople = document.getElementById("numOfPeople").value

    //catch an error
    //NB: in "" ensure no space as it recognizes space as a character
    if(billAmount === "" || serviceQuality === 0){
        alert("Please enter required values")
        return
    }

    //if the number is 1 or less than one, remove the "each" element, else append the style display:block
    if(numberOfPeople === "" || numberOfPeople<=1){
        numberOfPeople = 1
        document.getElementById("each").style.display = "none"
    }else {
        document.getElementById("each").style.display = "block"
    }

    //calculate the tip amount
    var totalAmount = (billAmount * serviceQuality) / numberOfPeople
    totalAmount = Math.round(totalAmount * 100) / 100 //math.round returns a number to the nearest integer
    totalAmount = totalAmount.toFixed(2) //to 2 dp
    document.getElementById("tip-container").style.display = "block" //append the style display to the tip-container div
    document.getElementById("tip").innerHTML = totalAmount //display the total amount of the div
}

//a function that will execute the tipCalculator function on the click of the btn
document.getElementById("calculate-btn").onclick = function () {
    tipCalculator()
}
//a function that will reset the form back to default when the clear button is clicked
document.getElementById("clear-btn").onclick = function () {
    document.getElementById("form").reset()
    document.getElementById("tip-container").style.display = "none" //hide the tip-container when the form is reset
    // document.getElementById("tip").style.display = "none"
}
