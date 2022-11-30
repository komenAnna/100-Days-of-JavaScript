(function(){
    const buttons =  document.querySelectorAll(".btn-counter") //access the buttons using their class name
    let count = 0 //initialize the count to start at 0

    // add event listener and a function to increase and decrease
    buttons.forEach(function(button){
        button.addEventListener("click",function(){
            if(button.classList.contains("decrease-btn")){
                count--
            } else if(button.classList.contains("increase-btn")){
                count++
            }

            const counter = document.querySelector(".counter-machine")
            counter.textContent = count

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
