(function(){
    const buttons =  document.querySelectorAll(".btn-counter") //access the buttons using their class name
    let count = 0 //initialize the count to start at 0

    // add event listener and a function to increase and decrease
    buttons.forEach(function(button){
        button.addEventListener("click",function(){
            // if the specific button contains the "specified class", decrement or increment the count
            if(button.classList.contains("decrease-btn")){
                count--
            } else if(button.classList.contains("increase-btn")){
                count++
            }

            // add the 'count' variable as textContent to the class 'counter-machine
            const counter = document.querySelector(".counter-machine")
            counter.textContent = count

            //change the font color of the var 'counter' when it meets a certain condition
            if(count > 0){
                counter.style.color = "green"
            } else if (count < 0){
                counter.style.color = "#f0ad4E"
            } else {
                counter.style.color = "#fff"
            }
        })
    })
})()
