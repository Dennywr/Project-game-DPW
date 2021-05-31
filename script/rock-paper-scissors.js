let rock = document.getElementById("rock")
let paper = document.getElementById("paper")
let scissors = document.getElementById("scissors")
let playerScore = document.getElementById("score-a")
let computerScore = document.getElementById("score-b")
let modalBody = document.getElementById("modal-body")
let check = document.getElementById("check")
let player = 0
let computer = 0
let ingame = 0
let choice
let computerChoice

function randomChoice() {
    let randomChoice = Math.floor(Math.random() * 3) + 1
    computerChoice = randomChoice
}
function pickOption(o) {
    if (choice == undefined) {
        choice = o
        
        if (o == 1) {
            rock.classList = "player"
        } else if (o == 2) {
            paper.classList = "player"
        } else {
            scissors.classList = "player"
        }
        
        if (computerChoice == undefined) {
            randomChoice()
            while (computerChoice == choice) {
                randomChoice()
            }
            
            if (computerChoice == 1) {
                rock.classList = "computer"
            } else if (computerChoice == 2) {
                paper.classList = "computer"
            } else {
                scissors.classList = "computer"
            }
        }
        
        getWin(choice, computerChoice)
    } else {
        alert("Anda sudah selesai memilih!")
    }
    ingame = 0
}
function getWin(p, c) {
    if (ingame == 1) {
        
        if (p == 1 && c == 2) {
            computer ++
        } else if (p == 1 && c == 3) {
            player ++
        } else if (p == 2 && c == 1) {
            player ++
        } else if (p == 2 && c == 3) {
            computer ++
        } else if (p == 3 && c == 1) {
            computer ++
        } else if (p == 3 && c == 2) {
            player ++
        }
        
        playerScore.innerHTML = player
        computerScore.innerHTML = computer
    }
}

function newGame() {
    if (ingame == 0) {
        ingame = 1
        choice = undefined
        computerChoice = undefined
        
        rock.classList = ""
        paper.classList = ""
        scissors.classList = ""
        
        playerScore.innerHTML = player
        computerScore.innerHTML = computer
    }
}
function finish() {
    if(player == computer) {
        modalBody.innerHTML = "Kalian Imbang!";
    } else if(player > computer) {
        modalBody.innerHTML = "Selamat! Anda Menang!";
    } else {
        modalBody.innerHTML = "Maaf! Anda Kalah!";
    }
}

// GSAP
gsap.from(".card", {duration: 2, y: '-100%', opacity: 0, ease: 'power3.out'});
gsap.from(".game-title", {duration: 2, y: '-100%', opacity: 0, ease: 'bounce', delay: 0.1});
gsap.from(".game-container", {duration: 2, y: '150%', opacity: 0, ease: 'power3.out', delay: 0.1});
// Akhir GSAP