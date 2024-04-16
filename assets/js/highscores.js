var scoreContainer = document.querySelector('#question-text')
var highscores = document.querySelector('#highscores');
var clearButton = document.querySelector('#clear');
var againButton = document.querySelector('#again');

// highscore local storage
function storeHighscore() {
    var storeScores = localStorage.getItem('highscores');
    storeScores = JSON.parse(storeScores);

    if (storeScores !== null) {
        for(var i = 0; i < scores.length; i)
            var scores = createElement('li');
            scores.textContent = scores[i].initials + ' ' + scores[i].score;
    }
};

clearButton.addEventListener('click', function() {
    localStorage.clear();
    location.reload();
});

againButton.addEventListener('click', function() {
    window.location.replace('index.html');
});