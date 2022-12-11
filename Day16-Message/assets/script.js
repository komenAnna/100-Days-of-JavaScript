// immediately invokable anonymous function
(function (){
    const form = document.querySelector("#form")
    form.addEventListener('submit', function(e){
        e.preventDefault()

        const message = document.querySelector(".message")
        const forInvalidInput = document.querySelector(".for-invalid-input")
        const messageContent = document.querySelector(".message-content")

        // if no input value, show the invalid input class for 2000ms, after which remove the class
        if(message.value === ""){
            forInvalidInput.classList.add("show")
            setTimeout(() => {
            forInvalidInput.classList.remove("show")
            }, 2000)
        // else, if input value is present, display the message-content, then clear the input field
        } else {
            messageContent.textContent = `"${message.value}" that is your message delivered`
            message.value = ""
        }
    })
})()
