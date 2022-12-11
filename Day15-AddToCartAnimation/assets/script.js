// JQUERY ------ is a lightweight, "write less, do more", JavaScript library.
// The purpose of jQuery is to make it much easier to use JavaScript on your website.
// A page can't be manipulated safely until the document is "ready." jQuery detects this state of readiness for you. 
// Code included inside $( document ).ready() will only run once the page Document Object Model (DOM) 
// is ready for JavaScript code to execute
$(document).ready(() => {
    // The jQuery #id selector uses the id attribute of an HTML tag to find the specific element.
    // An id should be unique within a page, so you should use the #id selector when you want to find a single, 
    // unique element.
    // To find an element with a specific id, write a hash character, followed by the id of the HTML element:
    // eg : $("#test")
    // The on() method attaches one or more event handlers for the selected elements.
    $("#addToCart").on("click", () => {
        var button = $("#addToCart")
        var cart = $("#cartDiv")
        var cartSum = $("data-totalitems")
        console.log(cartSum)
        var newSum = parseInt(cartSum) + 1
        console.log(newSum)

        // SetTimeout() method calls a function after a number of milliseconds.
        // 1 second = 1000 milliseconds.
        // on click, activate class "sendtocart" on button element
        // remove the class and add 'shake'
        // remove 'shake'
        button.addClass("sendtocart")
        setTimeout(() => {
            button.removeClass("sendtocart")
            cart.addClass("shake").attr("data-totalitems", newSum)
            setTimeout(() => {
                cart.removeClass("shake")
            }, 500)
        }, 1000)
    })
})
