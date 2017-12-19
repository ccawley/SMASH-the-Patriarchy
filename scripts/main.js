document.addEventListener('DOMContentLoaded', function(){
  let patriarch1 = [`url("../images/weinstein.jpg")`, `url("../images/trump.jpg")`, `url("../images/spacey.jpg")`, `url("../images/cosby.jpg")`, `url("../images/moore.jpg")`, `url("../images/clinton.jpg")`, `url("../images/batali.jpg")`, `url("../images/keillor.jpg")`, `url("../images/simmons.jpg")`, `url("../images/lauer.jpg")`, `url("../images/oreilly.jpg")`, `url("../images/kelly.jpg")`, `url("../images/kozinski.jpg")`, `url("../images/farenthold.jpg")`, `url("../images/conyers.jpg")`, `url("../images/venit.jpg")`, `url("../images/toback.jpg")`, `url("../images/halperin.jpg")`, `url("../images/singer.jpg")`, `url("../images/weiner.jpg")`, `url("../images/cosby2.jpg")`, `url("../images/epstein.jpg")`, `url("../images/trump2.jpg")`, `url("../images/bittel.jpg")`, `url("../images/hoffman.jpg")`, `url("../images/tambor.jpg")`, `url("../images/mondanile.jpg")`, `url("../images/besh.jpg")`, `url("../images/seagal.jpg")`, `url("../images/steele.jpg")`, `url("../images/piven.jpg")`]

  let patriarch2 = [`url("../images/rose.jpg")`, `url("../images/franken.jpg")`, `url("../images/ratner.jpg")`, `url("../images/dick.jpg")`, `url("../images/bush.jpg")`, `url("../images/allen.jpg")`, `url("../images/ck.jpg")`, `url("../images/levine.jpg")`, `url("../images/hite.jpg")`, `url("../images/franks.jpg")`, `url("../images/nassar.jpg")`, `url("../images/blatter.jpg")`, `url("../images/savino.jpg")`, `url("../images/affleck.jpg")`, `url("../images/affleckc.jpg")`]

  let goodThings = [`url("../images/puffer.jpg")`, `url("../scarecrow.jpg")`,  `url("../images/cat.jpg")`, `url("../images/fish.jpg")`, `url("../images/troll.jpg")`, `url("../images/rabbit.jpg")`, `url("../images/lion.jpg")`, `url("../images/pokemon.jpg")`, `url("../images/owl.jpg")`, `url("../images/bird.jpg")`, `url("../images/sloth.jpg")`, `url("../images/corn.jpg")`, `url("../images/dog.jpg")`, `url("../images/puppy.jpg")`, `url("../images/caterpillar.jpg")`, `url("../images/biff.jpg")`, `url("../images/sushi.jpg")`, `url("../images/hampster.jpg")`, `url("../images/pumpkin.jpg")`, `url("../images/baby.jpg")`]

  // Creates a node list of all game squares (36 total)
  let squares = document.querySelectorAll(".square")
  // Creates an object for the "SMASH!" (go) button
  let goBtn = document.querySelector(".goBtn")
  // Creates an object for the score display
  let scoreDisplay = document.querySelector(".score")
  let timerDisplay = document.querySelector(".timer")
  // Variables to hold onto the randomly selected squares during the game loop
  let selected1
  let selected2
  let selected3

  // Returns a random # within my range of game squares available
  function randomNum() {
    let result = Math.floor(Math.random() * 36)
    return result
  }

  function shuffle(arr) {
    let i = 0, j = 0, temp = null

    for (i = arr.length - 1; i > 0; i -= 1) {
      j = Math.floor(Math.random() * (i + 1))
      temp = arr[i]
      arr[i] = arr[j]
      arr[j] = temp
    }
  }

  shuffle(patriarch1)
  shuffle(patriarch2)
  shuffle(goodThings)

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
    let counter1 = -1
    let counter2 = -1
    let counter3 = -1
    let score = 0
    timerDisplay.innerText = 30

    loop1 = setInterval(function () {
      counter1 += 1
      timerDisplay.innerText--
      if (counter1 === 30) {
        clearInterval(loop1)
      }

      randomSquare1()
      if (selected1 === selected2 || selected1 === selected3) {
        randomSquare1
      }

      selected1.style.background = patriarch1[counter1]

      selected1.addEventListener("click", function () {
        score++
        scoreDisplay.innerText = score
      })

      clearSquare = setTimeout(function () {
        selected1.style.background =
        selected1.style.backgroundColor = "white"
      }, 1400)

    }, 1500)

    loop2 = setInterval(function () {
      counter2++
      if (counter2 === 20) {
        clearInterval(loop2)
      }

      randomSquare2()
      if (selected2 === selected1 || selected2 === selected3) {
        randomSquare2
      }
      selected2.style.background = goodThings[counter2]

      selected2.addEventListener("click", function () {
        score--
        scoreDisplay.innerText = score
      })

      clearSquare = setTimeout(function () {
        selected2.style.background =
        selected2.style.backgroundColor = "white"
      }, 1500)

    }, 2000)

    loop3 = setInterval(function () {
      counter3 += 1
      if (counter3 === 15) {
        clearInterval(loop3)
      }

      randomSquare3()
      if (selected3 === selected1 || selected3 === selected2) {
        randomSquare3
      }
      selected3.style.backgroundColor = patriarch2[counter3]

      selected3.addEventListener("click", function () {
        score++
        scoreDisplay.innerText = score
      })

      clearSquare = setTimeout(function () {
        selected3.style.background =
        selected3.style.backgroundColor = "white"
      }, 1500)

    }, 3000)

  })

})
