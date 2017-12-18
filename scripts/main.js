document.addEventListener('DOMContentLoaded', function(){

  // Creates a node list of all game squares (36 total)
  let squares = document.querySelectorAll(".square")
  // Creates an object for the "SMASH!" (go) button
  let goBtn = document.querySelector(".goBtn")
  // Variables to hold onto the randomly selected squares during the game loop
  let selected1
  let selected2
  let selected3

  // Returns a random # within my range of game squares available
  function randomNum() {
    let result = Math.floor(Math.random() * 36)
    return result
  }

  // Selects a random square to be the "active" square
  function randomSquare1() {
    selected1 = squares[randomNum()]
  }
  // Selects a random square to be the "active" square
  function randomSquare2() {
    selected2 = squares[randomNum()]
  }
  // Selects a random square to be the "active" square
  function randomSquare3() {
    selected3 = squares[randomNum()]
  }

  // Button that starts the game loop
  goBtn.addEventListener("click", function() {
    // Counter for each loop, all stop after 30 seconds
    let counter1 = 0
    let counter2 = 0
    let counter3 = 0

    loop1 = setInterval(function () {
      counter1++
      if (counter1 === 30) {
        clearInterval(loop1)
      }

      randomSquare1()
      selected1.style.backgroundColor = "red"

      clearSquare = setTimeout(function () {
        selected1.style.backgroundColor = "white"
      }, 1400)

    }, 1500)

    loop2 = setInterval(function () {
      counter2++
      if (counter2 === 20) {
        clearInterval(loop2)
      }

      randomSquare2()
      selected2.style.backgroundColor = "blue"

      clearSquare = setTimeout(function () {
        selected2.style.backgroundColor = "white"
      }, 1500)

    }, 2000)

    loop3 = setInterval(function () {
      counter3++
      console.log(counter3)
      if (counter3 === 15) {
        clearInterval(loop3)
      }

      randomSquare3()
      selected3.style.backgroundColor = "green"

      clearSquare = setTimeout(function () {
        selected3.style.backgroundColor = "white"
      }, 1500)

    }, 3000)

  })

})
