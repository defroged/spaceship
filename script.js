function navigate(page) {
    window.location.href = page;
}

let correctNumber = 17;
let tries = 0;
const maxTries = 3;

function submitGuess() {
    let guess = Number(document.getElementById('guessInput').value);

    if (guess === correctNumber) {
        navigate('Two.html'); // assuming you'll have a file named Two.html for the next part
    } else {
        tries += 1;
        if (tries >= maxTries) {
            navigate('end.html'); // assuming you'll have a file named end.html for the game over part
        } else {
            document.getElementById('triesRemaining').innerText = `You have ${maxTries - tries} attempts remaining.`;
        }
    }
}
