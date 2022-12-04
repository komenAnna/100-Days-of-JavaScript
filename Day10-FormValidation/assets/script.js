const form = document.getElementById('form')
const username = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')
const passwordCheck = document.getElementById('passwordCheck')
// const btn = document.getElementById('btn')

form.addEventListener('submit', e => {
    e.preventDefault();

    checkingInputs();
})
// create a function to check if the inputs are a success or fail
function checkingInputs(){
    // create variables to hold the values entered without spaces
    const usernameValue = username.value.trim()
    const emailValue = email.value.trim()
    const passwordValue = password.value.trim()
    const passwordCheckValue = passwordCheck.value.trim()

    if(usernameValue === ""){
        setErrorFor(username, "Username cannot be empty")
    } else {
        setSuccessFor(username)
    }

    if(emailValue === ""){
        setErrorFor(email, "Email field cannot be empty")
    } else if (!isEmail(emailValue)){
        setErrorFor(email, "Enter a valid email")
    }else {
        setSuccessFor(email)
    }

    if(passwordValue === ""){
        setErrorFor(password, "Password cannot be empty")
    }else {
        setSuccessFor(password)
    }

    if(passwordCheckValue === ""){
        setErrorFor(passwordCheck, "Password check cannot be empty")
    } else {
        setSuccessFor(passwordCheck)
    }
}

// create a function that will do the error handling ----- on success
function setSuccessFor(){
    const controlForm = input.parentElement
    controlForm.classname = "control-form success"
}

// create a function that will do the error handling ----- on fail
function setErrorFor(){
    const controlForm = input.parentElement
    const small = controlForm.querySelector('small')
    controlForm.classname = "control-form fail"
    small.innerText = message
}

// create a function to check if an email input is valid
function isEmail (){
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}