const timerElement = document.querySelector("#timer-count");
const startButton = document.querySelector("#start-button");
const score = 0;
const questionElement = document.querySelector("#question-text");

// array of questions, choices, and answers for quiz
const questions = [
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
const questionIndex = 0;

const timer = 60;
const penalty = 10;

// The startGame function is called when the start button is clicked
function startGame() {
    timerCount = 60;
    // Prevents start button from being clicked when round is in progress
    startButton.disabled = true;
    startTimer()
  }

// The setTimer function starts and stops the timer and triggers winGame() and loseGame()
function startTimer() {
    timerInterval = setInterval(function() {
        timerCount--;
        timerElement.textContent = 'Timer: ' + timerCount; 

        if(timerCount <= 0) {
            clearInterval(timerInterval);
            endGame();
        }
    }, 1000);
  }

// event listener for start game button to call start game function
startButton.addEventListener("click", startGame);

// new question function generates the next question of the code quiz
function newQuestion() {
    questionIndex++;
    if (questionIndex < questions.length) {
        questionElement.innerText = questions[questionIndex].question;
        choices.forEach(choice => {
            choice.innerText = questions[questionIndex].choices[choice];
        });
    } else {
        timerCount = 0;
        endGame();
    }
}

// end game function called
function endGame() {
    clearInterval(timerInterval);
    startButton.disabled = false;
    questionElement.innerText = "";
    choices.forEach(choice => {
        choice.innerText = "";
    });
}