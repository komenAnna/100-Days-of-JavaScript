// select eaach panel class
const panels = document.querySelectorAll(".panel")

// >>>>>>>>>>>>>>>>>function to add the class 'active'<<<<<<<<<<<<<<<<<<< 
// loop through each panel to add the class 'active'
// for each panel in the var 'panels', add an event listener where on click,
// the class active is removed via calling the function 'removeActive' and added on to the next
panels.forEach(panel => {
    panel.addEventListener('click', ()=>{
        removeActive()
        panel.classList.add('active')
    })
})

// >>>>>>>>>>>>>>>>>function to remove the class 'active'<<<<<<<<<<<<<<<<<<< 
function removeActive(){
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}
// dark mode toggle
var body = document.body
function modeChanger(){
    body.classList.toggle('dark-mode')
}