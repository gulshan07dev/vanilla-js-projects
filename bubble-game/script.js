const bubbleContainer = document.querySelector("#p-bottom");
let hit;
let timer;
let score;


function startGame() {
    timer = 5;
    score = 60;
    makeBubble();
    getNewHit();
    runTimer();

    bubbleContainer.addEventListener("click", (e) => {
        if (Number(e.target.textContent) === hit) {
            increseScore()
            makeBubble()
            getNewHit()
        }
    })
}

function endGame() {
    bubbleContainer.innerHTML = `<div id="game-over-container">
                                    <h2>Game Over!</h2>
                                    <button>Start</button>
                                </div>`
    document.querySelector("#game-over-container button").addEventListener("click", startGame)
}

function makeBubble() {
    let clutter = "";

    for (let i = 0; i < 200; i++) {
        const randomNumber = Math.floor(Math.random() * 10);
        clutter += `<div class="bubble">${randomNumber}</div>`;
    }

    document.getElementById("p-bottom").innerHTML = clutter;
}

function getNewHit() {
    hit = Math.floor(Math.random() * 10);
    document.querySelector("#hit .box").textContent = hit;
}

function runTimer() {
    const timerInterval = setInterval(() => {
        document.querySelector("#timer .box").textContent = timer;
        if (timer > 0) {
            timer--;
        }
        else {
            clearInterval(timerInterval);
            endGame()
        }
    }, 1000)
}

function increseScore() {
    score += 10;
    document.querySelector("#score .box").textContent = score;
}

startGame()