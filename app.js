const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('.button-option')
let userChoice
let computerChoice
let result

possibleChoices.forEach(possibleChoice =>
  possibleChoice.addEventListener('click', e => {
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice
    generateComputerChoice()
    getResult()
  })
)

function generateComputerChoice() {
  const randomNumber = Math.floor(Math.random() * possibleChoices.length) + 1
  if (randomNumber === 1) {
    computerChoice = 'rock'
  }
  if (randomNumber === 2) {
    computerChoice = 'scissors'
  }
  if (randomNumber === 3) {
    computerChoice = 'paper'
  }
  computerChoiceDisplay.innerHTML = computerChoice
}

function getResult() {
  if (computerChoice === userChoice) {
    result = 'its a draw!'
  }
  if (
    (computerChoice === 'rock' && userChoice === 'paper') ||
    (computerChoice === 'paper' && userChoice === 'scissors') ||
    (computerChoice === 'scissors' && userChoice === 'rock')
  ) {
    result = 'you win!'
  }

  if (
    (computerChoice === 'paper' && userChoice === 'rock') ||
    (computerChoice === 'scissors' && userChoice === 'paper') ||
    (computerChoice === 'rock' && userChoice === 'scissors')
  ) {
    result = 'you lost!'
  }

  resultDisplay.innerHTML = result
}

function resetDisplay() {
  userChoiceDisplay.innerHTML = ' '
  computerChoiceDisplay.innerHTML = ' '
  resultDisplay.innerHTML = ' '
}
