const computerPlay = function () {
    const options = ['rock', 'paper', 'scissors']
    const random = Math.floor(Math.random() * 3)
    console.log("computer selected:", options[random])
    return options[random]
}

// function game() {
//     let userScore = 0
//     let compScore = 0
//     while (userScore < 3 && compScore < 3) {
//         let result = playRound(playerSelection(), computerPlay())
//         if (result == "You win!") {
//             userScore++
//         }
//         if (result == "Computer wins") {
//             compScore++
//         }
//         console.log(`Your score: ${userScore} \n Computer score: ${compScore}`)
//     }
//     if (userScore === 3) {
//         return "You win! :)"
//     } else {
//         return "You lose. :("
//     }
// }

const game = {
    humanScore: 0,
    compScore: 0,
    playRound(selection) {
        const computerSelection = computerPlay();
        if (computerSelection == selection) {
            return "Tie!"
        }
        if (selection == 'rock' && cPlay == 'scissors') {
            this.humanScore++
            return "You win!"
        }
        if (selection == 'scissors' && cPlay == 'paper') {
            this.humanScore++
            return "You win!"
        }
        if (selection == 'paper' && cPlay == 'rock') {
            this.humanScore++
            return "You win!"
        }
        this.compScore++
        return "Computer wins"
    }
}
