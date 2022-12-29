// Set the date we're counting down to
const BIRTHDAY_DATE = new Date("Dec 15, 2023 12:00:00").getTime()

// Update the count down every 1 second
var x = setInterval(() => {
  // Get today's date and time
  const NOW = new Date().getTime()

  // Find the distance between now and the count down date
  const TIME_LEFT = BIRTHDAY_DATE - NOW

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(TIME_LEFT / (1000 * 60 * 60 * 24))
  var hours = Math.floor((TIME_LEFT % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  var minutes = Math.floor((TIME_LEFT % (1000 * 60 * 60)) / (1000 * 60))
  var seconds = Math.floor((TIME_LEFT % (1000 * 60)) / 1000)

  // Display the result in the element with id="demo"
  document.getElementById(
    "demo"
  ).innerHTML = `${days} days ${hours} hours ${minutes} minutes ${seconds} seconds`

  // If the count down is finished, write some text
  if (TIME_LEFT < 0) {
    clearInterval(x)
    document.getElementById("demo").innerHTML = `It's party time`
  }
}, 1000)
