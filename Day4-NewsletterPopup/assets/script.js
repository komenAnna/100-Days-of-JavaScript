// making a function which will toggle the #newsletter
// onclick of the 'subscribe' button the newsletter will toggle down
// onclick of the 'close' icon the newsletter will toggle up
// the function is called in the HTML respective elements on the "onclick" property
// i.e onclick of this element, run this function
// the function adds the property active to the newsletter
// toggle --> method for handling the hide() and show() for the selected elements.
function toggleNewsletter (){
    const newsletter = document.getElementById("newsletter")
    newsletter.classList.toggle("active")
}
