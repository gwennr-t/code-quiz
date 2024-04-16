var scoreContainer = document.querySelector('#question-text')
var highscores = document.querySelector('#highscores');
var clearButton = document.querySelector('#clear');
var againButton = document.querySelector('#again');

// highscore local storage
function storeHighscore() {

}

// render high scores
function highscores() {

}

clearButton.addEventListener('click', function() {
    localStorage.clear();
    location.reload();
});

againButton.addEventListener('click', function() {
    window.location.replace('index.html');
});