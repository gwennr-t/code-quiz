var questionElement = document.querySelector('#question');
var answerChoices = document.querySelector('#answer-choices');
var nextButton = document.querySelector('#next');

var startButton = document.querySelector('#start-button');
var timerElement = document.querySelector('#timer-count');

var submitButton = document.querySelector('#submit');

var questions = [
    {
        question:'Commonly used data types do not include:',
        answers: [
            {text:'strings', correct: false},
            {text:'booleans', correct: false},
            {text:'alerts', correct: true},
            {text:'strings', correct: false}
        ]
    },
    {
        question:'Arrays in javaScript can be used to store _________.',
        answers: [
            {text:'numbers and strings', correct: false},
            {text:'other arrays', correct: false},
            {text:'booleans', correct: false},
            {text:'all of the above', correct: true}
        ]
    },
    {
        question:'String values must be enclosed within _______ when being assigned to variables.',
        answers: [
            {text:'commas', correct: false},
            {text:'curly brackets', correct: false},
            {text:'quotes', correct: true},
            {text:'parenthesis', correct: false}
        ]
    },
    {
        question:'A very useful tool used during development and debugging for printing content to the debugger is:',
        answers: [
            {text:'JavaScript', correct: false},
            {text:'terminal/ bash', correct: false},
            {text:'for loops', correct: false},
            {text:'console.log', correct: true}
        ]
    },
    {
        question:'The condition in an if/else statement is enclosed with ________.',
        answers: [
            {text:'quotes', correct: false},
            {text:'curly brackets', correct: true},
            {text:'parenthesis', correct: false},
            {text:'square brackets', correct: true}
        ]
    },
];

let questionIndex = 0;

var timer;
var timerCount;
var penalty = 10;

// WHEN I click the start button THEN a timer starts and I am presented with a question
function startQuiz() {
    questionIndex = 0;
    timerCount = 60;
    startTimer();
    renderQuestions();
}

function startTimer() {
    timer = setInterval(function() {
        timerCount--;
        timerElement.textContent = timerCount;
        if (timerCount === 0) {
            clearInterval(timer);
            endQuiz();
        }
    },1000)
}

// WHEN I answer a question THEN I am presented with another question
function renderQuestions() {
    let currentQuestion = questions[questionIndex];
    let questionNumber = questionIndex + 1;
    questionElement.innerHTML = questionNumber + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        var button = document.createElement('button');
        button.innerHTML = answer.text;
        button.classList.add('btn');
        answerChoices.appendChild(button);

        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }

        button.addEventListener('click', checkAnswer)
    });
}

// WHEN I answer a question incorrectly THEN time is subtracted from the clock
function checkAnswer() {

}

function penalty() {
    timerCount -= penalty;
    timerElement.textContent = timerCount;

}

// WHEN all questions are answered or the timer reaches 0 THEN the game is over
function endQuiz() {
    

}

// WHEN the game is over THEN I can save my initials and score
function saveInitials() {

}

startButton.addEventListener('click', startQuiz);

submitButton.addEventListener('click', saveInitials);