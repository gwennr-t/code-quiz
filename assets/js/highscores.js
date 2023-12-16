// variables for buttons
var goBack = document.querySelector('#go-back');
var clearScores = document.querySelector('#clear-scores');

// event listeners for go back and clear score buttons
goBack.addEventListener('click', function() {
    window.location.href = 'index.html';
});

clearScores.addEventListener('click', function() {
    localStorage.clear();
    location.reload();
});

// variables for score conatiner, high scores, and storing them
var scoreContainer = document.querySelector('#quiz-scores');
var highscores = document.querySelector('#list-scores');

var storeScores = localStorage.getItem('storeScores');
storeScores = JSON.parse(storeScores);

if(storeScores !== false) {
    for (var i = 0; i < storeScores.length; i++) {
        var printScore = document.createElement('li');
        printScore.setAttribute('id','scoreLi');
        printScore.textContent = printScore[i].initials + ' ' + storeScores[i].scores;

        highscores.appendChild(printScore);
    }
};