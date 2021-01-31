// All the DOM selectors stored as short variables
const board = document.getElementById('board')
const findOut = document.getElementById('filter')
const playAgain = document.getElementById('playAgain')
const questions = document.getElementById('questions')
const winOrLose = document.getElementById('winOrLose')
const restartButton = document.getElementById('restart')
const winOrLoseText = document.getElementById('winOrLoseText')

// Array with all the characters, as objects
const CHARACTERS = [
  {
    name: 'Jabala',
    img: 'images/jabala.svg',
    hairColor: 'hidden',
    eyeColor: 'hidden',
    glasses: true,
    hat: true,
    smoker: false,
    facehair: false,
    jewelry: false,
  },
  {
    name: 'Jack',
    img: 'images/jack.svg',
    hairColor: 'hidden',
    eyeColor: 'blue',
    glasses: false,
    hat: true,
    smoker: false,
    facehair: true,
    jewelry: false
  },
  {
    name: 'Jacques',
    img: 'images/jacques.svg',
    hairColor: 'grey',
    eyeColor: 'blue',
    glasses: false,
    hat: true,
    smoker: true,
    facehair: true,
    jewelry: false,
  },
  {
    name: 'Jai',
    img: 'images/jai.svg',
    hairColor: 'black',
    eyeColor: 'brown',
    glasses: false,
    hat: false,
    smoker: false,
    facehair: false,
    jewelry: false,
  },
  {
    name: 'Jake',
    img: 'images/jake.svg',
    hairColor: 'blonde',
    eyeColor: 'green',
    glasses: true,
    hat: false,
    smoker: false,
    facehair: false,
    jewelry: false,
  },
  {
    name: 'James',
    img: 'images/james.svg',
    hairColor: 'brown',
    eyeColor: 'green',
    glasses: true,
    hat: false,
    smoker: false,
    facehair: true,
    jewelry: false,
  },
  {
    name: 'Jana',
    img: 'images/jana.svg',
    hairColor: 'black',
    eyeColor: 'hidden',
    glasses: true,
    hat: false,
    smoker: false,
    facehair: false,
    jewelry: true,
  },
  {
    name: 'Jane',
    img: 'images/jane.svg',
    hairColor: 'blonde',
    eyeColor: 'hidden',
    glasses: true,
    hat: false,
    smoker: false,
    facehair: false,
    jewelry: false,
  },
  {
    name: 'Jaqueline',
    img: 'images/jaqueline.svg',
    hairColor: 'orange',
    eyeColor: 'green',
    glasses: true,
    hat: false,
    smoker: false,
    facehair: false,
    jewelry: true,
  },

  {
    name: 'Jazebelle',
    img: 'images/jazebelle.svg',
    hairColor: 'purple',
    eyeColor: 'hidden',
    glasses: true,
    hat: false,
    smoker: true,
    facehair: false,
    jewelry: false,
  },
  {
    name: 'Jean',
    img: 'images/jean.svg',
    hairColor: 'brown',
    eyeColor: 'blue',
    glasses: true,
    hat: true,
    smoker: true,
    facehair: true,
    jewelry: false,
  },
  {
    name: 'Jeane',
    img: 'images/jeane.svg',
    hairColor: 'brown',
    eyeColor: 'green',
    glasses: true,
    hat: false,
    smoker: false,
    facehair: false,
    jewelry: false,
  },
  {
    name: 'Jed',
    img: 'images/jed.svg',
    hairColor: 'orange',
    eyeColor: 'green',
    glasses: true,
    hat: true,
    smoker: true,
    facehair: true,
    jewelry: false,
  },
  {
    name: 'Jenni',
    img: 'images/jenni.svg',
    hairColor: 'white',
    eyeColor: 'hidden',
    glasses: false,
    hat: true,
    smoker: false,
    facehair: false,
    jewelry: false,
  },
  {
    name: 'Jeri',
    img: 'images/jeri.svg',
    hairColor: 'orange',
    eyeColor: 'green',
    glasses: true,
    hat: false,
    smoker: false,
    facehair: false,
    jewelry: false,
  },
  {
    name: 'Jerry',
    img: 'images/jerry.svg',
    hairColor: 'hidden',
    eyeColor: 'blue',
    glasses: false,
    hat: true,
    smoker: false,
    facehair: false,
    jewelry: false,
  },
  {
    name: 'Jess',
    img: 'images/jess.svg',
    hairColor: 'black',
    eyeColor: 'blue',
    glasses: true,
    hat: false,
    smoker: false,
    facehair: false,
    jewelry: false,
  },
  {
    name: 'Jocelyn',
    img: 'images/jocelyn.svg',
    hairColor: 'black',
    eyeColor: 'brown',
    glasses: true,
    hat: false,
    smoker: false,
    facehair: false,
    jewelry: true,
  },
  {
    name: 'Jon',
    img: 'images/jon.svg',
    hairColor: 'brown',
    eyeColor: 'green',
    glasses: true,
    hat: false,
    smoker: false,
    facehair: false,
    jewelry: false,
  },
  {
    name: 'Jordan',
    img: 'images/jordan.svg',
    hairColor: 'blonde',
    eyeColor: 'hidden',
    glasses: true,
    hat: true,
    smoker: false,
    facehair: false,
    jewelry: true,
  },
  {
    name: 'Josephine',
    img: 'images/josephine.svg',
    hairColor: 'grey',
    eyeColor: 'brown',
    glasses: false,
    hat: false,
    smoker: false,
    facehair: false,
    jewelry: true,
  },
  {
    name: 'Josh',
    img: 'images/josh.svg',
    hairColor: 'blonde',
    eyeColor: 'green',
    glasses: false,
    hat: false,
    smoker: false,
    facehair: false,
    jewelry: false,
  },
  {
    name: 'Jude',
    img: 'images/jude.svg',
    hairColor: 'black',
    eyeColor: 'green',
    glasses: false,
    hat: false,
    smoker: false,
    facehair: true,
    jewelry: false,
  },
  {
    name: 'Julie',
    img: 'images/julie.svg',
    hairColor: 'black',
    eyeColor: 'brown',
    glasses: true,
    hat: true,
    smoker: false,
    facehair: false,
    jewelry: false,
  },
]

// Global variables
let secret, currentQuestion, charactersInPlay

// Draw the game board
const generateBoard = () => {
  board.innerHTML = ''
  charactersInPlay.forEach((person) => {
    board.innerHTML += `
      <div class="card">
        <p>${person.name}</p>
        <img src=${person.img} alt=${person.name}>
        <div class="guess">
          <span>Guess on ${person.name}?</span>
          <button class="filled-button small" onclick="guess('${person.name}')">Guess</button>
        </div>
      </div>
    `
  })
}

// Randomly select a person from the characters array,
// and set as the value of the variable called secret
const setSecret = () => {
  secret = charactersInPlay[Math.floor(Math.random() * charactersInPlay.length)]
}

// Start & initialize the game by
// bringing in the characters from the array,
// (re)set the board,
// invoke the generation of characters,
// and invoke the selection of secret character
const start = () => {
  charactersInPlay = CHARACTERS
  board.style.display = 'flex'
  winOrLose.style.display = 'none'
  generateBoard()
  setSecret()
  // console.log(secret)
}

// Sets & stores the values from the drop-down,
// to be used when user guesses
const selectQuestion = () => {
  const category = questions.options[questions.selectedIndex].parentNode.label
  const categoryValue = questions.value
  // console.log(categoryValue)
  // console.log(category)
  if (category === 'hair color') {
    currentQuestion = {
      attribute: 'hairColor',
      value: categoryValue,
      category: category,
    }
  } else if (category === 'eye color') {
      currentQuestion = {
        attribute: 'eyeColor',
        value: categoryValue,
        category: category,
      }
  } else if (category === 'accessories') {
      currentQuestion = {
        attribute: categoryValue,
        value: true,
        category: category,
    }
  } else if (category === 'other') {
      currentQuestion = {
        attribute: categoryValue,
        value: true,
        category: category,
      }
  }
}

// When the user takes a guess guess,
// compare the guess to the answer,
// and pass information along to the filter function
const checkQuestion = () => {
  const keep = currentQuestion.value === secret[currentQuestion.attribute]
  // console.log(keep)
  filterCharacters(keep)
}

// When the user made their guess,
// filter the choices,
// and redraw the board based on who remains
const filterCharacters = (keep) => {
  const { attribute, value, category } = currentQuestion
    if (category === 'accessories') {
      if (keep) {
        alert(`✔ Yes, the person wears ${attribute}! Good guess.
🤖 Keeping those who wear ${attribute}.`)
      } else {
        alert(`❌ Nope, the person doesn't wear ${attribute}! Guess again.
🤖 Removing those who wear ${attribute}.`)
        }
    } else if (category === 'other') {
      if (keep) {
        alert(`✔ Yes, ${attribute} is the name of the game! Good guess.
🤖 Keeping those ones.`)
      } else {
        alert(`❌ Nope, ${attribute} isn't in the cards! Guess again.
🤖 Removing those ones.`)
        }
    } else if (category === 'hair color') {
      if (keep) {
        alert(`✔ Yes, the person has ${value} hair! Good guess.
🤖 Keeping every ${value} haired ones.`)
      } else {
        alert(`❌ Nope, the person doesn't have ${value} hair! Guess again.
🤖 Removing those with ${value} hair.`)
        }
    } else if (category === 'eye color') {
      if (keep) {
        alert(`✔ Yes, gaze into their ${value} eyes! Good guess.
🤖 Keeping the ${value} eyed ones.`)
      } else {
        alert(`❌ Nope, the person doesn't have ${value} eyes!
🤖 Removing everyone with ${value} eyes.`)
        }
    }
  if (keep) {
    charactersInPlay = charactersInPlay.filter((person) => person[attribute] === value)
  }
  else {
    charactersInPlay = charactersInPlay.filter((person) => person[attribute] !== value)
  }
  generateBoard()
}

// Confirm with the user if they meant to guess
const guess = (suspect) => {
  confirm(`🙈 You're about to guess on ${suspect}. Are you sure?`)
  if (confirm) {
    checkMyGuess(suspect)
  }
}

// If the user confirms their guess,
// invoke a prompt,
// and depending on result change the page
const checkMyGuess = (suspect) => {
  if (suspect === secret.name) {
    winOrLoseText.innerHTML = `Yep, it was ${suspect}! Congratulations, detective! 🎉`
  }
  else {
    winOrLoseText.innerHTML = `Close, yet so far away. It wasn't <em>${suspect}</em>, it was <em>${secret.name}</em>. Better luck next time. 🎭`
  }
  winOrLose.style.display = 'flex'
  board.style.display = 'none'
}

// Start the game on load
start()

// If the user clicks the Play Again button,
// invoke the start function
playAgain.addEventListener('click', start)

// If the user clicks the Restart button,
// invoke the start function
restartButton.addEventListener('click', start)

// If the user clicks the Find Out button,
//invoke the checkQuestion function
findOut.addEventListener('click', checkQuestion)

// If the user selects a value from the drop-down,
//pass its value to the selectQuestion function
questions.addEventListener('change', () => selectQuestion())