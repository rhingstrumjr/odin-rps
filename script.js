const computerPlay = function () {
    const options = ['rock', 'paper', 'scissors']
    const random = Math.floor(Math.random() * 3)
    return options[random]
}

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
        if (this.humanScore === 5) {
            document.getElementById("message").innerText = `You won ${this.humanScore} rounds to ${this.compScore} rounds!`;
            setTimeout(this.startNewGame(), 2000)
        } else if ( this.compScore === 5) {
            document.getElementById("message").innerText = `You lost ${this.humanScore} rounds to ${this.compScore} rounds.`;
            setTimeout(this.startNewGame(), 2000)
        } else {
            document.getElementById("message").innerText = this.message;
        }
    },
    startNewGame () {
        return function() {
            game.message = "Starting a new game - click to begin!";
            document.getElementById("message").innerText = game.message;
            game.humanScore = 0;
            game.compScore = 0;
        }
    }
}
