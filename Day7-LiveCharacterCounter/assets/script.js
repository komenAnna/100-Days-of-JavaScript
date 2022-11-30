// selecting textarea and counter and assigning them to var
const textarea = document.querySelector("textarea");
const counter = document.querySelector(".counter");

// a function to count the characters typed in
// function characterCount(){
const btn = document.querySelector('.btn')
btn.addEventListener('click', function(){
    //value property retrieves or sets the text in the entry field of the textArea element
    //length property returns the length of the string object
    const text = textarea.value;
    // console.log(text)
    const textLength = text.length
    // console.log(textLength)
    // set the textlength in the HTML element
    counter.innerText = `${textLength}`;
})
