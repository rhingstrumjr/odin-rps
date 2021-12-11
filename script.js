const computerPlay = function () {
    const options = ['rock', 'paper', 'scissors']
    const random = Math.floor(Math.random() * 3)
    console.log("computer selected:", options[random])
    return options[random]
}

const playerSelection = function () {
    let input = prompt("Rock, paper, or scissors?").toLowerCase().trim()
    if (input == 'rock' || input == 'paper' || input == 'scissors') {
        return input
    } else {
        console.log('Choice must be rock, paper, or scissors')
        playerSelection()
    }
}

function playRound(userPlay, cPlay) {
    if (cPlay == userPlay) {
        return "Tie!"
    }
    if (userPlay == 'rock' && cPlay == 'scissors') {
        return "You win!"
    }
    if (userPlay == 'scissors' && cPlay == 'paper') {
        return "You win!"
    }
    if (userPlay == 'paper' && cPlay == 'rock') {
        return "You win!"
    }
    return "Computer wins"
}

function game() {
    let userScore = 0
    let compScore = 0
    while (userScore < 3 && compScore < 3) {
        let result = playRound(playerSelection(), computerPlay())
        if (result == "You win!") {
            userScore++
        }
        if (result == "Computer wins") {
            compScore++
        }
        console.log(`Your score: ${userScore} \n Computer score: ${compScore}`)
    }
    if (userScore === 3) {
        return "You win! :)"
    } else {
        return "You lose. :("
    }
}

console.log(game())