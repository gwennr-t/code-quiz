// variables for buttons
var listScores = document.querySelector('#listScores');
var goBack = document.querySelector('#goBack');
var clearScores = document.querySelector('#clearScores');

// event listeners for go back and clear score buttons
goBack.addEventListener('click', function() {
    window.location.href = 'index.html';
});

clearScores.addEventListener('click', function() {
    localStorage.clear();
    location.reload();
});