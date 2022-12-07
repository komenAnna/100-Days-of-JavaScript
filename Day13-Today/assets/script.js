// use the Date() function to return the current day of the week
let date = new Date()
console.log(date) //will show the current date and time
// getDate() --  returns the day of the month (1 to 31) of a date..
//  method returns the day of the week (0 to 6) of a date.
// Sunday = 0, Monday = 1, ...
let dayNumber = date.getDay()
console.log(dayNumber)
let theDayIs
let quote

// switching between days and respective quotes
switch(dayNumber){
    case 0:
        theDayIs = 'Sunday'
        quote = 'If your Sunday does not involve wine and yoga pants, you are doing it wrong.'
        break
    case 1:
        theDayIs = 'Monday'
        quote = 'When life gives you Mondays, dip it in glitter and sparkle all day!'
        break
    case 2:
        theDayIs = 'Tuesday'
        quote = 'After Tuesday, the calendar goes W-T-F'
        break
    case 3: 
        theDayIs = 'Wednesday'
        quote = 'On WEdnesday, we wear pink - Mean Girls'
        break
    case 4: 
        theDayIs = 'Thursday'
        quote = ' Friday just called, she will be here tomorrow, and she is bringing the wine.'
        break
    case 5: 
        theDayIs = 'Friday'
        quote = "Work starts on Monday. Life begins on Friday."
        break
    case 3: 
        theDayIs = 'Saturday'
        quote = 'If they want to learn how to live life right they ought to study me on Saturday night. — Maya Angelou'
        break
}
// add the day of the week and it's respective quote to the page using innerHTML
let spanOfWeekday = document.getElementById('weekday')
spanOfWeekday.innerHTML = `${theDayIs}`

let spanOfQuote = document.getElementById('quote')
spanOfQuote.innerHTML = `${quote}`