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
    message: "Choose to start round 1 - first to 5 wins!",
    playRound(selection) {
        const computerSelection = computerPlay();
        if (computerSelection == selection) {
            this.message = "Tie!"
        }
        else if ((selection == 'rock' && computerSelection == 'scissors') ||
                (selection == 'scissors' && computerSelection == 'paper') ||
                (selection == 'paper' && computerSelection == 'rock')) {
            this.humanScore++
            this.message = "You win!"
        } else {
            this.compScore++
            this.message = "Computer wins"
        }
        this.updateScoreboard()
        
    },
    updateScoreboard() {
        document.getElementById("userscore").innerText = this.humanScore;
        document.getElementById("compscore").innerText = this.compScore;
        document.getElementById("message").innerText = this.message;
    }
}
