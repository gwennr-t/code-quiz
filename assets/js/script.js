var introCard = document.querySelector('.intro');
var questionCard = document.querySelector('.questions');
var submitArea = document.querySelector('.submit-area');

var questionElement = document.querySelector('#question');
var answerChoices = document.querySelector('#answer-choices');
var nextButton = document.querySelector('#next');

var startButton = document.querySelector('#start-button');
var timerElement = document.querySelector('#timer-count');

var input = document.querySelector('#initials');
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
            {text:'square brackets', correct: false}
        ]
    },
];

let questionIndex = 0;

var timer;
var timerCount;

// WHEN I click the start button THEN a timer starts and I am presented with a question
function startQuiz() {
    questionIndex = 0;
    timerCount = 60;
    nextButton.innerHTML = 'Next'
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
    reset()

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
    questionCard.style.display = 'block';
    introCard.style.display = 'none';

}

function reset() {
    nextButton.style.display = 'none';
    while(answerChoices.firstChild) {
        answerChoices.removeChild(answerChoices.firstChild);
    }
}

// WHEN I answer a question incorrectly THEN time is subtracted from the clock
function checkAnswer(event) {
    var userAnswer = event.target;
    var correctAnswer = userAnswer.dataset.correct === 'true';

    if (correctAnswer) {
        userAnswer.classList.add('correct');
    } else {
        userAnswer.classList.add('incorrect');
    }
    Array.from(answerChoices.children).forEach(button => {
        if (button.dataset.correct === 'true') {
            button.classList.add('correct');
        } else {
            button.classList.add('incorrect');
        }
    });
    nextButton.style.display = 'block';
}

// WHEN all questions are answered or the timer reaches 0 THEN the game is over
function endQuiz() {
    reset();
    questionCard.style.display = 'none';
    submitArea.style.display = 'block';
}

function nextQuestion() {
    questionIndex++;

    if (questionIndex < questions.length) {
        renderQuestions();
    } else {
        endQuiz();
    }
}

nextButton.addEventListener('click', () => {
    if (questionIndex < questions.length) {
        nextQuestion();
    } else {
        startQuiz();
    }
})

startButton.addEventListener('click', startQuiz);