// TODO: Clean up countdown code
// use strict;
// Set the date we're counting down to
const BIRTHDAY_DATE = new Date("Dec 15, 2023 12:00:00").getTime()

// Update the count down every 1 second
var beginCountdown = setInterval(() => {
  // Get today's date and time
  const NOW = new Date().getTime()

  // Find the distance between now and the count down date
  const TIME_LEFT = BIRTHDAY_DATE - NOW

  // Time calculations for days, hours, minutes and seconds
  const DAYS = Math.floor(TIME_LEFT / (1000 * 60 * 60 * 24))
  const HOURS = Math.floor(
    (TIME_LEFT % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  )
  const MINUTES = Math.floor((TIME_LEFT % (1000 * 60 * 60)) / (1000 * 60))
  const SECONDS = Math.floor((TIME_LEFT % (1000 * 60)) / 1000)

  // Display the result in the element with id="demo"
  document.getElementById(
    "countdown-timer"
  ).innerHTML = `${DAYS} days ${HOURS} hours ${MINUTES} minutes ${SECONDS} seconds`

  // If the count down is finished, write some text
  if (TIME_LEFT < 0) {
    clearInterval(beginCountdown)
    document.getElementById("countdown-timer").innerHTML = `It's party time`
  }
}, 1000)
