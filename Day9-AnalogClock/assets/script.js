// created a var 'deg' and assigned the value 6 to it
const deg = 6;
// selected the elements using DOM
    const hr = document.querySelector('#hr')
    const min = document.querySelector('#min')
    const sec = document.querySelector('#sec')

    // Window setInterval() method calls a function at specified intervals in milliseconds
    // it continues calling the function until clearInterval is called , or the window is closed
    // syntax : setInterval(function(), milliseconds)
    // here, the arguments will be an anonymous function
    setInterval(() => {
        // Date methods allow you to get and set the year, month, day, hour, minute, second, and millisecond 
        // of date objects, using either local time or UTC (universal, or GMT) time.
        let day = new Date() //new is the constructor
        console.log(day)
        // getHours --> returns the hour (0 to 23) of a date. eg At time of code, the return is 12
        let hh = day.getHours() * 30
        
        // getMinutes() -->  returns the minutes (0 to 59) of a date. eg At time of coding, the return is 45
        let mm = day.getMinutes() * deg

        // getSeconds() --> returns the seconds (0 to 59) of a date. eg At the time of coding, the return is 54
        let ss = day.getSeconds() * deg

        // manipulating the hr, min and sec hands by transform: rotateZ
        // RotateZ() rotates an element around its z-axix at a given degree
        hr.style.transform = `rotateZ(${(hh)+(mm/12)}deg)`
        min.style.transform = `rotateZ(${mm}deg)`
        sec.style.transform = `rotateZ(${ss}deg)`

    })
    