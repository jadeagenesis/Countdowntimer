const countdown = () => {
    const endDate = new Date ("1 March 2024 00:00:00").getTime()
    const now = new Date ().getTime()

   const difference = endDate - now

//    console.log (difference)
const seconds = 1000
const minutes = seconds * 60
const hours = minutes * 60
const days = hours * 24

let timeDays = Math.floor(difference / days)
let timeHours = Math.floor((difference % days) / hours)
let timeMinutes = Math.floor((difference % hours) / minutes)
let timeSeconds = Math.floor((difference % minutes) / seconds)

// Below we want to write a code that when the time id not written in double digits a zero can be added to it from behind

timeDays = timeDays < 10 ? "0" + timeDays : timeDays
timeHours = timeHours < 10 ? "0" + timeHours : timeHours
timeMinutes = timeMinutes < 10 ? "0" + timeMinutes : timeMinutes
timeSeconds = timeSeconds < 10 ? "0" + timeSeconds : timeSeconds


document.getElementById("days").innerHTML = timeDays
document.getElementById("hours").innerHTML = timeHours
document.getElementById("minutes").innerHTML = timeMinutes
document.getElementById("seconds").innerHTML = timeSeconds


}
setInterval(countdown, 1000)