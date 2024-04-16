var timerElement = document.querySelector('#timer-count');
var startButton = document.querySelector('#start-button');
var questionElement = document.querySelector('#question-text');
var answersElement = document.querySelector('#answers');
var submitButton = document.querySelector('#submit');

var questions = [
    {
        question:'Commonly used data types do not include:',
        choices:['strings', 'booleans', 'alerts', 'numbers'],
        answer:2
    },
    {
        question:'Arrays in javaScript can be used to store _________.',
        choices:['numbers and strings', 'other arrays', 'booleans', 'all of the above'],
        answer:3
    },
    {
        question:'String values must be enclosed within _______ when being assigned to variables.',
        choices:['commas', 'curly brackets', 'quotes', 'parenthesis'],
        answer:2
    },
    {
        question:'A very useful tool used during development and debugging for printing content to the debugger is:',
        choices:['JavaScript', 'terminal/bash', 'for loops', 'console.log'],
        answer:0
    },
    {
        question:'The condition in an if/else statement is enclosed with ________.',
        choices:['quotes', 'curly brackets', 'parenthesis', 'square brackets'],
        answer:2
    },
];
var questionIndex = 0;
var timer;
var timerCount;
var penalty = 10;

// WHEN I click the start button THEN a timer starts and I am presented with a question
function startQuiz() {
    timerCount = 60;
    questionIndex = 0;
    renderQuestions();
    startTimer();
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
    renderQuestions();
}

// WHEN I answer a question THEN I am presented with another question
function renderQuestions() {
    questionElement.innerHTML = '';
    var displayQuestion = document.createElement('div');

    for (var i = 0; i < questions.length; i++) {
        displayQuestion.innerHTML = questions[questionIndex].question;
        var displayChoices = questions[questionIndex].choices;
    }    
        displayChoices.forEach(function (){
            var displayChoice = document.createElement('button');
            displayChoice.textContent = this;
            displayQuestion.appendChild(displayChoice);
            displayChoice.addEventListener('click', function() {
                if (this.textContent === questions[questionIndex].answer) {
                    questionIndex++;
                    renderQuestions();
                } else {
                    penalty();
                    renderQuestions();
                }
            })
        })
}

function checkAnswer() {
    if (answer === questions[questionIndex].answer) {
        questionIndex++;
        renderQuestions();
    } else {
        penalty();
        renderQuestions();
    }
}

// WHEN I answer a question incorrectly THEN time is subtracted from the clock
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