window.addEventListener("DOMContentLoaded", (e) => {
    const gameBoundary = document.getElementById("game-boundary");
    const pedal = document.getElementById("pedal");
    const ball = document.getElementById("ball");

    let ballX = 50;
    let ballY = 50;

    let ballDisplacementX = 2;
    let ballDisplacementY = 2;

    ball.style.left = `${ballX}px`
    ball.style.top = `${ballY}px`

    let pedalY = 0
    let pedalDisplacementY = 50

    pedal.style.top = `${pedalY}px`

    setInterval(() => {
        ballX += ballDisplacementX;
        ballY += ballDisplacementY;

        ball.style.left = `${ballX}px`;
        ball.style.top = `${ballY}px`;

        if (ballX > gameBoundary.offsetWidth - ball.offsetWidth || ballX <= 0) {
            ballDisplacementX *= -1
        }
        if (ballY > gameBoundary.offsetHeight - ball.offsetHeight || ballY <= 0) {
            ballDisplacementY *= -1
        }
        // ball collision with pedal
        if (ballY > pedal.offsetTop && ballY < pedal.offsetHeight + pedal.offsetTop && ballX <= pedal.offsetWidth) {
            ballDisplacementX *= -1
        }
    }, 1)

    document.addEventListener("keydown", (e) => {
        if (e.code === "ArrowUp" && pedalY > 0) {
            pedalY -= pedalDisplacementY
        }
        if (e.code === "ArrowDown" && (pedalY < (gameBoundary.offsetHeight - pedal.offsetHeight))) {
            pedalY += pedalDisplacementY
        }
        pedal.style.top = `${pedalY}px`
    })

})