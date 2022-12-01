// anonymous function
(function(){
    // an array of the images
    const images = ["image-0", "image-1", "image-2", "image-3", "image-4"];
    // select the elements
    const arrows = document.querySelectorAll(".arrow");
    const imgContainer = document.querySelector(".container");
    // initilaize count var
    let count = 0;

    // for each of the buttons, on click, run the function below
    arrows.forEach(function(arrow){
        arrow.addEventListener('click', function(e){
            // check the type of arrow
            // if points left
            if(arrow.classList.contains('fa-caret-square-o-left')){
                // reduce the count --> go to previous image
                count--;
                // check if we are at first img(img-0), if yes, when we click we will go to the very last img(img-4)
                if(count<0){
                    // if count < 0 then set count as images.length(5) - 1 = 4
                    count = images.length - 1
                }
                // if all the above pan out, set the img to the count(index) count is at
                imgContainer.style.backgroundImage = `url('Day8-ImageSlider/assets/Images/${images[count]}.jpg')`
            }

            // the right arrow
            if(arrow.classList.contains('fa-caret-square-o-right')){
                // increase count --> go to next img
                count++;
                // check if we are at last img ie if count is at 4(image-4), then we go back to 0
                if(count > images.length){
                    // set count back to 0
                    count = 0
                }
                // if all the above pans out, set the img to the count its at
                imgContainer.style.backgroundImage = `url('Day8-ImageSlider/assets/Images/${images[count]}.jpg')`
            }
        })
    })

})();
