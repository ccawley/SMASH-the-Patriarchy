document.addEventListener('DOMContentLoaded', function(){

  let scoreDisplay = document.querySelector(".score")
  let score = localStorage.getItem('score')

  scoreDisplay.innerText = score

})
