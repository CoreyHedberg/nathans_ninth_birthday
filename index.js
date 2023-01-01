// TODO: Clean up countdown code

function countdownToBirthday() {
  // Get today's date and time
  const NOW = new Date().getTime()
  // Set the date we're counting down to
  const BIRTHDAY_DATE = new Date("Dec 15, 2023 24:00:00").getTime()
  // Find the distance between now and the count down date
  const TIME_LEFT = BIRTHDAY_DATE - NOW
  // Addressing what to do when the countdown reaches 0
  if (TIME_LEFT < 0) {
    clearInterval(countdownToBirthday)
    document.getElementById("testing").innerHTML = `It's party time`
  }
  // Time calculations for days, hours, minutes and seconds
  const DAYS = Math.floor(TIME_LEFT / (1000 * 60 * 60 * 24))
  const HOURS = Math.floor(
    (TIME_LEFT % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  )
  const MINUTES = Math.floor((TIME_LEFT % (1000 * 60 * 60)) / (1000 * 60))
  const SECONDS = Math.floor((TIME_LEFT % (1000 * 60)) / 1000)
  // Grab the HTML elements and insert the values
  document.getElementById("days").innerHTML = DAYS
  document.getElementById("hours").innerHTML = HOURS
  document.getElementById("minutes").innerHTML = MINUTES
  document.getElementById("seconds").innerHTML = SECONDS
}

// Initialize the function
countdownToBirthday()
// Set the count down function to run every 1 second
setInterval(countdownToBirthday, 1000)
