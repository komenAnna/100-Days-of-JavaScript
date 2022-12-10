$(document).ready(() => {
    $("#addToCart").on("click", () => {
        var button = $("#addToCart")
        var cart = $("#cartDiv")
        var cartSum = $("data-totalitems")
        var newSum = parseInt(cartSum) + 1
        console.log(parseInt(cartSum))
        console.log(newSum)

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
