document.addEventListener('DOMContentLoaded', function(){
  let patriarch1 = [`url("../images/weinstein.jpg")`, `url("../images/trump.jpg")`, `url("../images/spacey.jpg")`, `url("../images/cosby.jpg")`, `url("../images/moore.jpg")`, `url("../images/clinton.jpg")`, `url("../images/batali.jpg")`, `url("../images/keillor.jpg")`, `url("../images/simmons.jpg")`, `url("../images/lauer.jpg")`, `url("../images/oreilly.jpg")`, `url("../images/kelly.jpg")`, `url("../images/kozinski.jpg")`, `url("../images/farenthold.jpg")`, `url("../images/conyers.jpg")`, `url("../images/venit.jpg")`, `url("../images/toback.jpg")`, `url("../images/halperin.jpg")`, `url("../images/singer.jpg")`, `url("../images/weiner.jpg")`, `url("../images/cosby2.jpg")`, `url("../images/epstein.jpg")`, `url("../images/trump2.jpg")`, `url("../images/bittel.jpg")`, `url("../images/hoffman.jpg")`, `url("../images/tambor.jpg")`, `url("../images/mondanile.jpg")`, `url("../images/besh.jpg")`, `url("../images/seagal.jpg")`, `url("../images/steele.jpg")`, `url("../images/piven.jpg")`]

  let patriarch2 = [`url("../images/rose.jpg")`, `url("../images/franken.jpg")`, `url("../images/ratner.jpg")`, `url("../images/dick.jpg")`, `url("../images/bush.jpg")`, `url("../images/allen.jpg")`, `url("../images/ck.jpg")`, `url("../images/levine.jpg")`, `url("../images/hite.jpg")`, `url("../images/franks.jpg")`, `url("../images/nassar.jpg")`, `url("../images/blatter.jpg")`, `url("../images/savino.jpg")`, `url("../images/affleck.jpg")`, `url("../images/affleckc.jpg")`]

  let goodThings = [`url("../images/puffer.jpg")`, `url("../images/scarecrow.jpg")`,  `url("../images/cat.jpg")`, `url("../images/fish.jpg")`, `url("../images/troll.jpg")`, `url("../images/rabbit.jpg")`, `url("../images/lion.jpg")`, `url("../images/pokemon.jpg")`, `url("../images/owl.jpg")`, `url("../images/bird.jpg")`, `url("../images/sloth.jpg")`, `url("../images/corn.jpg")`, `url("../images/dog.jpg")`, `url("../images/puppy.jpg")`, `url("../images/caterpillar.jpg")`, `url("../images/biff.jpg")`, `url("../images/sushi.jpg")`, `url("../images/hampster.jpg")`, `url("../images/pumpkin.jpg")`, `url("../images/baby.jpg")`]

  // Creates a node list of all game squares (25 total)
  let squares = document.querySelectorAll(".square")
  // Creates an object for the "SMASH!" (go) button
  let goBtn = document.querySelector(".goBtn")
  // Creates an object for the score display
  var scoreDisplay = document.querySelector(".score")
  let timerDisplay = document.querySelector(".timer")
  // Variables to hold onto the randomly selected squares during the game loop
  let selected1
  let selected2
  let selected3

  // Returns a random # within my range of game squares available
  function randomNum() {
    let result = Math.floor(Math.random() * 25)
    return result
  }

  // Shuffles my arrays so that each game the pics are in random order
  function shuffle(arr) {
    let i = 0, j = 0, temp = null

    for (i = arr.length - 1; i > 0; i -= 1) {
      j = Math.floor(Math.random() * (i + 1))
      temp = arr[i]
      arr[i] = arr[j]
      arr[j] = temp
    }
  }

  // Calling my shuffle algorithm on my picture arrays
  shuffle(patriarch1)
  shuffle(patriarch2)
  shuffle(goodThings)

  // Selects a random square to be the "active" square for loop1
  function randomSquare1() {
    selected1 = squares[randomNum()]
  }
  // Selects a random square to be the "active" square for loop2
  function randomSquare2() {
    selected2 = squares[randomNum()]
  }
  // Selects a random square to be the "active" square for loop3
  function randomSquare3() {
    selected3 = squares[randomNum()]
  }

  alert("If you are on a mobile device, please rotate it to landscape for the best experience. Thank you!")

  // Button that starts the game loop
  goBtn.addEventListener("click", function() {
    // Counter for each loop, all stop after 30 seconds
    let counter1 = 0
    let counter2 = 0
    let counter3 = 0
    let score = 0
    timerDisplay.innerText = 30

    loop1 = setInterval(function() {
      counter1++
      timerDisplay.innerText--
      if (counter1 === 30) {
        clearInterval(loop1)
      }

      randomSquare1()
      if (selected1 === selected2 || selected1 === selected3) {
        randomSquare1
      }

      selected1.style.background = patriarch1[counter1]

      function click1() {
        score++
        scoreDisplay.innerText = score
      }

      selected1.addEventListener("click", click1)

      clearSquare = setTimeout(function() {
        selected1.style.background = ""
        selected1.style.backgroundColor = "gainsboro"
        selected1.removeEventListener('click', click1)
      }, 1200)

    }, 1500)

    loop2 = setInterval(function() {
      counter2++
      if (counter2 === 20) {
        clearInterval(loop2)
      }

      randomSquare2()
      if (selected2 === selected1 || selected2 === selected3) {
        randomSquare2
      }
      selected2.style.background = goodThings[counter2]

      function click2() {
        score -= 2
        scoreDisplay.innerText = score
      }

      selected2.addEventListener("click", click2)

      clearSquare = setTimeout(function() {
        selected2.style.background = ""
        selected2.style.backgroundColor = "gainsboro"
        selected2.removeEventListener("click", click2)
      }, 1200)

    }, 2000)

    loop3 = setInterval(function() {
      counter3++
      if (counter3 === 15) {
        clearInterval(loop3)
      }
      if (counter3 === 15) {
        localStorage.setItem('score', JSON.stringify(score))
        window.location.href = "index3.html"
      }

      randomSquare3()
      if (selected3 === selected1 || selected3 === selected2) {
        randomSquare3
      }
      selected3.style.backgroundColor = patriarch2[counter3]

      function click3() {
        score++
        scoreDisplay.innerText = score
      }

      selected3.addEventListener("click", click3)

      clearSquare = setTimeout(function() {
        selected3.style.background = ""
        selected3.style.backgroundColor = "gainsboro"
        selected3.removeEventListener("click", click3)
      }, 1200)

    }, 3000)

  })

})
