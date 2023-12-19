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
