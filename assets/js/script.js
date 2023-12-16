// variables for functions:
var startButton = document.querySelector('.start-button')
var timerElement = document.querySelector('.timer-count')

var timer;
var timerCount;
var score = 0;

// array of questions, choices, and answers
var questions = [
    {
        questions:'Commonly used data types do not include:',
        choices:['strings', 'booleans', 'alerts', 'numbers'],
        answer:2
    },
    {
        questions:'Arrays in javaScript can be used to store _________.',
        choices:['numbers and strings', 'other arrays', 'booleans', 'all of the above'],
        answer:3
    },
    {
        questions:'String values must be enclosed within _______ when being assigned to variables.',
        choices:['commas', 'curly brackets', 'quotes', 'parenthesis'],
        answer:2
    },
    {
        questions:'A very useful tool used during development and debugging for printing content to the debugger is:',
        choices:['JavaScript', 'terminal/bash', 'for loops', 'console.log'],
        answer:0
    },
    {
        questions:'The condition in an if/else statement is enclosed with ________.',
        choices:['quotes', 'curly brackets', 'parenthesis', 'square brackets'],
        answer:2
    },
];

// function to start the quiz when the button is clicked
function startQuiz() {
    timerCount = 60;
    startTimer()
}
startButton.addEventListener('click', startQuiz);

// function to start the timer
function startTimer() {
    // Sets timer
    timer = setInterval(function() {
      timerCount--;
      timerElement.textContent = timerCount;
      if (timerCount >= 0) {
      }
      // Tests if time has run out
      if (timerCount === 0) {
        // // Clears interval
        // clearInterval(timer);
        // loseGame();
      }
    }, 1000);
  }

// generate questions

    // correct answer

    // incorrect answer

    // end quiz

// score calculation and print to page

// inials box and button

// submisstion button that stores initials and score