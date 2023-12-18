// variables for functions:
var container = document.querySelector('.container');
var startButton = document.querySelector('.start-button');

var score = 0;
var minus = 10;

// array of questions, choices, and answers for quiz
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

var timerElement = document.querySelector('.timer-count');
var timer;
var timerCount;
var timeInterval = 0;

// function to start the quiz when the button is clicked
function startQuiz() {
    timerCount = 10;
    startTimer();
}
startButton.addEventListener('click', startQuiz)
    if (timeInterval === 0) {
        timeInterval = setInterval(function() {
            timerCount--;
            timerElement.textContent = 'Timer: ' + timerCount; 
            
            if(timerCount <= 0) {
                clearInterval(timeInterval);
                endQuiz()
            }
        }, 1000);
    }
// just added in v !!!
function quizQuestions(questionIndex) {
    container.innerHTML = '';
    
    var showQuestion = document.createElement('h2');

    for (var i = 0; i < questions; i++) {
        showQuestion.innerhtml = questions[questionIndex].question;
        var  showChoices = questions[questionIndex].choices;
        container.appendChild(showQuestion);
    }

    createUl.innerHTML = '';

    showChoices.forEach(function(newItem) {
        var listItem = document.createElement('li');
        listItem.innerHTML += '<button>' + newItem + '</button>';

        container.appendChild(createUl);
        createUl.appendChild(listItem);

        listItem.addEventListener('click');
    });
}

// just added ^ !!!


// function endQuiz() {
//     if(timerCount === 0) {
//         var timeDone = document.querySelector('h1');
//         timeDone.textContent = ('Your time is up!');
//         timeDone.appendChild(timeDone);

//         timeDone.addEventListener(timer === 0);

//         var finalScore = document.querySelector('p');
//         finalScore.textContent = ('Final Score: ' + score);
//         finalScore.appendChild(finalScore);

//         finalScore.addEventListener(timer === 0);

//     }else{
//            score = 0; 
//            var noTime = document.createElement('h2');
//            noTime.textContent = ('Times up!');
//            container.appendChild(noTime);

//         var finalScore = document.querySelector('p');
//         finalScore.textContent = ('Final Score: ' + score);
//         finalScore.appendChild(finalScore);

//         finalScore.addEventListener(timer === 0);
//     }
// }

// score calculation and print to page

// inials box and button

// submisstion button that stores initials and score